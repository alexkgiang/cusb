import React from 'react';
import Image from 'next/image';
import bear from './images/bear.png';
import styles from './styles/home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Home() {
  return (
    <main className={styles.homecontainer}>
      <Navbar />
      <div className={styles.homeimage}>
        <Image
          src={bear}
          alt="cusb bear"
          priority
        />
      </div>
      <div className={styles.hometext}>
        <h1 className={styles.homeheader}>Welcome to Cornell University's <span style={{ color: "#FC0C0C" }} >Solar Boat</span> Project Team</h1>
        <p className={styles.homedesc}>Founded in 2017, our team has aimed to design and build an innovative, single-occupant, solar-powered boat to compete in the annual Solar Splash competition.</p>
      </div>
      <Footer />
    </main>
  )
}

export default Home;