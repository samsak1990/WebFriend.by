import React from "react";
import styles from "./HelloBox.module.css";
import Toy from "../../assets/toy.png";
import { Social } from "../../components/UI/Socials/Social";
import { SOCIAL_LIST } from "../../data/Socials/Socials";
import { GENERAL_CONTENT as content, type THelloBox } from "./HelloBox.content";
import type { TLang } from "../../data/Interfaces/IGeneral";

export const HelloBox: React.FC<{ lang: TLang }> = ({ lang }) => {
  const { h1, h2, span, button_portfolio }: THelloBox = content[lang];
  return (
    <section className={styles.general}>
      <div className={styles.general__leftBox}>
        <div className={styles.leftBox__socials}>
          {SOCIAL_LIST.map((social, index) => (
            <Social data={social} key={index} />
          ))}
        </div>
        <h1 className={styles.typingAnimation}>
          {h1}
          <span className={styles.select}>{span}</span>.
        </h1>
        <h2 className={styles.descriptionText}>{h2}</h2>
        <div className={styles.buttons_group}>
          <button className={styles.leftBox__toPortfolio}>
            {button_portfolio}
          </button>
          <button
            className={styles.leftBox__toYoutube}
            title="YouTube"
          ></button>
        </div>
      </div>
      <div className={styles.general__rightBox}>
        <figure>
          <img src={Toy} alt="My photo" />
        </figure>
      </div>
    </section>
  );
};
