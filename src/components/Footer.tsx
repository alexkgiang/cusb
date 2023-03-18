import React, { useState } from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';
import Image from 'next/image';
import facebook from './facebook.png';
import instagram from './insta.png';
import linkedin from './linkedin.png';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footercontainer}>
        <div className={styles.contact}>
          <p className={styles.footertext}>Contact us:</p>
          <div className={styles.bar}></div>
          <div className={styles.email}>
            <a
              target="_blank"
              href="mailto:solarboatcornell@gmail.com"
              rel="noopener noreferrer"
            >
              solarboatcornell@gmail.com
            </a>
          </div>
        </div>
        <div className={styles.socials}>
          <p className={styles.footertext}>Follow us:</p>
          <div className={styles.bar}></div>
          <div className={styles.images}>
            <div className={styles.facebook}>
              <a
                href="https://www.facebook.com/CUsolarboat/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={facebook} alt="facebook" className={styles.facebookimg} width={35} />
              </a>
            </div>
            <div className="instagram">
              <a
                href="https://www.instagram.com/cusolarboat/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={instagram} alt="insta" className={styles.instagramimg} width={35} />
              </a>
            </div>
            <div className="linkedin">
              <a
                href="https://www.linkedin.com/company/cornelluniversity-solarboat"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={linkedin} alt="linkedin" className={styles.linkedinimg} width={35} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;