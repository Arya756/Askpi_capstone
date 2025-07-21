import Link from 'next/link'
import React from 'react'
import Image from "next/image"
import styles from "./Navbar.module.css"


const Navbar = () => {
  return (
    <nav className={styles.navbar}>

    {/* Navbar Left */}
    <div className={styles.navleft}>
      <div className={styles.navlogo}>
        <Image src="/logo.png" alt="Askpi logo" width={100} height={100}/>
      </div>
      <div className={styles.navlinks}>
        <Link href="/">Home</Link>
        <Link href="/">Features</Link>
        <Link href="/questions">Questions</Link>
        <Link href="/">Contact Us</Link>
        <Link href="/">Rewards</Link>
      </div>
    </div>

    {/* Navbar right */}
    <div className={styles.navauth}>
      <Link href="/login">
        <button className={styles.loginbutton}>Login</button>
      </Link>
      <button className={styles.signupbutton}>Sign Up</button>
    </div>

    </nav>
  )
}

export default Navbar 