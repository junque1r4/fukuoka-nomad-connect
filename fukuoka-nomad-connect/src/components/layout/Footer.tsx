'use client';

import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.copyright}>
          © {currentYear} Fukuoka Nomad Connect. A Hackathon Concept.
        </div>
        <div className={styles.links}>
          <Link href="/privacy-policy" className={styles.link}>
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className={styles.link}>
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;