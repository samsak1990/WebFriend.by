import React from "react";
import styles from "./Services.module.css";
import {
  ServicesList as content,
  type TServices,
} from "../../data/Services/ServicesList";
import type { ILang } from "../../data/Interfaces/IGeneral";
import { ServiceCard } from "../UI/ServiceCard/ServiceCard";

export const Services: React.FC<ILang> = ({ lang }) => {
  const data: TServices[] = lang === "ru" ? content.en : content.ru;

  return (
    <div className={styles.services__wrapper}>
      {data.map((item, index) => (
        <ServiceCard key={index} data={item} />
      ))}
    </div>
  );
};
