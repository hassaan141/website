import React from 'react';
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About =()=>{

  return (
    <section className = {styles.container} id='about'>
      <h2 className={styles.title}>
        About Me
      </h2>
      <div className={styles.content}>
        <img src={getImageUrl("luffy.jpg")} alt="luffy" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Cursor" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Development</h3>
              <p>I have experience working with both front-end and back-end applications, creating web applications, landing pages, full-stack apps, and dynamic mobile applications.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/robotics.png")} className={styles.robotImg} alt="Servor" />
            <div className={styles.aboutItemText}>
              <h3>Robotics</h3>
              <p>I am passionate about robotics and electronics, designing and constructing innovative projects using platforms like Vex, Arduino, and Lego EV3.</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/ball.png")} className={styles.ballImg} alt="Ui" />
            <div className={styles.aboutItemText}>
              <h3>Sports</h3>
              <p>Aside from technolgoy, I also love to play sports like basketball, football, and soccer.</p>
            </div>
          </li>
        </ul>
          
      </div>
    </section>
  )
}
