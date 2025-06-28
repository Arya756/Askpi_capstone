"use client"

import Image from "next/image"
import React,{useState} from "react"
import styles from "./Login.module.css"

const LoginPage = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState('')

    const handleLogin = (e) =>{
        e.preventDefault();
        console.log({email,password})
    }

    return(  
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.logo}>
                    <Image src="/logo.png" alt="Askpi Logo" width={150} height={150}/>
                    {/* <h1>Ask<span></span>π</h1> */}
                </div>
                <form onSubmit={handleLogin} className={styles.form}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Login</button>
                </form>
                <p className={styles.signup}>
                    Don't have an account? <a href="/signup">Sign up</a>
                </p>
            </div>

            {/* character image at the bottom right */}
            <div className={styles.character}>
                <Image src="/character.png" alt="sorry😔" width={160} height={160} />
            </div>
        </div>
        

    )
}
export default LoginPage




  