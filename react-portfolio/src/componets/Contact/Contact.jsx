import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
    return (
    <footer className={styles.container}>
        <div className={styles.text}>
            <h2>Contact Me</h2>
            <p>Get in touch!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt="icon" />
                <a href="mailto:jrbriz30@gmail.com">jrbriz30@gmail.com</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt="icon" />
                <a href="https://www.linkedin.com/in/john-robert-briz-304285250/">linkedin.com/johnrobertbriz</a>
            </li>

            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt="icon" />
                <a href="https://github.com/jrB-123">github.com/jrB-123</a>
            </li>
            <p className={styles.copyright}>Copyright © 2024 John Robert Briz. All Rights Reserved.</p>
        </ul>
        
    </footer>
    );
};