import React, { useState } from 'react';
import styles from './newProjCard.module.css';
import Modal from './Modal';

const NewProjectCard = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className={styles.projectCard} onClick={() => setShowModal(true)}>
        <img className={styles.image} src={project.imageSrc} alt={project.title} />
        {/* <ul className={styles.skills}>
          {project.skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul> */}
        <div className={styles.detail}>
          <h3>{project.title}</h3>
        {/* <p>{project.description}</p> */}
        </div>
        {/* <div className={styles.buttonGroup}>
          <a href={project.source} target="_blank" rel="noreferrer" className={styles.github}>Github Code</a>
          {project.demo && <a href={project.demo} target="_blank" rel="noreferrer" className={styles.github}>Demo</a>}
        </div> */}
      </div>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)} project={project} />
    </>
  );
};

export default NewProjectCard;
