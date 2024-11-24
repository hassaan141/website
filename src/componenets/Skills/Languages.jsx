import React from "react";

import styles from "./Languages.module.css";
import skills from "../../data/updatedSkills.json";
import { getImageUrl } from "../../utils";
import { div } from "framer-motion/client";

export const Languages = () => {
  return (
    <section className={styles.container} >
      <div className={styles.wrapper}>
        <div className={styles.heading}> Skills</div>
        <div className={styles.description}>My skills with languages and frameworks</div>

        <div className={styles.skillsContainer}>
          {skills.map((title, index)=>{
            return(
              <div className={styles.skill}>
                <div className={styles.title}>{title.category}</div>
                <div className={styles.list}>{title.list.map((theSkill, index)=>{
                  return(
                    <div className={styles.skillItem}>
                      <img className={styles.skillImage} src={theSkill.imageSrc}/>
                        {theSkill.title}
                    </div>
                  )
                })}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};