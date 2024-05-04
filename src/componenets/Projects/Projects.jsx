import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import hardware from '../../data/hardware.json'
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section>
       <section className={styles.container} id="projectsSoft">
        <h2 className={styles.title}>Software Projects</h2>
        <div className={styles.projects}>
          {projects.map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })}
        </div>
      </section>
       <section className={styles.container} id="projectsHard">
        <h2 className={styles.title}>Hardware Projects</h2>
        <div className={styles.projects}>
          {hardware.map((project, id) => {
            return <ProjectCard key={id} project={project} />;
          })}
        </div>
      </section>
    </section>
      

  );
};