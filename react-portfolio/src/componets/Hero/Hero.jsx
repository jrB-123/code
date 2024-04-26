import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm John Robert Briz</h1>
                <p className={styles.description}>I'm a graduate from Mapua University, I'm currently pursuing for a web developer career!</p>
                <div className={styles.git}>
                    <a href="https://github.com/jrB-123" target="_blank" className={styles.contactBtn}>Github</a>
                    <a href="https://www.linkedin.com/in/john-robert-briz-304285250/" target="_blank" className={styles.contactBtn}>Linkedin</a>
                </div> 
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="Hero image" className={styles.heroimg} />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    );
};