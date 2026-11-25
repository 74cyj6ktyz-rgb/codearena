import React, { useState, useEffect } from "react";

const API = "https://codearena-0sir.onrender.com";

const problems = [
  {
    "id": 1,
    "title": "Two Sum",
    "difficulty": "Easy",
    "category": "Arrays",
    "description": "Solve the two sum problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 2,
    "title": "Find Maximum",
    "difficulty": "Medium",
    "category": "Arrays",
    "description": "Solve the find maximum problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 3,
    "title": "Find Minimum",
    "difficulty": "Hard",
    "category": "Arrays",
    "description": "Solve the find minimum problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 4,
    "title": "Array Sum",
    "difficulty": "Easy",
    "category": "Arrays",
    "description": "Solve the array sum problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 5,
    "title": "Reverse Array",
    "difficulty": "Medium",
    "category": "Arrays",
    "description": "Solve the reverse array problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 6,
    "title": "Remove Duplicates",
    "difficulty": "Hard",
    "category": "Arrays",
    "description": "Solve the remove duplicates problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 7,
    "title": "Move Zeroes",
    "difficulty": "Easy",
    "category": "Arrays",
    "description": "Solve the move zeroes problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 8,
    "title": "Rotate Array",
    "difficulty": "Medium",
    "category": "Arrays",
    "description": "Solve the rotate array problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 9,
    "title": "Second Largest",
    "difficulty": "Hard",
    "category": "Arrays",
    "description": "Solve the second largest problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 10,
    "title": "Merge Sorted Arrays",
    "difficulty": "Easy",
    "category": "Arrays",
    "description": "Solve the merge sorted arrays problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 11,
    "title": "Missing Number",
    "difficulty": "Medium",
    "category": "Arrays",
    "description": "Solve the missing number problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 12,
    "title": "Majority Element",
    "difficulty": "Hard",
    "category": "Arrays",
    "description": "Solve the majority element problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 13,
    "title": "Best Time to Buy Stock",
    "difficulty": "Easy",
    "category": "Arrays",
    "description": "Solve the best time to buy stock problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 14,
    "title": "Maximum Subarray",
    "difficulty": "Medium",
    "category": "Arrays",
    "description": "Solve the maximum subarray problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 15,
    "title": "Product Except Self",
    "difficulty": "Hard",
    "category": "Arrays",
    "description": "Solve the product except self problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 16,
    "title": "Reverse String",
    "difficulty": "Easy",
    "category": "Strings",
    "description": "Solve the reverse string problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 17,
    "title": "Palindrome Check",
    "difficulty": "Medium",
    "category": "Strings",
    "description": "Solve the palindrome check problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 18,
    "title": "Count Vowels",
    "difficulty": "Hard",
    "category": "Strings",
    "description": "Solve the count vowels problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 19,
    "title": "Character Frequency",
    "difficulty": "Easy",
    "category": "Strings",
    "description": "Solve the character frequency problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 20,
    "title": "Anagram Check",
    "difficulty": "Medium",
    "category": "Strings",
    "description": "Solve the anagram check problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 21,
    "title": "First Unique Character",
    "difficulty": "Hard",
    "category": "Strings",
    "description": "Solve the first unique character problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 22,
    "title": "Longest Common Prefix",
    "difficulty": "Easy",
    "category": "Strings",
    "description": "Solve the longest common prefix problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 23,
    "title": "Valid Parentheses",
    "difficulty": "Medium",
    "category": "Strings",
    "description": "Solve the valid parentheses problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 24,
    "title": "Remove Spaces",
    "difficulty": "Hard",
    "category": "Strings",
    "description": "Solve the remove spaces problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 25,
    "title": "String Compression",
    "difficulty": "Easy",
    "category": "Strings",
    "description": "Solve the string compression problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 26,
    "title": "Count Words",
    "difficulty": "Medium",
    "category": "Strings",
    "description": "Solve the count words problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 27,
    "title": "Rotate String",
    "difficulty": "Hard",
    "category": "Strings",
    "description": "Solve the rotate string problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 28,
    "title": "Roman to Integer",
    "difficulty": "Easy",
    "category": "Strings",
    "description": "Solve the roman to integer problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 29,
    "title": "Longest Substring",
    "difficulty": "Medium",
    "category": "Strings",
    "description": "Solve the longest substring problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 30,
    "title": "Group Anagrams",
    "difficulty": "Hard",
    "category": "Strings",
    "description": "Solve the group anagrams problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 31,
    "title": "Two Sum Hash Map",
    "difficulty": "Easy",
    "category": "Hash Maps",
    "description": "Solve the two sum hash map problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 32,
    "title": "Frequency Counter",
    "difficulty": "Medium",
    "category": "Hash Maps",
    "description": "Solve the frequency counter problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 33,
    "title": "Duplicate Finder",
    "difficulty": "Hard",
    "category": "Hash Maps",
    "description": "Solve the duplicate finder problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 34,
    "title": "Intersection of Arrays",
    "difficulty": "Easy",
    "category": "Hash Maps",
    "description": "Solve the intersection of arrays problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 35,
    "title": "Isomorphic Strings",
    "difficulty": "Medium",
    "category": "Hash Maps",
    "description": "Solve the isomorphic strings problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 36,
    "title": "Word Pattern",
    "difficulty": "Hard",
    "category": "Hash Maps",
    "description": "Solve the word pattern problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 37,
    "title": "Subarray Sum",
    "difficulty": "Easy",
    "category": "Hash Maps",
    "description": "Solve the subarray sum problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 38,
    "title": "Ransom Note",
    "difficulty": "Medium",
    "category": "Hash Maps",
    "description": "Solve the ransom note problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 39,
    "title": "Top K Frequent",
    "difficulty": "Hard",
    "category": "Hash Maps",
    "description": "Solve the top k frequent problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 40,
    "title": "Happy Number",
    "difficulty": "Easy",
    "category": "Hash Maps",
    "description": "Solve the happy number problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 41,
    "title": "Binary Search",
    "difficulty": "Medium",
    "category": "Searching",
    "description": "Solve the binary search problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 42,
    "title": "Search Insert Position",
    "difficulty": "Hard",
    "category": "Searching",
    "description": "Solve the search insert position problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 43,
    "title": "First Occurrence",
    "difficulty": "Easy",
    "category": "Searching",
    "description": "Solve the first occurrence problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 44,
    "title": "Last Occurrence",
    "difficulty": "Medium",
    "category": "Searching",
    "description": "Solve the last occurrence problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 45,
    "title": "Peak Element",
    "difficulty": "Hard",
    "category": "Searching",
    "description": "Solve the peak element problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 46,
    "title": "Search Rotated Array",
    "difficulty": "Easy",
    "category": "Searching",
    "description": "Solve the search rotated array problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 47,
    "title": "Square Root",
    "difficulty": "Medium",
    "category": "Searching",
    "description": "Solve the square root problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 48,
    "title": "Find Range",
    "difficulty": "Hard",
    "category": "Searching",
    "description": "Solve the find range problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 49,
    "title": "Two Pointer Search",
    "difficulty": "Easy",
    "category": "Searching",
    "description": "Solve the two pointer search problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 50,
    "title": "Matrix Search",
    "difficulty": "Medium",
    "category": "Searching",
    "description": "Solve the matrix search problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 51,
    "title": "Bubble Sort",
    "difficulty": "Hard",
    "category": "Sorting",
    "description": "Solve the bubble sort problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 52,
    "title": "Selection Sort",
    "difficulty": "Easy",
    "category": "Sorting",
    "description": "Solve the selection sort problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 53,
    "title": "Insertion Sort",
    "difficulty": "Medium",
    "category": "Sorting",
    "description": "Solve the insertion sort problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 54,
    "title": "Merge Sort",
    "difficulty": "Hard",
    "category": "Sorting",
    "description": "Solve the merge sort problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 55,
    "title": "Quick Sort",
    "difficulty": "Easy",
    "category": "Sorting",
    "description": "Solve the quick sort problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 56,
    "title": "Sort Colors",
    "difficulty": "Medium",
    "category": "Sorting",
    "description": "Solve the sort colors problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 57,
    "title": "Sort by Frequency",
    "difficulty": "Hard",
    "category": "Sorting",
    "description": "Solve the sort by frequency problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 58,
    "title": "Kth Largest",
    "difficulty": "Easy",
    "category": "Sorting",
    "description": "Solve the kth largest problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 59,
    "title": "Merge Intervals",
    "difficulty": "Medium",
    "category": "Sorting",
    "description": "Solve the merge intervals problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 60,
    "title": "Meeting Rooms",
    "difficulty": "Hard",
    "category": "Sorting",
    "description": "Solve the meeting rooms problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 61,
    "title": "Factorial",
    "difficulty": "Easy",
    "category": "Recursion",
    "description": "Solve the factorial problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 62,
    "title": "Fibonacci",
    "difficulty": "Medium",
    "category": "Recursion",
    "description": "Solve the fibonacci problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 63,
    "title": "Power Function",
    "difficulty": "Hard",
    "category": "Recursion",
    "description": "Solve the power function problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 64,
    "title": "Sum of Digits",
    "difficulty": "Easy",
    "category": "Recursion",
    "description": "Solve the sum of digits problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 65,
    "title": "Reverse Number",
    "difficulty": "Medium",
    "category": "Recursion",
    "description": "Solve the reverse number problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 66,
    "title": "Palindrome Number",
    "difficulty": "Hard",
    "category": "Recursion",
    "description": "Solve the palindrome number problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 67,
    "title": "Generate Subsets",
    "difficulty": "Easy",
    "category": "Recursion",
    "description": "Solve the generate subsets problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 68,
    "title": "Permutations",
    "difficulty": "Medium",
    "category": "Recursion",
    "description": "Solve the permutations problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 69,
    "title": "Tower of Hanoi",
    "difficulty": "Hard",
    "category": "Recursion",
    "description": "Solve the tower of hanoi problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 70,
    "title": "Combination Sum",
    "difficulty": "Easy",
    "category": "Recursion",
    "description": "Solve the combination sum problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 71,
    "title": "Reverse Linked List",
    "difficulty": "Medium",
    "category": "Linked Lists",
    "description": "Solve the reverse linked list problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 72,
    "title": "Middle Node",
    "difficulty": "Hard",
    "category": "Linked Lists",
    "description": "Solve the middle node problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 73,
    "title": "Detect Cycle",
    "difficulty": "Easy",
    "category": "Linked Lists",
    "description": "Solve the detect cycle problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 74,
    "title": "Merge Two Lists",
    "difficulty": "Medium",
    "category": "Linked Lists",
    "description": "Solve the merge two lists problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 75,
    "title": "Remove Nth Node",
    "difficulty": "Hard",
    "category": "Linked Lists",
    "description": "Solve the remove nth node problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 76,
    "title": "Add Two Numbers",
    "difficulty": "Easy",
    "category": "Linked Lists",
    "description": "Solve the add two numbers problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 77,
    "title": "Linked List Palindrome",
    "difficulty": "Medium",
    "category": "Linked Lists",
    "description": "Solve the linked list palindrome problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 78,
    "title": "Intersection Node",
    "difficulty": "Hard",
    "category": "Linked Lists",
    "description": "Solve the intersection node problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 79,
    "title": "Delete Node",
    "difficulty": "Easy",
    "category": "Linked Lists",
    "description": "Solve the delete node problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 80,
    "title": "Rotate List",
    "difficulty": "Medium",
    "category": "Linked Lists",
    "description": "Solve the rotate list problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 81,
    "title": "Stack Implementation",
    "difficulty": "Hard",
    "category": "Stacks & Queues",
    "description": "Solve the stack implementation problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 82,
    "title": "Queue Implementation",
    "difficulty": "Easy",
    "category": "Stacks & Queues",
    "description": "Solve the queue implementation problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 83,
    "title": "Min Stack",
    "difficulty": "Medium",
    "category": "Stacks & Queues",
    "description": "Solve the min stack problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 84,
    "title": "Next Greater Element",
    "difficulty": "Hard",
    "category": "Stacks & Queues",
    "description": "Solve the next greater element problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 85,
    "title": "Daily Temperatures",
    "difficulty": "Easy",
    "category": "Stacks & Queues",
    "description": "Solve the daily temperatures problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 86,
    "title": "Evaluate RPN",
    "difficulty": "Medium",
    "category": "Stacks & Queues",
    "description": "Solve the evaluate rpn problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 87,
    "title": "Queue Using Stacks",
    "difficulty": "Hard",
    "category": "Stacks & Queues",
    "description": "Solve the queue using stacks problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 88,
    "title": "Stack Using Queues",
    "difficulty": "Easy",
    "category": "Stacks & Queues",
    "description": "Solve the stack using queues problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 89,
    "title": "Sliding Window Maximum",
    "difficulty": "Medium",
    "category": "Stacks & Queues",
    "description": "Solve the sliding window maximum problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 90,
    "title": "Circular Queue",
    "difficulty": "Hard",
    "category": "Stacks & Queues",
    "description": "Solve the circular queue problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 91,
    "title": "Tree Height",
    "difficulty": "Easy",
    "category": "Trees",
    "description": "Solve the tree height problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 92,
    "title": "Tree Inorder",
    "difficulty": "Medium",
    "category": "Trees",
    "description": "Solve the tree inorder problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 93,
    "title": "Tree Preorder",
    "difficulty": "Hard",
    "category": "Trees",
    "description": "Solve the tree preorder problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 94,
    "title": "Tree Level Order",
    "difficulty": "Easy",
    "category": "Trees",
    "description": "Solve the tree level order problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 95,
    "title": "Invert Binary Tree",
    "difficulty": "Medium",
    "category": "Trees",
    "description": "Solve the invert binary tree problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 96,
    "title": "Climbing Stairs",
    "difficulty": "Hard",
    "category": "Dynamic Programming",
    "description": "Solve the climbing stairs problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 97,
    "title": "House Robber",
    "difficulty": "Easy",
    "category": "Dynamic Programming",
    "description": "Solve the house robber problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 98,
    "title": "Coin Change",
    "difficulty": "Medium",
    "category": "Dynamic Programming",
    "description": "Solve the coin change problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 99,
    "title": "Longest Increasing Subsequence",
    "difficulty": "Hard",
    "category": "Dynamic Programming",
    "description": "Solve the longest increasing subsequence problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  },
  {
    "id": 100,
    "title": "Unique Paths",
    "difficulty": "Easy",
    "category": "Dynamic Programming",
    "description": "Solve the unique paths problem. Write a program that reads the problem input from standard input and prints the required result. Consider edge cases and explain your approach.",
    "example": "Input: see problem statement\nOutput: expected result",
    "starter": "# Read input from stdin and print your answer.\n# Example:\n# import sys\n# data = sys.stdin.read().strip()\n# print(your_solution(data)\n"
  }
];

function App() {
  const [page, setPage] = useState("Dashboard");

  const [currentProblem, setCurrentProblem] = useState(problems[0]);

  const [language, setLanguage] = useState("python");

  const [code, setCode] = useState(problems[0].starter);

  const [output, setOutput] = useState("");

  const [loading, setLoading] = useState(false);

  const [aiLoading, setAiLoading] = useState(false);

  const [aiResponse, setAiResponse] = useState("");

  const [activeAI, setActiveAI] = useState("");

  const [hintLevel, setHintLevel] = useState(0);

  const [solved, setSolved] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("codearena-solved") || "[]");
    } catch {
      return [];
    }
  });

  const [history, setHistory] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("codearena-history") || "[]");
    } catch {
      return [];
    }
  });

  const [question, setQuestion] = useState("");

  const [search, setSearch] = useState("");

  const [difficulty, setDifficulty] = useState("All");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [pageNumber, setPageNumber] = useState(1);
  const [profileName, setProfileName] = useState(() => localStorage.getItem("codearena-profile-name") || "Coder");
  const [profileBio, setProfileBio] = useState(() => localStorage.getItem("codearena-profile-bio") || "Learning to code every day.");
  const [testCases, setTestCases] = useState([{ input: "", expected: "", name: "Test 1" }]);
  const [testResults, setTestResults] = useState([]);
  const [testRunning, setTestRunning] = useState(false);
  const [quizRegistered, setQuizRegistered] = useState(() => localStorage.getItem("codearena-saturday-registration") === "yes");
  const [quizScore, setQuizScore] = useState(() => Number(localStorage.getItem("codearena-saturday-score") || 0));
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [leaderboardName, setLeaderboardName] = useState(() => localStorage.getItem("codearena-profile-name") || "Coder");
  const [activeCategory, setActiveCategory] = useState("All");
  const [streak, setStreak] = useState(() => Number(localStorage.getItem("codearena-streak") || 0));
  const [lastActive, setLastActive] = useState(() => localStorage.getItem("codearena-last-active") || "");

  const quizQuestions = [
    { q: "What is the average time complexity of lookup in a hash map?", options: ["O(1)", "O(n)", "O(log n)", "O(n²)"], answer: 0 },
    { q: "Which data structure follows LIFO?", options: ["Queue", "Stack", "Graph", "Heap"], answer: 1 },
    { q: "What does binary search require?", options: ["A linked list", "Unsorted data", "Sorted data", "Unique values"], answer: 2 },
    { q: "Which traversal visits left, root, right in a binary tree?", options: ["Preorder", "Postorder", "Level order", "Inorder"], answer: 3 },
    { q: "Which algorithmic technique is used by merge sort?", options: ["Divide and conquer", "Greedy only", "Backtracking only", "Brute force only"], answer: 0 }
  ];
  const categories = ["All", ...Object.keys(Object.groupBy ? Object.groupBy(problems, p => p.category) : problems.reduce((a,p)=>{a[p.category]=1;return a;},{}))];
  const pageSize = 20;
  const categoriesSafe = ["All", ...Array.from(new Set(problems.map(p => p.category)))];

  useEffect(() => {
    localStorage.setItem("codearena-solved", JSON.stringify(solved));
  }, [solved]);

  useEffect(() => {
    localStorage.setItem("codearena-history", JSON.stringify(history));
  }, [history]);

  useEffect(() => { localStorage.setItem("codearena-profile-name", profileName); }, [profileName]);
  useEffect(() => { localStorage.setItem("codearena-profile-bio", profileBio); }, [profileBio]);
  useEffect(() => { localStorage.setItem("codearena-saturday-registration", quizRegistered ? "yes" : "no"); }, [quizRegistered]);
  useEffect(() => { localStorage.setItem("codearena-saturday-score", String(quizScore)); }, [quizScore]);
  useEffect(() => { localStorage.setItem("codearena-streak", String(streak)); }, [streak]);

  function markActiveDay() {
    const today = new Date().toISOString().slice(0,10);
    if (lastActive !== today) {
      const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0,10);
      const nextStreak = lastActive === yesterday ? streak + 1 : 1;
      setStreak(nextStreak);
      setLastActive(today);
      localStorage.setItem("codearena-last-active", today);
    }
  }

  function selectProblem(problem) {
    setCurrentProblem(problem);
    setCode(problem.starter);
    setOutput("");
    setAiResponse("");
    setActiveAI("");
    setHintLevel(0);
    setTestCases([{ input: "", expected: "", name: "Test 1" }]);
    setTestResults([]);
    markActiveDay();
    setPage("Practice");
  }

  async function runCode() {
    markActiveDay();
    setLoading(true);
    setOutput("Running your code...");

    try {
      const response = await fetch(`${API}/api/run`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, language, stdin: "" }),
      });

      let data;
      try {
        data = await response.json();
      } catch {
        setOutput(`Backend returned HTTP ${response.status} with an invalid response.`);
        return;
      }

      if (!response.ok) {
        const errorText = data.details || data.error || data.message || "Execution failed.";
        setOutput(typeof errorText === "string" ? errorText : JSON.stringify(errorText, null, 2));
        return;
      }

      const result = data.output ?? data.stdout ?? data.stderr ?? data.result ?? data.message;

      if (result === undefined || result === null || result === "") {
        setOutput("Program executed successfully with no output.");
      } else if (typeof result === "string") {
        setOutput(result);
      } else {
        setOutput(JSON.stringify(result, null, 2));
      }
    } catch (error) {
      setOutput(`Unable to connect to backend. Make sure server.js is running.\n\n${error.message || ""}`);
    } finally {
      setLoading(false);
    }
  }

  async function runTests() {
    if (!testCases.some(t => t.input.trim() || t.expected.trim())) {
      setOutput("Add at least one test case with input and expected output first.");
      return;
    }
    setTestRunning(true);
    setTestResults([]);
    const results = [];
    for (let i = 0; i < testCases.length; i++) {
      const test = testCases[i];
      try {
        const response = await fetch(`${API}/api/run`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ code, language, stdin: test.input })
        });
        const data = await response.json();
        if (!response.ok) throw new Error(typeof data.details === "string" ? data.details : JSON.stringify(data.details || data.error));
        const actual = String(data.stdout ?? data.output ?? "").trim();
        const expected = String(test.expected ?? "").trim();
        results.push({ name: test.name || `Test ${i+1}`, passed: actual === expected, actual, expected, error: data.stderr || "" });
      } catch (err) {
        results.push({ name: test.name || `Test ${i+1}`, passed: false, actual: "", expected: test.expected, error: err.message });
      }
      setTestResults([...results]);
    }
    const passed = results.filter(r => r.passed).length;
    setOutput(`Test results: ${passed}/${results.length} passed. ${passed === results.length ? "All tests passed!" : "Some tests failed. Check the test results below."}`);
    setTestRunning(false);
    markActiveDay();
    return { passed, total: results.length };
  }

  async function submitCode() {
    const result = await runTests();
    if (!result) return;
    const accepted = result.passed === result.total;
    const newHistory = [{ title: currentProblem.title, language, date: new Date().toLocaleString(), status: accepted ? "Accepted" : "Failed", score: accepted ? 100 : Math.round(result.passed / result.total * 100) }, ...history];
    setHistory(newHistory);
    if (accepted && !solved.includes(currentProblem.id)) setSolved([...solved, currentProblem.id]);
    setOutput(accepted ? `🎉 Accepted! ${result.passed}/${result.total} test cases passed.` : `Submission failed: ${result.passed}/${result.total} test cases passed.`);
  }

  function addTestCase() { setTestCases([...testCases, { input: "", expected: "", name: `Test ${testCases.length + 1}` }]); }
  function updateTestCase(index, field, value) { setTestCases(testCases.map((t,i) => i === index ? { ...t, [field]: value } : t)); }
  function removeTestCase(index) { setTestCases(testCases.filter((_,i) => i !== index)); }

  function registerQuiz() { setQuizRegistered(true); setQuizSubmitted(false); setQuizAnswers({}); }
  function submitWeeklyQuiz() {
    const score = quizQuestions.reduce((total, q, i) => total + (Number(quizAnswers[i]) === q.answer ? 1 : 0), 0);
    setQuizScore(score); setQuizSubmitted(true);
    const record = { title: "Coding Quiz", date: new Date().toLocaleString(), score: `${score}/${quizQuestions.length}`, status: "Quiz completed" };
    setHistory([record, ...history]);
  }

  async function askAI(prompt, feature) {
    setAiLoading(true);
    setAiResponse("");
    setActiveAI(feature);

    try {
      const response = await fetch(`${API}/api/ai`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          question: prompt,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.details || data.error || "AI request failed");
      }

      setAiResponse(data.response || data.answer || "No answer received.");
    } catch (error) {
      setAiResponse(`❌ ${error.message}`);
    }

    setAiLoading(false);
  }

  async function reviewCode() {
    setAiLoading(true);
    setAiResponse("");
    setActiveAI("review");

    try {
      const response = await fetch(`${API}/api/review`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code,
          language,
          problem: currentProblem.description,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.details || data.error || "Review failed");
      }

      setAiResponse(data.review || "No review received.");
    } catch (error) {
      setAiResponse(`❌ ${error.message}`);
    }

    setAiLoading(false);
  }

  function getHint() {
    if (hintLevel >= 3) {
      setAiResponse(
        "You've received all 3 hints. Try solving the problem yourself before viewing a full solution in AI Problem Solver!"
      );
      return;
    }

    const nextLevel = hintLevel + 1;

    const hintPrompt = `
You are a coding tutor helping a student solve a coding problem.

Problem:
${currentProblem.title}

Description:
${currentProblem.description}

Example:
${currentProblem.example}

The student has requested Hint ${nextLevel} out of 3.

Rules:
${
  nextLevel === 1
    ? "Give only a subtle hint about how to begin. Do NOT reveal the algorithm or solution."
    : nextLevel === 2
    ? "Give a more specific hint about the approach or data structure. Do NOT provide complete code."
    : "Give a strong hint outlining the algorithm step-by-step, but DO NOT provide complete code."
}

Make the hint helpful, concise, and educational.
`;

    setHintLevel(nextLevel);
    askAI(hintPrompt, "hint");
  }

  function explainCode() {
    const prompt = `
You are CodeArena AI.

Explain the following ${language} code line by line in simple beginner-friendly language.

Problem: ${currentProblem.title}

Code:
\`\`\`
${code}
\`\`\`

Explain:
1. What the code does overall
2. Each important line
3. Variables and functions
4. The logic and flow
5. Time complexity
6. Space complexity

Use simple language and examples.
`;

    askAI(prompt, "explain");
  }

  function solveProblem() {
    const prompt = `
You are an expert coding instructor.

Solve this coding problem:

Title: ${currentProblem.title}

Problem:
${currentProblem.description}

Example:
${currentProblem.example}

Programming language: ${language}

Provide your response in these sections:

1. Understanding the problem
2. Approach
3. Algorithm step-by-step
4. Complete working solution in ${language}
5. Example walkthrough
6. Time complexity
7. Space complexity
8. Possible alternative approaches

Make the solution beginner-friendly.
`;

    askAI(prompt, "solver");
  }

  function generateLearningPath() {
    const completed = problems.filter((p) => solved.includes(p.id));

    const remaining = problems.filter((p) => !solved.includes(p.id));

    const prompt = `
You are CodeArena's intelligent learning path advisor.

Student progress:

Problems solved: ${completed.length}
Problems remaining: ${remaining.length}

Solved problems:
${completed.map((p) => `${p.title} (${p.difficulty}, ${p.category})`).join("\n") || "None"}

Available problems:
${remaining.map((p) => `${p.title} (${p.difficulty}, ${p.category})`).join("\n")}

Create a personalized learning path.

Include:
1. Student's current level
2. Likely strengths based on solved problems
3. Areas that need improvement
4. Recommended next 5 problems in order
5. Why each problem is recommended
6. Suggested topics to study
7. A 7-day learning plan

Be encouraging and realistic.
`;

    askAI(prompt, "learning");
  }

  function askAssistant() {
    if (!question.trim()) return;

    askAI(
      `You are CodeArena AI, a programming tutor.\n\nStudent question:\n${question}\n\nGive a clear, beginner-friendly answer with examples when useful.`,
      "assistant"
    );
  }

  const filteredProblems = problems.filter((problem) => {
    const matchesSearch =
      problem.title.toLowerCase().includes(search.toLowerCase()) ||
      problem.category.toLowerCase().includes(search.toLowerCase());

    const matchesDifficulty = difficulty === "All" || problem.difficulty === difficulty;
    const matchesCategory = categoryFilter === "All" || problem.category === categoryFilter;
    return matchesSearch && matchesDifficulty && matchesCategory;
  });
  const totalPages = Math.max(1, Math.ceil(filteredProblems.length / pageSize));
  const visibleProblems = filteredProblems.slice((pageNumber - 1) * pageSize, pageNumber * pageSize);

  const solvedCount = solved.length;

  const completionPercentage = Math.round(
    (solvedCount / problems.length) * 100
  );

  return (
    <div style={styles.app}>
      <aside style={styles.sidebar}>
        <div style={styles.logo}>
          <div style={styles.logoIcon}>⚡</div>
          <div>
            <div style={styles.logoText}>CodeArena</div>
            <div style={styles.logoSubtitle}>AI Coding Platform</div>
          </div>
        </div>

        <div style={styles.navTitle}>MENU</div>

        {[
          "Dashboard",
          "Problems",
          "Practice",
          "AI Assistant",
          "Quiz",
          "Submissions",
          "AI Learning Path",
          "Profile",
        ].map((item) => (
          <button
            key={item}
            onClick={() => setPage(item)}
            style={{
              ...styles.navButton,
              ...(page === item ? styles.navActive : {}),
            }}
          >
            {item === "Dashboard" && "🏠"}
            {item === "Problems" && "📚"}
            {item === "Practice" && "💻"}
            {item === "AI Assistant" && "🤖"}
            {item === "AI Learning Path" && "🧠"}
            {item === "Submissions" && "📊"}
            {item === "Leaderboard" && "🏆"}
            {item === "Profile" && "👤"}
            {item === "Quiz" && "🗓️"}
            <span>{item}</span>
          </button>
        ))}

        <div style={styles.sidebarBottom}>
          <div style={styles.profile}>
            <div style={styles.avatar}>👨‍💻</div>
            <div>
              <strong>{profileName}</strong>
              <div style={styles.profileSmall}>Student Account</div>
            </div>
          </div>
        </div>
      </aside>

      <main style={styles.main}>
        <header style={styles.topbar}>
          <div>
            <div style={styles.pageTitle}>{page}</div>
            <div style={styles.breadcrumb}>CodeArena / {page}</div>
          </div>

          <div style={styles.topRight}>
            <div style={styles.status}>● AI ONLINE</div>
            <div style={styles.topAvatar}>👨‍💻</div>
          </div>
        </header>

        {page === "Dashboard" && (
          <div>
            <div style={styles.hero}>
              <div>
                <h1 style={styles.heroTitle}>Welcome to CodeArena ⚡</h1>
                <p style={styles.heroSubtitle}>
                  Practice coding. Improve your skills. Learn with AI.
                </p>

                <button
                  style={styles.primaryButton}
                  onClick={() => setPage("Problems")}
                >
                  Start Coding →
                </button>
              </div>

              <div style={styles.heroGraphic}>🚀</div>
            </div>

            <div style={styles.statsGrid}>
              <StatCard
                title="Problems Solved"
                value={solvedCount}
                icon="🎯"
                color="#8b5cf6"
              />

              <StatCard
                title="Total Problems"
                value={problems.length}
                icon="📚"
                color="#06b6d4"
              />

              <StatCard
                title="Completion"
                value={`${completionPercentage}%`}
                icon="📈"
                color="#22c55e"
              />

              <StatCard title="Submissions" value={history.length} icon="💻" color="#f59e0b" />
              <StatCard title="Streak" value={`${streak} days`} icon="🔥" color="#ef4444" />
            </div>

            <div style={styles.sectionGrid}>
              <div style={styles.card}>
                <h3>📈 Your Progress</h3>

                <div style={styles.progressTrack}>
                  <div
                    style={{
                      ...styles.progressFill,
                      width: `${completionPercentage}%`,
                    }}
                  />
                </div>

                <p style={styles.muted}>
                  {solvedCount} out of {problems.length} starter problems solved.
                </p>

                <button
                  style={styles.secondaryButton}
                  onClick={() => setPage("AI Learning Path")}
                >
                  Get AI Learning Path
                </button>
              </div>

              <div style={styles.card}>
                <h3>🤖 AI Features</h3>

                <FeatureRow icon="🐛" text="AI Code Reviewer" />
                <FeatureRow icon="💡" text="Progressive AI Hints" />
                <FeatureRow icon="📖" text="Line-by-Line Explanation" />
                <FeatureRow icon="✨" text="AI Problem Solver" />
                <FeatureRow icon="🧠" text="Smart Learning Path" />
              </div>
            </div>

            <div style={styles.card}>
              <h3>🔥 Recommended Problems</h3>

              <div style={styles.problemGrid}>
                {problems.slice(0, 4).map((problem) => (
                  <ProblemCard
                    key={problem.id}
                    problem={problem}
                    solved={solved.includes(problem.id)}
                    onClick={() => selectProblem(problem)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {page === "Problems" && (
          <div>
            <div style={styles.card}>
              <h2>Problem Library</h2>
              <p style={styles.muted}>
                Practice algorithms and programming fundamentals.
              </p>

              <div style={styles.filterRow}>
                <input
                  style={styles.input}
                  placeholder="Search problems..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />

                <select style={styles.select} value={categoryFilter} onChange={(e) => { setCategoryFilter(e.target.value); setPageNumber(1); }}>
                  {categoriesSafe.map(c => <option key={c}>{c}</option>)}
                </select>
                <select
                  style={styles.select}
                  value={difficulty}
                  onChange={(e) => { setDifficulty(e.target.value); setPageNumber(1); }}
                >
                  <option>All</option>
                  <option>Easy</option>
                  <option>Medium</option>
                  <option>Hard</option>
                </select>
              </div>

              <div style={styles.problemGrid}>
                {visibleProblems.map((problem) => (
                  <ProblemCard
                    key={problem.id}
                    problem={problem}
                    solved={solved.includes(problem.id)}
                    onClick={() => selectProblem(problem)}
                  />
                ))}
              </div>
              <div style={styles.pagination}>
                <button style={styles.secondaryButton} disabled={pageNumber <= 1} onClick={() => setPageNumber(pageNumber - 1)}>← Previous</button>
                <span>Page {pageNumber} of {totalPages} · {filteredProblems.length} problems</span>
                <button style={styles.secondaryButton} disabled={pageNumber >= totalPages} onClick={() => setPageNumber(pageNumber + 1)}>Next →</button>
              </div>
            </div>
          </div>
        )}

        {page === "Practice" && (
          <div style={styles.practiceLayout}>
            <div style={styles.problemPanel}>
              <div style={styles.card}>
                <div style={styles.problemHeader}>
                  <div>
                    <h2>{currentProblem.title}</h2>
                    <Difficulty difficulty={currentProblem.difficulty} />
                  </div>

                  <button
                    style={styles.smallButton}
                    onClick={() => setPage("Problems")}
                  >
                    ← Problems
                  </button>
                </div>

                <p>{currentProblem.description}</p>

                <h4>Example</h4>

                <pre style={styles.example}>{currentProblem.example}</pre>

                <div style={styles.categoryTag}>
                  {currentProblem.category}
                </div>
              </div>

              <div style={styles.card}>
                <h3>💡 AI Hint System</h3>

                <p style={styles.muted}>
                  Get progressive hints without revealing the complete solution.
                </p>

                <div style={styles.hintProgress}>
                  {[1, 2, 3].map((n) => (
                    <div
                      key={n}
                      style={{
                        ...styles.hintStep,
                        ...(hintLevel >= n ? styles.hintStepActive : {}),
                      }}
                    >
                      Hint {n}
                    </div>
                  ))}
                </div>

                <button
                  style={styles.primaryButton}
                  onClick={getHint}
                  disabled={aiLoading || hintLevel >= 3}
                >
                  {hintLevel >= 3
                    ? "All hints unlocked"
                    : `Get Hint ${hintLevel + 1} 💡`}
                </button>
              </div>
            </div>

            <div style={styles.editorPanel}>
              <div style={styles.card}>
                <div style={styles.editorHeader}>
                  <h3>Code Editor</h3>

                  <select
                    style={styles.select}
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                  >
                    <option value="python">Python</option>
                    <option value="javascript">JavaScript</option>
                    <option value="java">Java</option>
                    <option value="cpp">C++</option>
                    <option value="c">C</option>
                  </select>
                </div>

                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  spellCheck="false"
                  style={styles.codeEditor}
                />

                <div style={styles.buttonRow}>
                  <button
                    style={styles.runButton}
                    onClick={runCode}
                    disabled={loading}
                  >
                    {loading ? "Running..." : "▶ Run Code"}
                  </button>

                  <button style={styles.submitButton} onClick={submitCode}>
                    ✓ Submit
                  </button>
                </div>
              </div>

              <div style={styles.card}>
                <h3>🧪 Automatic Test Cases</h3>
                <p style={styles.muted}>Create input/output tests. CodeArena runs your program separately for each test and compares the output.</p>
                {testCases.map((test, index) => <div key={index} style={styles.testCaseBox}>
                  <div style={styles.testCaseHeader}><strong>{test.name || `Test ${index+1}`}</strong><button style={styles.clearButton} onClick={() => removeTestCase(index)}>Remove</button></div>
                  <label>Input (stdin)</label><textarea style={styles.testInput} value={test.input} onChange={e => updateTestCase(index,"input",e.target.value)} placeholder="Input for this test" />
                  <label>Expected output</label><textarea style={styles.testInput} value={test.expected} onChange={e => updateTestCase(index,"expected",e.target.value)} placeholder="Expected output" />
                </div>)}
                <div style={styles.buttonRow}><button style={styles.secondaryButton} onClick={addTestCase}>+ Add test case</button><button style={styles.runButton} onClick={runTests} disabled={testRunning}>{testRunning ? "Testing…" : "🧪 Run All Tests"}</button></div>
                {testResults.length > 0 && <div style={{marginTop:12}}>{testResults.map((r,i)=><div key={i} style={{...styles.testResult, borderColor:r.passed ? "#22c55e" : "#ef4444"}}><strong>{r.passed ? "✅" : "❌"} {r.name}</strong>{!r.passed && <div><small>Expected:</small><pre>{r.expected}</pre><small>Actual:</small><pre>{r.actual || r.error || "(no output)"}</pre></div>}</div>)}</div>}
              </div>

              <div style={styles.card}>
                <h3>Output</h3>

                <pre style={styles.output}>
                  {output || "Your program output will appear here."}
                </pre>
              </div>

              <div style={styles.card}>
                <h3>🤖 AI Coding Tools</h3>

                <div style={styles.aiButtonGrid}>
                  <button
                    style={styles.aiButton}
                    onClick={reviewCode}
                    disabled={aiLoading}
                  >
                    🐛 Review Code
                  </button>

                  <button
                    style={styles.aiButton}
                    onClick={explainCode}
                    disabled={aiLoading}
                  >
                    📖 Explain Code
                  </button>

                  <button
                    style={styles.aiButton}
                    onClick={solveProblem}
                    disabled={aiLoading}
                  >
                    ✨ Solve Problem
                  </button>
                </div>

                {aiLoading && (
                  <div style={styles.loading}>
                    ⚡ CodeArena AI is thinking...
                  </div>
                )}

                {aiResponse && (
                  <div style={styles.aiResult}>
                    <div style={styles.aiResultHeader}>
                      <span>AI Response</span>
                      <button
                        style={styles.clearButton}
                        onClick={() => setAiResponse("")}
                      >
                        Clear
                      </button>
                    </div>

                    <div style={styles.aiText}>{aiResponse}</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {page === "AI Assistant" && (
          <div style={styles.assistantPage}>
            <div style={styles.assistantHero}>
              <div style={{ fontSize: "48px" }}>🤖</div>
              <h1>CodeArena AI Assistant</h1>
              <p>
                Your personal programming mentor. Ask about coding, algorithms,
                debugging, data structures, or interview preparation.
              </p>
            </div>

            <div style={styles.card}>
              <textarea
                style={styles.questionInput}
                placeholder="Ask anything about programming..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />

              <button
                style={styles.primaryButton}
                onClick={askAssistant}
                disabled={aiLoading}
              >
                {aiLoading ? "Thinking..." : "Ask CodeArena AI →"}
              </button>

              <div style={styles.quickQuestions}>
                {[
                  "Explain recursion",
                  "What is Big O notation?",
                  "Explain linked lists",
                  "Give me Python interview questions",
                ].map((q) => (
                  <button
                    key={q}
                    style={styles.quickButton}
                    onClick={() => setQuestion(q)}
                  >
                    {q}
                  </button>
                ))}
              </div>

              {aiResponse && (
                <div style={styles.aiResult}>
                  <div style={styles.aiResultHeader}>AI Response</div>
                  <div style={styles.aiText}>{aiResponse}</div>
                </div>
              )}
            </div>
          </div>
        )}

        {page === "AI Learning Path" && (
          <div>
            <div style={styles.hero}>
              <div>
                <h1 style={styles.heroTitle}>🧠 Smart Learning Path</h1>
                <p style={styles.heroSubtitle}>
                  AI analyzes your progress and creates your personalized learning
                  roadmap.
                </p>

                <button
                  style={styles.primaryButton}
                  onClick={generateLearningPath}
                  disabled={aiLoading}
                >
                  {aiLoading ? "Generating..." : "Generate My Learning Path"}
                </button>
              </div>
            </div>

            <div style={styles.statsGrid}>
              <StatCard
                title="Completed"
                value={solvedCount}
                icon="✅"
                color="#22c55e"
              />

              <StatCard
                title="Remaining"
                value={problems.length - solvedCount}
                icon="📚"
                color="#6366f1"
              />

              <StatCard
                title="Progress"
                value={`${completionPercentage}%`}
                icon="📈"
                color="#06b6d4"
              />
            </div>

            <div style={styles.card}>
              <h3>How AI personalizes your learning</h3>

              <FeatureRow
                icon="📊"
                text="Analyzes the problems you have solved"
              />

              <FeatureRow
                icon="🎯"
                text="Identifies your strengths and weak areas"
              />

              <FeatureRow
                icon="📚"
                text="Recommends your next problems"
              />

              <FeatureRow
                icon="📅"
                text="Creates a structured 7-day learning plan"
              />
            </div>

            {aiResponse && (
              <div style={styles.aiResult}>
                <div style={styles.aiResultHeader}>Your Learning Roadmap</div>
                <div style={styles.aiText}>{aiResponse}</div>
              </div>
            )}
          </div>
        )}

        {page === "Leaderboard" && (
          <div>
            <div style={styles.hero}><div><h1 style={styles.heroTitle}>🏆 Leaderboard</h1><p style={styles.heroSubtitle}>Ranked by locally recorded accepted problems. This demo leaderboard is stored on this device.</p></div></div>
            <div style={styles.card}><h2>Weekly rankings</h2>{[{name:"CodeMaster",solved:42,score:4200},{name:"AlgoNinja",solved:35,score:3500},{name:"ByteRunner",solved:28,score:2800},{name:profileName,solved:solvedCount,score:solvedCount*100},{name:"PythonPro",solved:18,score:1800}].sort((a,b)=>b.score-a.score).map((u,i)=><div style={styles.leaderRow} key={`${u.name}-${i}`}><span style={styles.rank}>{i+1}</span><div style={{flex:1}}><strong>{u.name}</strong><div style={styles.muted}>{u.solved} solved</div></div><strong>{u.score} XP</strong></div>)}</div>
          </div>
        )}

        {page === "Profile" && (
          <div><div style={styles.hero}><div><h1 style={styles.heroTitle}>👤 Your Profile</h1><p style={styles.heroSubtitle}>Customize your CodeArena learner profile.</p></div></div>
          <div style={styles.card}><label>Display name</label><input style={styles.input} value={profileName} onChange={e=>setProfileName(e.target.value)} />
          <label>Bio</label><textarea style={styles.questionInput} value={profileBio} onChange={e=>setProfileBio(e.target.value)} />
          <div style={styles.statsGrid}><StatCard title="Solved" value={solvedCount} icon="🎯" color="#8b5cf6"/><StatCard title="Submissions" value={history.length} icon="💻" color="#06b6d4"/><StatCard title="Streak" value={`${streak} days`} icon="🔥" color="#f59e0b"/><StatCard title="Quiz best" value={`${quizScore}/${quizQuestions.length}`} icon="🧠" color="#22c55e"/></div>
          <p>{profileBio}</p><button style={styles.primaryButton} onClick={()=>setPage("Problems")}>Continue practicing</button></div></div>
        )}

        {page === "Quiz" && (
          <div><div style={styles.hero}><div><h1 style={styles.heroTitle}>🗓️ Coding Quiz</h1><p style={styles.heroSubtitle}>Weekly coding knowledge challenge. Register to participate in this local demo.</p></div><div style={styles.heroGraphic}>🏅</div></div>
          <div style={styles.card}><h2>Weekly Quiz Registration</h2><p>Quiz day: Every Saturday · 5 questions · Data Structures & Algorithms</p>{quizRegistered ? <div style={styles.successNotice}>✅ You're registered for the quiz!</div> : <button style={styles.primaryButton} onClick={registerQuiz}>Register for Quiz</button>}
          {quizRegistered && !quizSubmitted && <div style={{marginTop:20}}><h3>Practice quiz</h3>{quizQuestions.map((q,i)=><div style={styles.quizQuestion} key={i}><strong>{i+1}. {q.q}</strong>{q.options.map((opt,j)=><label style={styles.quizOption} key={j}><input type="radio" name={`quiz-${i}`} checked={Number(quizAnswers[i])===j} onChange={()=>setQuizAnswers({...quizAnswers,[i]:j})}/>{opt}</label>)}</div>)}<button style={styles.primaryButton} onClick={submitWeeklyQuiz} disabled={Object.keys(quizAnswers).length!==quizQuestions.length}>Submit Quiz</button></div>}
          {quizSubmitted && <div style={styles.successNotice}>Quiz completed! Score: {quizScore}/{quizQuestions.length}. Review your answers and try again later.</div>}</div></div>
        )}

        {page === "Submissions" && (
          <div style={styles.card}>
            <h2>Submission History</h2>

            {history.length === 0 ? (
              <div style={styles.empty}>
                <div style={{ fontSize: "40px" }}>📭</div>
                <p>No submissions yet.</p>
                <button
                  style={styles.primaryButton}
                  onClick={() => setPage("Problems")}
                >
                  Start Solving
                </button>
              </div>
            ) : (
              history.map((item, index) => (
                <div style={styles.historyRow} key={index}>
                  <div>
                    <strong>{item.title}</strong>
                    <div style={styles.muted}>{item.date}</div>
                  </div>

                  <div style={styles.categoryTag}>{item.language}</div>
                </div>
              ))
            )}
          </div>
        )}
      </main>
    </div>
  );
}

function StatCard({ title, value, icon, color }) {
  return (
    <div style={styles.statCard}>
      <div
        style={{
          ...styles.statIcon,
          background: `${color}22`,
          color,
        }}
      >
        {icon}
      </div>

      <div style={styles.statValue}>{value}</div>
      <div style={styles.statTitle}>{title}</div>
    </div>
  );
}

function FeatureRow({ icon, text }) {
  return (
    <div style={styles.featureRow}>
      <span style={{ fontSize: "20px" }}>{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function Difficulty({ difficulty }) {
  const color =
    difficulty === "Easy"
      ? "#22c55e"
      : difficulty === "Medium"
      ? "#f59e0b"
      : "#ef4444";

  return (
    <span
      style={{
        ...styles.difficulty,
        color,
        background: `${color}20`,
      }}
    >
      {difficulty}
    </span>
  );
}

function ProblemCard({ problem, solved, onClick }) {
  return (
    <div style={styles.problemCard} onClick={onClick}>
      <div style={styles.problemCardTop}>
        <span style={styles.problemNumber}>#{problem.id}</span>

        {solved && <span style={styles.solvedBadge}>✓ Solved</span>}
      </div>

      <h3>{problem.title}</h3>

      <p style={styles.problemDescription}>{problem.description}</p>

      <div style={styles.problemCardBottom}>
        <Difficulty difficulty={problem.difficulty} />
        <span style={styles.categoryTag}>{problem.category}</span>
      </div>

      <button style={styles.problemStart}>Solve Problem →</button>
    </div>
  );
}

const styles = {
  app: {
    display: "flex",
    minHeight: "100vh",
    background: "#080d18",
    color: "#e5e7eb",
    fontFamily: "Inter, Arial, sans-serif",
  },

  sidebar: {
    width: "240px",
    minWidth: "240px",
    background: "#0d1422",
    borderRight: "1px solid #1f2937",
    padding: "24px 16px",
    display: "flex",
    flexDirection: "column",
  },

  logo: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "40px",
  },

  logoIcon: {
    width: "42px",
    height: "42px",
    borderRadius: "12px",
    background: "linear-gradient(135deg,#6366f1,#a855f7)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "23px",
  },

  logoText: {
    fontWeight: "bold",
    fontSize: "18px",
  },

  logoSubtitle: {
    color: "#9ca3af",
    fontSize: "11px",
    marginTop: "3px",
  },

  navTitle: {
    color: "#64748b",
    fontSize: "11px",
    letterSpacing: "2px",
    marginBottom: "12px",
    paddingLeft: "12px",
  },

  navButton: {
    border: "none",
    background: "transparent",
    color: "#9ca3af",
    padding: "13px 12px",
    textAlign: "left",
    borderRadius: "9px",
    display: "flex",
    gap: "12px",
    alignItems: "center",
    cursor: "pointer",
    marginBottom: "5px",
    fontSize: "14px",
  },

  navActive: {
    background: "#1d2840",
    color: "#a5b4fc",
  },

  sidebarBottom: {
    marginTop: "auto",
    paddingTop: "25px",
  },

  profile: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    borderTop: "1px solid #1f2937",
    paddingTop: "18px",
  },

  avatar: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "#273449",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  profileSmall: {
    color: "#64748b",
    fontSize: "11px",
    marginTop: "3px",
  },

  main: {
    flex: 1,
    minWidth: 0,
    padding: "28px",
    overflow: "auto",
  },

  topbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "28px",
  },

  pageTitle: {
    fontSize: "25px",
    fontWeight: "bold",
  },

  breadcrumb: {
    color: "#64748b",
    fontSize: "12px",
    marginTop: "5px",
  },

  topRight: {
    display: "flex",
    alignItems: "center",
    gap: "16px",
  },

  status: {
    color: "#22c55e",
    fontSize: "12px",
    background: "#14291f",
    padding: "8px 12px",
    borderRadius: "20px",
  },

  topAvatar: {
    background: "#273449",
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  hero: {
    background: "linear-gradient(120deg,#172554,#312e81,#4c1d95)",
    border: "1px solid #4338ca",
    borderRadius: "18px",
    padding: "32px",
    marginBottom: "25px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
  },

  heroTitle: {
    fontSize: "30px",
    margin: "0 0 10px",
  },

  heroSubtitle: {
    color: "#c7d2fe",
    marginBottom: "22px",
  },

  heroGraphic: {
    fontSize: "70px",
  },

  primaryButton: {
    background: "linear-gradient(135deg,#6366f1,#8b5cf6)",
    color: "#fff",
    border: "none",
    padding: "13px 20px",
    borderRadius: "9px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "14px",
  },

  secondaryButton: {
    background: "#263249",
    color: "#c7d2fe",
    border: "1px solid #3b4a65",
    padding: "11px 16px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
    gap: "16px",
    marginBottom: "24px",
  },

  statCard: {
    background: "#111a2b",
    border: "1px solid #263247",
    padding: "20px",
    borderRadius: "13px",
  },

  statIcon: {
    width: "40px",
    height: "40px",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
    marginBottom: "14px",
  },

  statValue: {
    fontSize: "26px",
    fontWeight: "bold",
    marginBottom: "4px",
  },

  statTitle: {
    color: "#94a3b8",
    fontSize: "13px",
  },

  sectionGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: "18px",
    marginBottom: "24px",
  },

  card: {
    background: "#111a2b",
    border: "1px solid #263247",
    borderRadius: "14px",
    padding: "22px",
    marginBottom: "20px",
  },

  muted: {
    color: "#94a3b8",
    fontSize: "13px",
  },

  progressTrack: {
    background: "#263247",
    height: "9px",
    borderRadius: "10px",
    overflow: "hidden",
    margin: "20px 0",
  },

  progressFill: {
    background: "linear-gradient(90deg,#6366f1,#22c55e)",
    height: "100%",
    borderRadius: "10px",
    transition: "width 0.4s",
  },

  problemGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(230px,1fr))",
    gap: "15px",
    marginTop: "18px",
  },

  problemCard: {
    background: "#0b1220",
    border: "1px solid #263247",
    borderRadius: "12px",
    padding: "18px",
    cursor: "pointer",
    transition: "0.2s",
  },

  problemCardTop: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "12px",
  },

  problemNumber: {
    color: "#64748b",
    fontSize: "12px",
  },

  solvedBadge: {
    color: "#22c55e",
    fontSize: "11px",
    background: "#143323",
    padding: "4px 8px",
    borderRadius: "15px",
  },

  problemDescription: {
    color: "#94a3b8",
    fontSize: "13px",
    lineHeight: "1.6",
    minHeight: "60px",
  },

  problemCardBottom: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    margin: "15px 0",
  },

  difficulty: {
    padding: "5px 9px",
    borderRadius: "6px",
    fontSize: "11px",
    fontWeight: "bold",
  },

  categoryTag: {
    color: "#a5b4fc",
    background: "#202a44",
    padding: "5px 9px",
    borderRadius: "6px",
    fontSize: "11px",
  },

  problemStart: {
    width: "100%",
    padding: "10px",
    background: "#1d2840",
    color: "#a5b4fc",
    border: "1px solid #354362",
    borderRadius: "7px",
    cursor: "pointer",
  },

  filterRow: {
    display: "flex",
    gap: "10px",
    margin: "20px 0",
    flexWrap: "wrap",
  },

  input: {
    flex: 1,
    minWidth: "180px",
    background: "#0b1220",
    border: "1px solid #334155",
    color: "#fff",
    borderRadius: "8px",
    padding: "12px",
  },

  select: {
    background: "#0b1220",
    color: "#fff",
    border: "1px solid #334155",
    borderRadius: "8px",
    padding: "10px",
  },

  practiceLayout: {
    display: "grid",
    gridTemplateColumns: "minmax(260px,0.8fr) minmax(350px,1.4fr)",
    gap: "20px",
    alignItems: "start",
  },

  problemPanel: {
    minWidth: 0,
  },

  editorPanel: {
    minWidth: 0,
  },

  problemHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
  },

  smallButton: {
    background: "#263247",
    border: "1px solid #334155",
    color: "#cbd5e1",
    padding: "9px 12px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  example: {
    background: "#0b1220",
    border: "1px solid #273449",
    padding: "14px",
    borderRadius: "8px",
    color: "#a5b4fc",
    whiteSpace: "pre-wrap",
  },

  hintProgress: {
    display: "flex",
    gap: "8px",
    margin: "16px 0",
  },

  hintStep: {
    flex: 1,
    textAlign: "center",
    padding: "8px",
    border: "1px solid #334155",
    borderRadius: "7px",
    color: "#64748b",
    fontSize: "12px",
  },

  hintStepActive: {
    background: "#312e81",
    borderColor: "#6366f1",
    color: "#c7d2fe",
  },

  editorHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "15px",
  },

  codeEditor: {
    width: "100%",
    minHeight: "350px",
    resize: "vertical",
    background: "#080d18",
    border: "1px solid #334155",
    color: "#a5f3fc",
    borderRadius: "10px",
    padding: "16px",
    fontFamily: "Monaco, Consolas, monospace",
    fontSize: "14px",
    lineHeight: "1.7",
    outline: "none",
    boxSizing: "border-box",
  },

  buttonRow: {
    display: "flex",
    gap: "10px",
    marginTop: "14px",
  },

  runButton: {
    flex: 1,
    background: "#14532d",
    color: "#86efac",
    border: "1px solid #166534",
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  submitButton: {
    flex: 1,
    background: "#312e81",
    color: "#c7d2fe",
    border: "1px solid #4338ca",
    padding: "12px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  output: {
    background: "#080d18",
    border: "1px solid #273449",
    padding: "15px",
    minHeight: "80px",
    borderRadius: "8px",
    color: "#86efac",
    whiteSpace: "pre-wrap",
    overflowWrap: "anywhere",
  },

  aiButtonGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(130px,1fr))",
    gap: "10px",
  },

  aiButton: {
    background: "#1e293b",
    color: "#c7d2fe",
    border: "1px solid #3b4a65",
    borderRadius: "8px",
    padding: "12px",
    cursor: "pointer",
  },

  loading: {
    padding: "15px",
    marginTop: "15px",
    color: "#a5b4fc",
    background: "#1e1b4b",
    borderRadius: "8px",
  },

  aiResult: {
    marginTop: "18px",
    border: "1px solid #4338ca",
    background: "#0b1220",
    borderRadius: "12px",
    overflow: "hidden",
  },

  aiResultHeader: {
    background: "#1e1b4b",
    color: "#c7d2fe",
    padding: "12px 16px",
    display: "flex",
    justifyContent: "space-between",
    fontWeight: "bold",
  },

  clearButton: {
    background: "transparent",
    border: "none",
    color: "#a5b4fc",
    cursor: "pointer",
  },

  aiText: {
    padding: "18px",
    lineHeight: "1.8",
    fontSize: "14px",
    whiteSpace: "pre-wrap",
    overflowWrap: "anywhere",
  },

  assistantPage: {
    maxWidth: "900px",
    margin: "0 auto",
  },

  assistantHero: {
    textAlign: "center",
    padding: "30px",
  },

  questionInput: {
    width: "100%",
    minHeight: "120px",
    resize: "vertical",
    background: "#0b1220",
    color: "#fff",
    border: "1px solid #334155",
    borderRadius: "10px",
    padding: "15px",
    boxSizing: "border-box",
    fontSize: "15px",
    marginBottom: "15px",
  },

  quickQuestions: {
    display: "flex",
    gap: "8px",
    flexWrap: "wrap",
    marginTop: "18px",
  },

  quickButton: {
    background: "#1e293b",
    color: "#cbd5e1",
    border: "1px solid #334155",
    borderRadius: "20px",
    padding: "9px 12px",
    cursor: "pointer",
    fontSize: "12px",
  },

  featureRow: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
    padding: "13px 0",
    borderBottom: "1px solid #263247",
  },

  historyRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 0",
    borderBottom: "1px solid #263247",
  },

  empty: {
    textAlign: "center",
    padding: "40px",
    color: "#94a3b8",
  },
  pagination: { display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12, marginTop: 20, flexWrap: "wrap" },
  testCaseBox: { border: "1px solid #334155", borderRadius: 10, padding: 12, marginBottom: 12, display: "grid", gap: 8 },
  testCaseHeader: { display: "flex", justifyContent: "space-between", alignItems: "center" },
  testInput: { width: "100%", minHeight: 70, background: "#0f172a", color: "#e2e8f0", border: "1px solid #334155", borderRadius: 8, padding: 10, fontFamily: "monospace", resize: "vertical", boxSizing: "border-box" },
  testResult: { border: "1px solid", borderRadius: 8, padding: 10, marginBottom: 8 },
  leaderRow: { display: "flex", alignItems: "center", gap: 14, padding: 14, borderBottom: "1px solid #334155" },
  rank: { width: 36, height: 36, display: "grid", placeItems: "center", borderRadius: 18, background: "#263248", fontWeight: 800 },
  successNotice: { padding: 14, borderRadius: 10, background: "#123a2a", color: "#86efac", marginTop: 12 },
  quizQuestion: { padding: 14, border: "1px solid #334155", borderRadius: 10, margin: "14px 0" },
  quizOption: { display: "flex", gap: 10, padding: 9, cursor: "pointer" },

};

export default App;