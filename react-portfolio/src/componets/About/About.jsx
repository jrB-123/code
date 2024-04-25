import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/Mapua.png")} alt="icon" className={styles.img2} />
                    <div className={styles.aboutItemText}>
                        <h3>BS of Computer Science</h3>
                        <p>Mapua University</p>
                        <p>Graduated in 2023</p>
                    </div>
                </li>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/backend.png")} alt="icon" className={styles.img} />
                    <div className={styles.aboutItemText}>
                        <h3>Backend Developer</h3>
                        <p>Applied an Internship (OJT) in Mapua University as a Backend Developer</p>
                    </div>
                </li>
                
            </ul>
        </div>
    </section>
    
    );
};