import React, { useEffect, useRef } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import styled from "styled-components"
import Typewriter from "typewriter-effect";


const strings = [
  "Humanoid Robots",
  "Robot Arms",
  "Robot Simulations"
  "Autonomous Systems",
  "Physical AI",
];

export const Hero = () => {

  return (
    <section className={styles.container} >

      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Muhammad</h1>
        <h3 className={styles.SubTitle}>
          I Build&nbsp; 
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
          I'm a Mechatronics Engineering student at the University of Waterloo, passionate about building intelligent, embodied systems. I focus on humanoid robotics and physical AI—developing behavior layers, perception pipelines, and planning systems that bring robots to life in the real world.
        </p>
        <a href="https://drive.google.com/file/d/1i_8ySvmLb_TI-CTxdAV8I0uQNX8a-PLr/view?usp=sharing" target="_blank" className={styles.contactBtn}>
          Check Out My Resume!
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