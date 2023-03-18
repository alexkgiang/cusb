import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import logo from './logo.png';
import Image from 'next/image';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.logocontainer}>
        <Image src={logo} alt="Logo" width={72} className={styles.logo} />
      </div>
      <div className={styles.textcontainer}>
        <a href="javascript:void(0);" className="menu-icon" onClick={toggleNavbar}>
          <i className="fa-solid fa-bars fa-3x" id="menu-icon"></i>
        </a>
        <Link href="/Home" className={styles.nav}>Home</Link>
        <a href="About.html" className={styles.nav}>About</a>
        <a href="Team.html" className={styles.nav}>Team</a>
        <a href="Support.html" className={`${styles.nav} ${styles.highlight}`}>Support Us</a>
      </div>
    </nav>
  )
}

export default Navbar;
