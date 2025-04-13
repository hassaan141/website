import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import styled from "styled-components"
import Typewriter from "typewriter-effect";


const strings = ["Mechatronics Student", "Full-Stack Developer", "Robotics Enthusiast"];

export const Hero = () => {



  return (
    <section className={styles.container} >

      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Muhammad</h1>
        <h3 className={styles.SubTitle}>
          I am a&nbsp; 
          <span className={styles.inlineTypewriter}>
            <Typewriter
              options={{
                strings: strings,
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </h3>
        <p className={styles.description}>
        I am a Mechatronics student at the University of Waterloo, where I blend mechanical and electronic engineering to innovate and solve complex problems. I have a strong interest in full-stack development, web development and robotics.
        </p>
        <a href="https://drive.google.com/file/d/1BtreiWJGAbflmU2p4khMq-xRJPk3WvTL/view?usp=sharing" target="_blank">
          Resume
        </a>
      </div>
      <img
        src={getImageUrl("hero/pfp.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};