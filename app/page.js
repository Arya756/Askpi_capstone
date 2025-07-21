import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "./homepage.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>Never Stay Stuck Again<br />Instantly Solve your Math Doubts</h1>
          <p>Post your Doubts, get solutions to your Doubts fast and master problems with ease.</p>
          <div className={styles.heroButtons}>
            <Link href="/questions"><button className={styles.primary}>Ask your First Doubt</button></Link>
            <Link href="/questions"><button className={styles.secondary}>Solve Doubts </button></Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image src="/h1.png" alt="Ask Doubts" width={400} height={400} />
        </div>
      </section>

      {/* Feature Grid */}
      <section className={styles.features}>
        <h2>Ask Doubts Instantly</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureBox}>
            <Image src="/icons/ask.png" alt="Ask" width={40} height={40} />
            <h3>Ask Doubts Instantly</h3>
            <p>Post your questions and get quick, verified answers.</p>
          </div>
          <div className={styles.featureBox}>
            <Image src="/icons/coins.png" alt="Coins" width={40} height={40} />
            <h3>Earn Coins & Rewards</h3>
            <p>Solve doubts for others, earn coins and redeem it for gifts.</p>
          </div>
          <div className={styles.featureBox}>
            <Image src="/icons/mentor.png" alt="Mentor" width={40} height={40} />
            <h3>Choose your Mentor</h3>
            <p>Hand-pick your mentors based on ratings and ask them your questions.</p>
          </div>
          <div className={styles.featureBox}>
            <Image src="/icons/gamify.png" alt="Gamify" width={40} height={40} />
            <h3>Gamified Learning Level Up</h3>
            <p>Solve questions, level up and win badges.</p>
          </div>
        </div>
      </section>

      {/* Info Boxes */}
      <section className={styles.infoBoxes}>
        <div className={styles.infoBox}>
          <h3>Ask Any Doubt, Anytime</h3>
          <p>No more waiting for tuitions. Post your questions and get help in minutes.</p>
        </div>
        <div className={styles.infoBox}>
          <h3>Help Others, Earn Coins</h3>
          <p>Students can also become solvers. Earn coins for every doubt you solve and exchange them for goodies.</p>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.howItWorks}>
        <h2>How it Works</h2>
        <div className={styles.steps}>
          <div className={styles.step}>
            <Image src="/steps/signup.png" alt="Sign Up" width={70} height={70} />
            <p>Sign Up</p>
          </div>
          <div className={styles.step}>
            <Image src="/steps/solve.png" alt="Solve" width={70} height={70} />
            <p>Solve Doubts</p>
          </div>
          <div className={styles.step}>
            <Image src="/steps/earn.png" alt="Earn" width={70} height={70} />
            <p>Earn Coins</p>
          </div>
          <div className={styles.step}>
            <Image src="/steps/rewards.png" alt="Rewards" width={70} height={70} />
            <p>Get Rewards</p>
          </div>
        </div>
      </section>
    </div>
  );
}
