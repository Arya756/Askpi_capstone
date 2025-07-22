"use client"

import { auth, db } from "@/lib/firebase"
import React, { useState, useEffect } from "react"
import styles from "./Questions.module.css"
import { formatDistanceToNow } from "date-fns"
import { onAuthStateChanged } from "firebase/auth"
import { useRouter } from "next/navigation"
import { collection, addDoc, onSnapshot, query, orderBy } from "firebase/firestore"

const QuestionsPage = () => {
  const [questions, setQuestions] = useState([])
  const [description, setDescription] = useState("")
  const [difficulty, setDifficulty] = useState("Easy")
  const [filter, setFilter] = useState("newest")
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/login")
      } else {
        setLoading(false) 
      }
    })
    return () => unsubscribe()
  }, [router])

  useEffect(() => {
    const q = query(collection(db, "questions"), orderBy("timePosted", "desc"))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedQuestions = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setQuestions(fetchedQuestions)
    })
    return () => unsubscribe()
  }, [])

  if (loading) {
    return <p className={styles.loading}>Loading...</p>
  }

  const getCoins = (level) => {
    switch (level) {
      case "Easy": return 5
      case "Medium": return 10
      case "Hard": return 20
      default: return 5
    }
  }

  const handleAddQuestion = async (e) => {
    e.preventDefault()
    const user = auth.currentUser
    await addDoc(collection(db, "questions"), {
      description,
      difficulty,
      coins: getCoins(difficulty),
      timePosted: new Date(),
      userId: user.uid,
      userEmail: user.email,
    })
    setDescription("")
    setDifficulty("Easy")
  }

  const sortedQuestions = [...questions].sort((a, b) => {
    if (filter === "newest") {
      return new Date(b.timePosted.seconds * 1000) - new Date(a.timePosted.seconds * 1000)
    } else {
      return new Date(a.timePosted.seconds * 1000) - new Date(b.timePosted.seconds * 1000)
    }
  })

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
            <div className={styles.questionContent}>
              <div>
                <p className={styles.description}>{q.description}</p>
                <p className={`${styles.difficulty} ${styles[q.difficulty.toLowerCase()]}`}>{q.difficulty}</p>
                <p className={styles.coins}>💰 {q.coins} Coins</p>
                <p className={styles.time}>{formatDistanceToNow(new Date(q.timePosted.seconds * 1000), { addSuffix: true })}</p>
                <p className={styles.user}>Asked by: {q.userEmail}</p>
              </div>
              <button
                className={styles.solveButton}
                onClick={() => alert(`Solving Question ID: ${q.id}`)}
              >
                Solve Now
              </button>
            </div>
          </div>
        ))}

        {questions.length === 0 && <p>No questions yet. Be the first to ask!</p>}
      </div>
    </div>
  )
}

export default QuestionsPage