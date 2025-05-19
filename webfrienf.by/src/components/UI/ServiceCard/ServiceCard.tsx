import React from "react";
import styles from "./ServiceCard.module.css";
import type { TServices } from "../../../data/Services/ServicesList";

interface IServiceCardProp {
  data: TServices;
}

export const ServiceCard: React.FC<IServiceCardProp> = ({ data }) => {
  return <div className={styles.serviceCard}></div>;
};
