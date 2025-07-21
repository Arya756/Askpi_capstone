import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from "./homepage.module.css"

export default function Home() {
  return (
   <div className={styles.main_container}>

    {/* main advertisement */}
    <div className={styles.main_ad}>
      <div className={styles.main_ad_text}>
        {/* <h1>Never Stay Stuck Again <br/> Instantly Solve your <br/> <span>Maths Doubts </span> </h1>
        <p>Connect with top mentors, get solutions fast and master problems with ease.</p>
         */}
   
      </div>
      <div className={styles.main_ad_image}>

      </div>
      


    </div>

    {/* features section */}
    <div className={styles.features}>

    </div>

    {/* sub-features section */}
    <div className={styles.sub_feature}>

    </div>

    {/* how it works section */}
    <div className={styles.How_it_works}>
      
    </div>



   </div>
  )
}