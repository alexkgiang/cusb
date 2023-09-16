import React from 'react';
import Image from 'next/image';
import bear from './images/bear.png';
import styles from './styles/home.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function Home() {
  return (
    <div className={styles.wrapper}>
      <Navbar />
      <div className={styles.content}>
        <div className={styles.hometext}>
          <h1 className={styles.homeheader}>
            Welcome to Cornell University's <span style={{ color: "#FC0C0C" }}>Solar Boat</span> Project Team
          </h1>
          <p className={styles.homedesc}>
            Founded in 2017, our team has aimed to design and build an innovative, single-occupant, 14-foot solar-powered boat to compete in the annual Solar Splash competition.
          </p>
        </div>
        <div className={styles.homeimage}>
          <Image
            src={bear}
            alt="cusb bear"
            priority
          />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home;

