import React from "react";

import styles from "./newExp.module.css";
import history from '../../data/history.json'
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import ExperienceCard from "./ExperienceCard";




export const NewExp = () => {
  return (
    <section className={styles.container} id="experience">
        <div className={styles.wrapper}>
        <h2 className={styles.title}>Experience</h2>
        <p className={styles.desc}>Here is my work experience.</p>
        <VerticalTimeline>
          {history.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
        </div>
    </section>
      
  );
};