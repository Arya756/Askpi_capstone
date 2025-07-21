import React from "react";
import styles from "./footer.module.css";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/ayush-aryan-360827323/" className={styles.link}>About</a>
          <a href="https://www.linkedin.com/in/ayush-aryan-360827323/" className={styles.link}>Contact</a>
          <a  className={styles.link}>Terms</a>
          <a  className={styles.link}>Privacy</a>
        </div>

        <div className={styles.socialIcons}>
          <a href="https://www.instagram.com/ayusharyan1333/">
          <FaInstagram className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/ayush-aryan-360827323/">
          <FaLinkedin className={styles.icon} />
          </a>
          <a href="https://x.com/Arya223402">
          <FaTwitter className={styles.icon} />
          </a>
        </div>

        <p className={styles.copyright}>
          © 2025 AskPi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;