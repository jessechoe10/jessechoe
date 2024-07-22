import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/about.jpg")}
          alt="MIT photo"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/entrepreneur.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Entrepreneur</h3>
              <p>
                I cofounded a B2B and B2C fintech SAAS startup powered by AI called Aurelius.ai
                - a convenient data and information platform built for retail traders.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/dev.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
                I helped build multiple end-to-end web applications including a chatbot for 
                suicide hotline workers and a 1000 participant coding competition with a server.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/researcher.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Researcher</h3>
              <p>
                I conducted deep learning research under esteemed professionals like Dr. Leslie Smith
                and Dr. Dinesh Manocha through internships, and I even got my own independent research
                published in IEEE through a conference.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
