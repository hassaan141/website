import React from 'react'
import styles from "./newProjCard.module.css"


const NewProjectCard = ({project}) => {
  return (

    <div className={styles.projectCard}>
        <img className={styles.image} src={project.imageSrc} alt={project.title}/>
        <ul className={styles.skills}>
            {project.skills.map((theSkill)=>{
                return(
                    <li>{theSkill}</li>
                )
            })}
        </ul>
        <div className={styles.detail}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
        </div>
        <div className={styles.buttonGroup}>
            <a href={project.source} target='_Blank' className={styles.github}>Github Code</a>
            {project.demo && <a href={project.demo} target='_Blank' className={styles.github}>Demo</a>}
        </div>
    </div>
  )
}

export default NewProjectCard