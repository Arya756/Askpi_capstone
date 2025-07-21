"use client";
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import styles from "./Navbar.module.css";
import {auth} from "@/lib/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    router.push("/");
  };

  return (
    <nav className={styles.navbar}>
      {/* Navbar Left */}
      <div className={styles.navleft}>
<Link href="/"><div className={styles.navlogo}>
          <Image src="/logo.png" alt="Askpi logo" width={100} height={100}/>
        </div></Link>
        <div className={styles.navlinks}>
          <Link href="/">Home</Link>
          <Link href="#features" className={styles.desktopOnly}>Features</Link>
          <Link href="/questions">Questions</Link>
          <Link href="#contacts" className={styles.desktopOnly}>Contact Us</Link>
          <Link href="/rewards">Rewards</Link>
        </div>
      </div>

      {/* Navbar Right */}
      <div className={styles.navauth}>
        {user ? (
          <button className={styles.logoutbutton} onClick={handleLogout}>Logout</button>
        ) : (
          <>
            <Link href="/login">
              <button className={styles.loginbutton}>Login</button>
            </Link>
            <Link href="/signup">
              <button className={styles.signupbutton}>Sign Up</button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;