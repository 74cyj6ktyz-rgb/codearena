require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Database = require("better-sqlite3");
const Groq = require("groq-sdk");

const app = express();
const PORT = 5001;

app.use(cors());
app.use(express.json({ limit: "10mb" }));

const db = new Database("codearena.db");
db.pragma("journal_mode = WAL");

db.exec(`
CREATE TABLE IF NOT EXISTS profile (
  id INTEGER PRIMARY KEY,
  name TEXT DEFAULT 'CodeArena User',
  email TEXT DEFAULT '',
  bio TEXT DEFAULT '',
  college TEXT DEFAULT '',
  language TEXT DEFAULT 'Python',
  avatar TEXT DEFAULT ''
);

CREATE TABLE IF NOT EXISTS submissions (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  problem_id TEXT,
  problem_title TEXT,
  language TEXT,
  code TEXT,
  status TEXT,
  output TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS solved (
  problem_id TEXT PRIMARY KEY,
  problem_title TEXT,
  difficulty TEXT,
  solved_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS quiz_registration (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT,
  registered_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS quiz_results (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  email TEXT,
  score INTEGER,
  total INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS learning_progress (
  id INTEGER PRIMARY KEY,
  completed_topics TEXT DEFAULT '[]',
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT OR IGNORE INTO profile (id, name)
VALUES (1, 'CodeArena User');

INSERT OR IGNORE INTO learning_progress (id)
VALUES (1);
`);

const groq = process.env.GROQ_API_KEY
  ? new Groq({ apiKey: process.env.GROQ_API_KEY })
  : null;

async function askAI(prompt, system = "You are CodeArena AI, a helpful programming tutor. Explain clearly to a student.") {
  if (!groq) {
    throw new Error("GROQ_API_KEY is missing in backend/.env");
  }

  const response = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "system", content: system },
      { role: "user", content: prompt }
    ],
    temperature: 0.4
  });

  return response.choices[0].message.content;
}

app.get("/api/health", (req, res) => {
  res.json({ status: "running", app: "CodeArena" });
});

// PROFILE

app.get("/api/profile", (req, res) => {
  res.json(db.prepare("SELECT * FROM profile WHERE id = 1").get());
});

app.put("/api/profile", (req, res) => {
  const p = req.body;

  db.prepare(`
    UPDATE profile SET
      name = ?,
      email = ?,
      bio = ?,
      college = ?,
      language = ?,
      avatar = ?
    WHERE id = 1
  `).run(
    p.name || "",
    p.email || "",
    p.bio || "",
    p.college || "",
    p.language || "Python",
    p.avatar || ""
  );

  res.json({
    success: true,
    profile: db.prepare("SELECT * FROM profile WHERE id = 1").get()
  });
});

// STATISTICS

app.get("/api/stats", (req, res) => {
  const totalSubmissions = db.prepare(
    "SELECT COUNT(*) count FROM submissions"
  ).get().count;

  const solved = db.prepare(
    "SELECT COUNT(*) count FROM solved"
  ).get().count;

  const accepted = db.prepare(
    "SELECT COUNT(*) count FROM submissions WHERE status = 'Accepted'"
  ).get().count;

  const recent = db.prepare(
    "SELECT * FROM submissions ORDER BY id DESC LIMIT 5"
  ).all();

  res.json({ totalSubmissions, solved, accepted, recent });
});

// SUBMISSIONS

app.get("/api/submissions", (req, res) => {
  res.json(
    db.prepare("SELECT * FROM submissions ORDER BY id DESC").all()
  );
});

app.post("/api/submissions", (req, res) => {
  const p = req.body;

  const result = db.prepare(`
    INSERT INTO submissions (
      problem_id, problem_title, language,
      code, status, output
    )
    VALUES (?, ?, ?, ?, ?, ?)
  `).run(
    p.problem_id || "",
    p.problem_title || "",
    p.language || "",
    p.code || "",
    p.status || "Failed",
    p.output || ""
  );

  if (p.status === "Accepted") {
    db.prepare(`
      INSERT OR IGNORE INTO solved (
        problem_id, problem_title, difficulty
      )
      VALUES (?, ?, ?)
    `).run(
      p.problem_id || "",
      p.problem_title || "",
      p.difficulty || "Easy"
    );
  }

  res.json({ success: true, id: result.lastInsertRowid });
});

app.get("/api/solved", (req, res) => {
  res.json(
    db.prepare("SELECT * FROM solved ORDER BY solved_at DESC").all()
  );
});

// CODE RUNNER

app.post("/api/run", async (req, res) => {
  const { code, language, input } = req.body;

  const languages = {
    Python: {
      language: "python",
      version: "3.10.0",
      filename: "main.py"
    },
    JavaScript: {
      language: "javascript",
      version: "18.15.0",
      filename: "main.js"
    },
    Java: {
      language: "java",
      version: "15.0.2",
      filename: "Main.java"
    },
    C: {
      language: "c",
      version: "10.2.0",
      filename: "main.c"
    },
    "C++": {
      language: "cpp",
      version: "10.2.0",
      filename: "main.cpp"
    }
  };

  const selected = languages[language];

  if (!selected) {
    return res.status(400).json({ error: "Unsupported language" });
  }

  try {
    const response = await fetch("http://localhost:2000/api/v2/execute", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        language: selected.language,
        version: selected.version,
        files: [{ name: selected.filename, content: code }],
        stdin: input || ""
      })
    });

    const result = await response.json();

    res.json({
      output: result.run?.stdout || "",
      stderr: result.run?.stderr || "",
      compile_output: result.compile?.output || "",
      exitCode: result.run?.code,
      signal: result.run?.signal
    });
  } catch (error) {
    res.status(500).json({
      error: "Code runner is unavailable. Check Piston on port 2000.",
      details: error.message
    });
  }
});

