// app/questions/page.js
"use client";

import React, { useState } from "react";
import styles from "./Questions.module.css";
import { formatDistanceToNow } from "date-fns";

const QuestionsPage = () => {
  const [questions, setQuestions] = useState([]);
  const [description, setDescription] = useState("");
  const [difficulty, setDifficulty] = useState("Easy");
  const [filter, setFilter] = useState("newest");

  // Coins logic
  const getCoins = (level) => {
    switch (level) {
      case "Easy": return 5;
      case "Medium": return 10;
      case "Hard": return 20;
      default: return 5;
    }
  };

  const handleAddQuestion = (e) => {
    e.preventDefault();

    const newQuestion = {
      id: Date.now(),
      description,
      difficulty,
      coins: getCoins(difficulty),
      timePosted: new Date(),
    };

    setQuestions([newQuestion, ...questions]);
    setDescription("");
    setDifficulty("Easy");
  };

  const sortedQuestions = [...questions].sort((a, b) => {
    if (filter === "newest") {
      return b.timePosted - a.timePosted;
    } else {
      return a.timePosted - b.timePosted;
    }
  });

  return (
    <div className={styles.container}>
      <h1>AskPi - Questions</h1>

      <form onSubmit={handleAddQuestion} className={styles.form}>
        <textarea
          placeholder="Enter your doubt here..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </select>
        <button type="submit">Upload Your Doubt</button>
      </form>

      <div className={styles.filter}>
        <label>Sort:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      <div className={styles.list}>
        {sortedQuestions.map((q) => (
          <div key={q.id} className={styles.questionCard}>
            <p className={styles.description}>{q.description}</p>
            <p className={`${styles.difficulty} ${styles[q.difficulty.toLowerCase()]}`}>{q.difficulty}</p>
            <p className={styles.coins}>💰 {q.coins} Coins</p>
            <p className={styles.time}>{formatDistanceToNow(new Date(q.timePosted), { addSuffix: true })}</p>
          </div>
        ))}

        {questions.length === 0 && <p>No questions yet. Be the first to ask!</p>}
      </div>
    </div>
  );
};

export default QuestionsPage;