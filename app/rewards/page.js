"use client"

import React, { useEffect, useState } from "react"
import styles from "./Rewards.module.css"
import AOS from "aos"
import "aos/dist/aos.css"

const Rewards = () => {
  const [rewards, setRewards] = useState([])

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  useEffect(() => {
    const fetchRewards = async () => {
      const res = await fetch("https://fakestoreapi.com/products")
      const data = await res.json()
      setRewards(data)
    }
    fetchRewards()
  }, [])

  return (
    <div className={styles.container} data-aos="fade-up">
      <div className={styles.header}>
        <h1>Rewards</h1>
        <div className={styles.coinBalance}>
          Coin Balance: <span>0</span>
        </div>
      </div>

      <div className={styles.grid}>
        {rewards.map((reward, index) => (
          <div
            className={styles.card}
            key={reward.id}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img src={reward.image} alt={reward.title} />
            <h3>{reward.title}</h3>
            <p>{Math.round(reward.price)} Coins</p>
            <button className={styles.redeemButton}>Redeem</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Rewards