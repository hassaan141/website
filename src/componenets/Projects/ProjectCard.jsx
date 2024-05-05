import React, { useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

  return (
    <div className={styles.container}>
      <img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
      />
      <h3 className={styles.title}>{title}</h3>
      <div className={showFullDescription ? styles.descriptionExpanded : styles.description}>
        {description.length > 100 && !showFullDescription ? description.substring(0, 100) + '...' : description}
        {description.length > 100 && (
          <button onClick={toggleDescription} className={styles.readMore}>
            {showFullDescription ? 'Read Less' : 'Read More'}
          </button>
        )}
      </div>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>{skill}</li>
        ))}
      </ul>
      <div className={styles.links}>
        <a target="_blank" href={demo} className={styles.link}>Demo</a>
        <a target="_blank" href={source} className={styles.link}>Source</a>
      </div>
    </div>
  );
};