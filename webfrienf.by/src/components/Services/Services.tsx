import React from "react";
import styles from "./Services.module.css";
import {
  ServicesList as content,
  type TServices,
} from "./Services.content";
import type { IHeadinxBox, ILang } from "../../data/Interfaces/IGeneral";
import { ServiceCard } from "../UI/ServiceCard/ServiceCard";
import { ArticleTitle } from "../UI/ArticleTitle/ArticleTitle";
import { HeadingServices } from "./Services.content";

export const Services: React.FC<ILang> = ({ lang }) => {
  const data: TServices[] = lang === "ru" ? content.en : content.ru;
  const text: IHeadinxBox = lang === "ru" ? HeadingServices.en : HeadingServices.ru

  return (
    <>
      <ArticleTitle text={text} />
      <div className={styles.services__wrapper}>
        {data.map((item, index) => (
          <ServiceCard key={index} data={item} />
        ))}
      </div>
    </>

  );
};
