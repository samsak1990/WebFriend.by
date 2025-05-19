import React from "react";
import styles from "./ServiceCard.module.css";
import type { TServices } from "../../../data/Services/ServicesList";

interface IServiceCardProp {
  data: TServices;
}

export const ServiceCard: React.FC<IServiceCardProp> = ({ data }) => {
  return (
    <div className={styles.service__card}>
      <img src={data.img} alt="" />
      <h3>{data.type}</h3>
      <ul className={styles.ditail_list}>
        {data.ditails.map((detail, index) => (
          <li key={index} className={styles.service__kind}>{detail}</li>
        ))}
      </ul>
    </div>
  );
};
