import React from 'react';
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About =()=>{

  return (
    <section className = {styles.container} id='about'>
      <h2 className={styles.title}>
        About
      </h2>
      <div className={styles.content}>
        <img src={getImageUrl("luffy.jpg")} alt="luffy" className={styles.aboutImage}/>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>ierhiehbreob hreoihreiohreioh reiohrehooirh eoirheoiheio eoiheoih rei</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Servor" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>ierh iehbreo behreoihre iohreiohrei ohrehooirh oirheoi heiohe oihe oihrei</p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/uiIcon.png")} alt="Ui" />
            <div className={styles.aboutItemText}>
              <h3>King of the pirates</h3>
              <p>ie rhi hbre obehre oihr iohrei hreiohre ooirheoi rheoihei oheo heoihrei</p>
            </div>
          </li>
        </ul>
          
      </div>
    </section>
  )
}
