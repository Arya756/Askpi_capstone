"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./signup.module.css"; 
import {auth} from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Signed up user:", userCredentials.user);
      router.push("/questions"); 
    } catch (err) {
      console.log("signup error:", err);
      setError(err.message); 
    }
  };

  return (
    <div className={styles.container}>

      
      <Image src="/coin1.png" alt="coin" className={styles.coin1} width={40} height={40} />
      <Image src="/coin2.png" alt="coin" className={styles.coin2} width={50} height={50} />
      <Image src="/coin3.png" alt="coin" className={styles.coin3} width={30} height={30} />
      <Image src="/coin4.png" alt="coin" className={styles.coin4} width={35} height={35} />
      <Image src="/coin5.png" alt="coin" className={styles.coin5} width={45} height={45} />
      <Image src="/prop1.png" alt="prop" className={styles.prop1} width={40} height={40} />
      <Image src="/prop2.png" alt="prop" className={styles.prop2} width={50} height={50} />
      <Image src="/prop3.png" alt="prop" className={styles.prop3} width={30} height={30} />
      <Image src="/prop4.png" alt="prop" className={styles.prop4} width={35} height={35} />
      <Image src="/prop5.png" alt="prop" className={styles.prop5} width={45} height={45} />
      <Image src="/coin1.png" alt="coin" className={styles.coin6} width={40} height={40} />
      <Image src="/coin4.png" alt="coin" className={styles.coin7} width={40} height={40} />
      <Image src="/coin2.png" alt="coin" className={styles.coin8} width={40} height={40} />
      <Image src="/prop1.png" alt="prop" className={styles.prop6} width={30} height={30} />
      <Image src="/prop5.png" alt="prop" className={styles.prop7} width={30} height={30} />
      <Image src="/prop3.png" alt="prop" className={styles.prop8} width={30} height={30} />

      
      <div className={styles.card}>
        <div className={styles.logo}>
          <Image src="/logo.png" alt="Askpi Logo" width={150} height={150}/>
        </div>

        <form onSubmit={handleSignup} className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password (min 6 chars)"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign Up</button>
        </form>

        {error && <p className={styles.error}>{error}</p>}

        <p className={styles.signup}>
          Already have an account? <a href="/login">Login</a>
        </p>

        <div className={styles.character}>
          <Image src="/character.png" alt="Character" width={160} height={160} />
        </div>
      </div>

    </div>
  );
};

export default SignupPage;