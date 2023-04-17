import React from 'react';
import styles from './styles/about.module.css';
import Navbar from '../components/Navbar';

function About() {
  return (
    <div className={styles.aboutbody}>
      <Navbar />
      <div className={styles.aboutflexcontainer}>
        <div className={styles.abouttoptext}>
          <h1>
            An engineering project team,{' '}
            <span style={{ color: '#878787' }}>
              dedicated to sustainable energy systems and efficient design
            </span>
            <br />
          </h1>
          <h3>
            <span style={{ color: '#575757' }}>From concept to practice</span>
            <br />
            <span className={styles.aboutdetails}>
              Cornell University Solar Boat is one of Cornell's highly esteemed project teams. The team, entirely
              comprised of undergraduates from a healthy variety of majors, believes the Solar Splash Competiton to be
              the perfect challenge to test our classroom knowledge.
            </span>
          </h3>
        </div>
        <div className={styles.abouttopimage}>
          <img src="Images/red-boat-2.png" alt="About Boat" />
        </div>
      </div>
      <div id={styles.about2}>
        <h1>Five subteams, one CU Solar Boat</h1>
        <h3 className={styles.aboutlower}>
          The subteams{' '}
          <span className={styles.aboutlowerfont}>
            are student-led teams, and each of them with their own contribution to the boat. We embrace the
            diverse skill sets and backgrounds of our team members and actively engage in and encourage cross-team,
            multidisciplinary work.
          </span>
        </h3>
      </div>
      <div className={styles.aboutbottomflexcontainer}>
        <div className={styles.solar}>
          <img src="Images/solar2.png" id="solar-img" alt="Solar" />
          <h1>Solar</h1>

          <h3 id={styles.aboutbody}>
            Solar panel system design and construction, panel wiring, waterproofing and charging system creation
          </h3>
        </div>
        <div className={styles.hull}>
          <img src="Images/hull2.png" id="hull-img" alt="Hull" />
          <h1 id={styles.hull}>Hull</h1>

          <h3 id={styles.aboutbody}>
            Hull design and fabrication, structural and fluid analysis and component installation
          </h3>
        </div>
        <div className={styles.drivetrain}>
          <img src="Images/drivetrain-steering2.png" id="drivetrain-img" alt="Drivetrain & Steering" />
          <h1>Drivetrain</h1>
          <h3 id={styles.aboutbody}>
            Motor housing, design and construction of drivetrain, steering, drive shaft system and waterproofing
          </h3>
        </div>
        <div className={styles.sysco}>
          <img src="Images/sysco3.png" id="sysco-img" alt="Sysco" />
          <h1 id={styles.sysco}>Systems</h1>
          <h3 id={styles.aboutbody}>
            Motor control, data acquisition, communication systems, safety mechanisms and speed control
          </h3>
        </div>
      </div>
    </div>

  )
}

export default About;