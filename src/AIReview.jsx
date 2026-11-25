import React, { useState } from "react";

export default function AIReview({ code = "", language = "Python", problem = "" }) {
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function reviewCode() {
    if (!code.trim()) {
      setError("Please write or paste code before reviewing.");
      return;
    }

    setLoading(true);
    setError("");
    setReview("");

    try {
      const response = await fetch("https://codearena-0sir.onrender.com/api/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
          language,
          problem,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.details || data.error || "Review failed");
      }

      setReview(data.review);
    } catch (err) {
      setError(err.message || "Unable to review code.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div>
          <h2 style={styles.title}>🤖 AI Code Reviewer</h2>
          <p style={styles.subtitle}>
            Find bugs, improve your code, and understand complexity.
          </p>
        </div>
      </div>

      <button
        onClick={reviewCode}
        disabled={loading}
        style={{
          ...styles.button,
          opacity: loading ? 0.7 : 1,
          cursor: loading ? "not-allowed" : "pointer",
        }}
      >
        {loading ? "⚡ Reviewing your code..." : "🔍 Review My Code"}
      </button>

      {error && <div style={styles.error}>{error}</div>}

      {review && (
        <div style={styles.result}>
          <h3 style={styles.resultTitle}>AI Review Results</h3>

          <div style={styles.reviewText}>
            {review}
          </div>
        </div>
      )}
    </div>
  );
}

const styles = {
  container: {
    background: "#111827",
    border: "1px solid #374151",
    borderRadius: "16px",
    padding: "24px",
    marginTop: "20px",
    color: "#ffffff",
  },

  header: {
    marginBottom: "16px",
  },

  title: {
    fontSize: "22px",
    margin: "0 0 8px 0",
  },

  subtitle: {
    color: "#9ca3af",
    fontSize: "14px",
    margin: 0,
  },

  button: {
    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    color: "#ffffff",
    border: "none",
    borderRadius: "10px",
    padding: "14px 20px",
    fontSize: "15px",
    fontWeight: "bold",
    width: "100%",
    transition: "0.2s",
  },

  error: {
    background: "#7f1d1d",
    color: "#fecaca",
    padding: "12px",
    borderRadius: "8px",
    marginTop: "15px",
  },

  result: {
    marginTop: "20px",
    background: "#0b1220",
    border: "1px solid #374151",
    borderRadius: "12px",
    padding: "18px",
  },

  resultTitle: {
    color: "#a5b4fc",
    marginTop: 0,
  },

  reviewText: {
    whiteSpace: "pre-wrap",
    lineHeight: "1.7",
    fontSize: "14px",
    overflowWrap: "anywhere",
  },
};