// AI FEATURES

app.post("/api/ai", async (req, res) => {
  try {
    const { type, prompt, code, language, problem } = req.body;

    let instruction = "";

    if (type === "hint") {
      instruction = `
You are a programming tutor.

Give ONE progressive hint only.
Do not give the complete answer.
Do not immediately reveal the algorithm.
Start with a small clue that helps the student think.

Problem:
${problem || prompt}

Student code:
${code || "No code written yet."}

If the student asks for another hint, provide a stronger hint.
`;
    }

    else if (type === "review") {
      instruction = `
Perform a detailed code review.

Problem:
${problem || prompt}

Language:
${language}

Code:
${code}

Review:
1. Correctness
2. Bugs
3. Edge cases
4. Time complexity
5. Space complexity
6. Code quality
7. Improvements

Be constructive and explain the reasons.
`;
    }

    else if (type === "explain") {
      instruction = `
Explain the following code LINE BY LINE.

Language:
${language}

Code:
${code}

For every line:
- Show the line
- Explain what it does
- Explain why it is needed
- Explain relevant programming concepts

Then give a simple overall summary.
`;
    }

    else if (type === "solver") {
      instruction = `
You are an expert coding instructor.

Solve the programming problem using this structure:

1. Understand the problem
2. Input and output
3. Important observations
4. Brute force approach
5. Optimized approach
6. Step-by-step algorithm
7. Pseudocode
8. Complete solution in ${language}
9. Explanation of the solution
10. Time complexity
11. Space complexity
12. Edge cases

Problem:
${problem || prompt}

Student code:
${code || "No code supplied."}
`;
    }

    else if (type === "question") {
      instruction = `
Answer the student's programming question.
Use simple explanations and examples.

Question:
${prompt}

Current code:
${code || "No code supplied."}
`;
    }

    else {
      instruction = prompt || "Help me learn programming.";
    }

    const answer = await askAI(instruction);

    res.json({ answer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// CODE REVIEW

app.post("/api/review", async (req, res) => {
  try {
    const { code, language, problem } = req.body;

    const review = await askAI(`
Review this code carefully.

Problem:
${problem}

Language:
${language}

Code:
${code}

Give:
- Correctness
- Errors
- Bugs
- Edge cases
- Time complexity
- Space complexity
- Improvements
- Better coding practices
`);

    res.json({ review });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// AI LEARNING PATH

app.get("/api/learning-path", (req, res) => {
  const data = db.prepare(
    "SELECT * FROM learning_progress WHERE id = 1"
  ).get();

  res.json({
    completedTopics: JSON.parse(data.completed_topics || "[]")
  });
});

app.post("/api/learning-path", (req, res) => {
  const completedTopics = req.body.completedTopics || [];

  db.prepare(`
    UPDATE learning_progress
    SET completed_topics = ?,
        updated_at = CURRENT_TIMESTAMP
    WHERE id = 1
  `).run(JSON.stringify(completedTopics));

  res.json({ success: true });
});

app.post("/api/learning-path/generate", async (req, res) => {
  try {
    const { profile, solved, completedTopics } = req.body;

    const answer = await askAI(`
Create a personalized programming learning roadmap.

Student profile:
${JSON.stringify(profile || {})}

Problems solved:
${JSON.stringify(solved || [])}

Topics already completed:
${JSON.stringify(completedTopics || [])}

Create a practical 8-week roadmap.

Include:
- Week
- Topic
- Concepts
- Practice tasks
- Mini project
- Recommended coding problems
- Skills gained

Adapt the roadmap to the student's current level.
Use clear Markdown formatting.
`);

    res.json({ path: answer });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// QUIZ

app.get("/api/quiz/registration", (req, res) => {
  res.json(
    db.prepare("SELECT * FROM quiz_registration ORDER BY id DESC").all()
  );
});

app.post("/api/quiz/register", (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      error: "Name and email are required"
    });
  }

  const existing = db.prepare(
    "SELECT * FROM quiz_registration WHERE email = ?"
  ).get(email);

  if (existing) {
    return res.json({ success: true, message: "Already registered" });
  }

  db.prepare(`
    INSERT INTO quiz_registration (name, email)
    VALUES (?, ?)
  `).run(name, email);

  res.json({ success: true });
});

app.post("/api/quiz/result", (req, res) => {
  const { name, email, score, total } = req.body;

  db.prepare(`
    INSERT INTO quiz_results (name, email, score, total)
    VALUES (?, ?, ?, ?)
  `).run(name || "", email || "", score || 0, total || 0);

  res.json({ success: true });
});

app.get("/api/quiz/results", (req, res) => {
  res.json(
    db.prepare("SELECT * FROM quiz_results ORDER BY score DESC").all()
  );
});

app.listen(PORT, () => {
  console.log(`CodeArena backend running at http://localhost:${PORT}`);
});