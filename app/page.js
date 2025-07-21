"use client";

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from "./homepage.module.css";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero} data-aos="fade-up">
        <div className={styles.heroText}>
          <h1>Never Stay Stuck Again<br />Instantly Solve your Math Doubts</h1>
          <p>Post your Doubts, get solutions to your queries fast and master problems with ease.</p>
          <div className={styles.heroButtons}>
            <Link href="/questions"><button className={styles.primary}>Ask your First Doubt</button></Link>
            <Link href="/questions"><button className={styles.secondary}>Solve Doubts and Win</button></Link>
          </div>
        </div>
        <div className={styles.heroImage} data-aos="fade-up">
          <Image src="/h1.png" alt="Ask Doubts" width={400} height={400} />
        </div>
      </section>

      {/* Feature Box */}
      <section id='features' className={styles.features}>
        <h2 data-aos="fade-up">Ask Doubts Instantly</h2>
        <div className={styles.featureGrid}>
          <div className={styles.featureBox} data-aos="fade-up">
            <Image src="/h2.png" alt="Ask" width={150} height={150} />
            <h3>Ask Doubts Instantly</h3>
            <p>Post your questions and get quick, verified answers.</p>
          </div>
          <div className={styles.featureBox} data-aos="fade-up" data-aos-delay="100">
            <Image src="/h3.png" alt="Coins" width={150} height={150}/>
            <h3>Earn Coins & Rewards</h3>
            <p>Solve doubts for others, earn coins and redeem it for gifts.</p>
          </div>
          <div className={styles.featureBox} data-aos="fade-up" data-aos-delay="200">
            <Image src="/h4.png" alt="Mentor" width={150} height={150} />
            <h3>Learn While Helping</h3>
            <p>Sharpen your skills by solving real doubts from other students.</p>
          </div>
          <div className={styles.featureBox} data-aos="fade-up" data-aos-delay="300">
            <Image src="/h5.png" alt="Gamify" width={150} height={150} />
            <h3>Gamified Learning Level Up</h3>
            <p>Solve questions, level up and win badges.</p>
          </div>
        </div>
      </section>

      {/* Info Boxes */}
      <section className={styles.infoBoxes}>
        <div className={styles.infoBox} data-aos="fade-up">
          <Image src="/h6.png" alt= "info1" width={150} height={150} />
          <h3>Ask Any Doubt, Anytime</h3>
          <p>No more waiting for tuitions. Post your questions and get help in minutes.</p>
        </div>
        <div className={styles.infoBox} data-aos="fade-up" data-aos-delay="100">
          <Image src="/h7.png" alt= "info2" width={150} height={150} />
          <h3>Help Others, Earn Coins</h3>
          <p>Students can also become solvers. Earn coins for every doubt you solve and exchange them for goodies.</p>
        </div>
      </section>

      {/* How It Works */}
      <section className={styles.howItWorks}>
        <h2>How it Works</h2>
        <div className={styles.steps}>
          <div className={styles.stepItem}>
            <Image src="/h8.png" alt="Sign Up" width={100} height={100} />
            <p>Sign Up</p>
          </div>
          <div className={styles.arrow}>
            <Image src="/right-arrow.png" alt="Arrow" width={180} height={180} />
          </div>
          <div className={styles.stepItem}>
            <Image src="/h9.png" alt="Solve" width={150} height={150} />
            <p>Solve Doubts</p>
          </div>
          <div className={styles.arrow}>
            <Image src="/right-arrow.png" alt="Arrow" width={30} height={30} />
          </div>
          <div className={styles.stepItem}>
            <Image src="/h10.png" alt="Earn" width={150} height={150} />
            <p>Earn Coins</p>
          </div>
          <div className={styles.arrow}>
            <Image src="/right-arrow.png" alt="Arrow" width={30} height={30} />
          </div>
          <div className={styles.stepItem} id='contacts'>
            <Image src="/h11.png" alt="Rewards" width={150} height={150} />
            <p>Get Rewards</p>
          </div>
        </div>
      </section>



    </div>
  );
}