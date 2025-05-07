'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import ConnectWalletButton from '../ui/ConnectWalletButton';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const featuresRef = useRef<HTMLDivElement>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleFeaturesDropdown = () => {
    setFeaturesDropdownOpen(!featuresDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (featuresRef.current && !featuresRef.current.contains(event.target as Node)) {
        setFeaturesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src="/assets/fuku_coin_logo.png" alt="Fukuoka Nomad Connect" width={32} height={32} />
          <span className={styles.logoText}>Fukuoka Nomad Connect</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.nav}>
          <Link 
            href="/" 
            className={pathname === '/' ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}
          >
            Home
          </Link>
          <Link 
            href="/get-pass" 
            className={pathname === '/get-pass' ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}
          >
            Get Pass
          </Link>
          <Link 
            href="/dashboard" 
            className={pathname === '/dashboard' ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}
          >
            Dashboard
          </Link>
          
          {/* Features Dropdown */}
          <div 
            ref={featuresRef}
            className={`${styles.dropdownWrapper} ${featuresDropdownOpen ? styles.dropdownOpen : ''}`}
          >
            <button 
              className={styles.dropdownButton}
              onClick={toggleFeaturesDropdown}
              aria-expanded={featuresDropdownOpen}
            >
              Features
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className={styles.dropdownContent}>
              <Link href="/features/local-value" className={styles.dropdownItem}>Local Value</Link>
              <Link href="/features/skills-hub" className={styles.dropdownItem}>Skills Hub</Link>
              <Link href="/features/community-fund" className={styles.dropdownItem}>Community Fund</Link>
            </div>
          </div>
          
          <Link 
            href="/why-solana" 
            className={pathname === '/why-solana' ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}
          >
            Why Solana
          </Link>
          
          <ConnectWalletButton />
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          {!mobileMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="#00A9A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="#00A9A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`${styles.mobileNav} ${mobileMenuOpen ? styles.mobileNavOpen : ''}`}>
        <div className={styles.mobileNavHeader}>
          <Link href="/" className={styles.logo} onClick={() => setMobileMenuOpen(false)}>
            <Image src="/assets/fuku_coin_logo.png" alt="Fukuoka Nomad Connect" width={32} height={32} />
            <span className={styles.logoText}>Fukuoka Nomad Connect</span>
          </Link>
          <button 
            onClick={toggleMobileMenu}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18M6 6L18 18" stroke="#00A9A5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className={styles.mobileNavLinks}>
          <Link 
            href="/" 
            className={pathname === '/' ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}
          >
            Home
          </Link>
          <Link 
            href="/get-pass" 
            className={pathname === '/get-pass' ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}
          >
            Get Pass
          </Link>
          <Link 
            href="/dashboard" 
            className={pathname === '/dashboard' ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}
          >
            Dashboard
          </Link>
          <Link 
            href="/features/local-value" 
            className={pathname === '/features/local-value' ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}
          >
            Local Value
          </Link>
          <Link 
            href="/features/skills-hub" 
            className={pathname === '/features/skills-hub' ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}
          >
            Skills Hub
          </Link>
          <Link 
            href="/features/community-fund" 
            className={pathname === '/features/community-fund' ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}
          >
            Community Fund
          </Link>
          <Link 
            href="/why-solana" 
            className={pathname === '/why-solana' ? `${styles.navLink} ${styles.navLinkActive}` : styles.navLink}
          >
            Why Solana
          </Link>
          <div className="mt-4">
            <ConnectWalletButton />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;