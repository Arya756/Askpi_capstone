"use client"
import Image from "next/image"
import React,{useState} from "react"
import styles from "./Login.module.css"
import {auth} from "@/lib/firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useRouter } from "next/navigation"

const LoginPage = () => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError] = useState("")
    const router = useRouter()


    const handleLogin = async (e) =>{
        e.preventDefault();
        setError("")

        try{
            const userCredentials= await signInWithEmailAndPassword(auth,email,password)
            console.log("Logged in user:",userCredentials.user)
            router.push("/") 
        } catch (err){
            console.log("login error:", err)
            setError("Invalid email or password")

        }
    }

    return(  
        <div className={styles.container}>

            <Image src="/coin1.png" alt="coin" className={styles.coin1} width={40} height={40} />
            <Image src="/coin2.png" alt="coin" className={styles.coin2} width={50} height={50} />
            <Image src="/coin3.png" alt="coin" className={styles.coin3} width={30} height={30} />
            <Image src="/coin4.png" alt="coin" className={styles.coin4} width={35} height={35} />
            <Image src="/coin5.png" alt="coin" className={styles.coin5} width={45} height={45} />
            <Image src="/prop1.png" alt="coin" className={styles.prop1} width={40} height={40} />
            <Image src="/prop2.png" alt="coin" className={styles.prop2} width={50} height={50} />
            <Image src="/prop3.png" alt="coin" className={styles.prop3} width={30} height={30} />
            <Image src="/prop4.png" alt="coin" className={styles.prop4} width={35} height={35} />
            <Image src="/prop5.png" alt="coin" className={styles.prop5} width={45} height={45} />
            <Image src="/coin1.png" alt="coin" className={styles.coin6} width={40} height={40} />
            <Image src="/coin4.png" alt="coin" className={styles.coin7} width={40} height={40} />
            <Image src="/coin2.png" alt="coin" className={styles.coin8} width={40} height={40} />
            <Image src="/prop1.png" alt="coin" className={styles.prop6} width={30} height={30} />
            <Image src="/prop5.png" alt="coin" className={styles.prop7} width={30} height={30} />
            <Image src="/prop3.png" alt="coin" className={styles.prop8} width={30} height={30} />




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

                {/* for displaying error */}
                { error && <p className={styles.error}>{error}</p> }

                <p className={styles.signup}>
                    Don't have an account? <a href="/signup">Sign up</a>
                </p>
                 {/* character image at the bottom right */}
                 <div className={styles.character}>
                    <Image src="/character.png" alt="sorry😔" width={160} height={160} />
                </div>
                

            </div>
           

            
        </div>
        

    )  
}
export default LoginPage




  