import React, {useEffect, useState} from "react";

import styles from "./newProj.module.css"
import all from '../../data/allProjects.json'
import software from '../../data/projects.json'
import robotics from '../../data/hardware.json'
import machinelearning from '../../data/ml.json'
import NewProjectCard from "./newProjectCard";


export const NewProj = () => {
  
    const [projects, setProjects] = useState("all")
    const [projectsList, setProjectsList] = useState(all);
  

    useEffect(()=>{
        if(projects === "all"){
            setProjectsList(all)
        }else if(projects === "software"){
            setProjectsList(software)
        }else if(projects === "robotics"){
            setProjectsList(robotics)
        }else if(projects === "machine-learning"){
            setProjectsList(machinelearning)
        }
        
    }, [projects])
  
    return (
        <section className={styles.container} id="projects">
            <div className={styles.wrapper}>
                <h2 className={styles.title}>Projects</h2>
                <p className={styles.desc}>Take a look at some of my projects in frontend, fullstack, robotics and embedded systems.</p>
            
                <div className={styles.buttonGroup}>
                    <button onClick={()=> setProjects("all")}>All</button>
                    <button onClick={()=> setProjects("software")}>Software</button>
                    <button onClick={()=> setProjects("robotics")}>Robotics</button>
                    <button onClick={()=> setProjects("machine-learning")}>Machine Learning</button>
                </div>

                <div className={styles.projectCard}>
                    {projectsList.map((project)=>{
                        return(
                            <NewProjectCard project={project} />
                        )
                    })}

                </div>
                
                </div>
        </section>
        
  );
};