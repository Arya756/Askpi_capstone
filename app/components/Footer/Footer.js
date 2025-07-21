import React from "react";
import styles from "./footer.module.css";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.links}>
          <a href="/" className={styles.link}>About</a>
          <a href="/" className={styles.link}>Contact</a>
          <a href="/" className={styles.link}>Terms</a>
          <a href="/" className={styles.link}>Privacy</a>
        </div>

        <div className={styles.socialIcons}>
          <FaInstagram className={styles.icon} />
          <FaLinkedin className={styles.icon} />
          <FaTwitter className={styles.icon} />
        </div>

        <p className={styles.copyright}>
          © 2025 AskPi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;