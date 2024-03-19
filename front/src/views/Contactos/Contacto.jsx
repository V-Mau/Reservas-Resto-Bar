import React from "react";
import styles from "./Contacto.module.css";
import facebookImg from "../../../Img/imgContact/facebook.png";
import instagramImg from "../../../Img/imgContact/instagram.png";
import githubImg from "../../../Img/imgContact/github (1).png";
import twitterImg from "../../../Img/imgContact/gorjeo (1).png";
import linkedinImg from "../../../Img/imgContact/linkedin.png";

const Contacto = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}></h2>
      <div className={styles.redes}>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <img src={facebookImg} alt="Facebook" className={styles.icon} />
        </a>
        <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
          <img src={instagramImg} alt="Instagram" className={styles.icon} />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <img src={twitterImg} alt="Twitter" className={styles.icon} />
        </a>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
          <img src={githubImg} alt="GitHub" className={styles.icon} />
        </a>
        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinImg} alt="LinkedIn" className={styles.icon} />
        </a>
      </div>
    </div>
  );
}

export default Contacto;
