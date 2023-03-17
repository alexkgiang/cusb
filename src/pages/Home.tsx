import React from 'react';
import Image from 'next/image';
import bear from './images/bear.png';
import styles from './styles/home.module.css';
import Navbar from '../components/Navbar';

function Home() {
  return (
    <main className={styles.homecontainer}>
      <div className={styles.homeimage}>
        <Navbar />
        <Image
          src={bear}
          alt="cusb bear"
          priority
        />
      </div>
      <div className={styles.hometext}>
        <h1 className={styles.homeheader}>Welcome to Cornell University's Project Team</h1>
        <p className={styles.desc}>Founded in 2017, our team has aimed to design and build an innovative, single-occupant, solar-powered boat to compete in the annual Solar Splash competition.</p>
      </div>
    </main>
  )
}

export default Home;