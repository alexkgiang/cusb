import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNavbar = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className={styles.navbar}>
      <a href="javascript:void(0);" className="menu-icon" onClick={toggleNavbar}>
        <i className="fa-solid fa-bars fa-3x" id="menu-icon"></i>
      </a>
      <Link to="/Home" className={styles.nav}>Home</Link>
      <a href="About.html" className={styles.nav}>About</a>
      <a href="Team.html" className={styles.nav}>Team</a>
      <a href="Support.html" className={styles.nav}>Support Us</a>
    </nav>
  )
}

export default Navbar;

