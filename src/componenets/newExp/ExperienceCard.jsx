import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import styles from "./ExpCard.module.css";


const ExperienceCard = ({experience}) => {
  return (
    <VerticalTimelineElement
    icon={
        <img
        width="100%"
        height="100%"
        alt={experience?.organization}
        style={{ borderRadius: "50%", objectFit: "cover" }}
        src={experience?.imageSrc}
        />
    }
    contentStyle={{
        background: "#1d1836",
        color: "#fff",
        boxShadow: "rgba(23, 92, 230, 0.15) 0px 4px 24px",
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        border: "1px solid rgba(255, 255, 255, 0.125)",
        borderRadius: "6px",
    }}
    contentArrowStyle={{
        borderRight: "7px solid  rgba(255, 255, 255, 0.3)",
    }}
    date={experience?.date}
    iconStyle={{
        backgroundColor: "rgba(17, 25, 40, 0.83)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }}
    >

   <div className={styles.Top}>
    <h3 className={styles.Role}>{experience?.role}</h3>
    <div className={styles.dateContainer}>
        <h4 className={styles.Organization}>{experience?.organisation}</h4>
        <h6 className={styles.Date}>{experience.startDate} - {experience.endDate}</h6>
    </div>

  </div>
  <ul className={styles.Experiences}>
    {experience?.experiences?.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>


  </VerticalTimelineElement>
  )
}

export default ExperienceCard