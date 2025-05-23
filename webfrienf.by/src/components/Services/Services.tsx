import React from "react";
import styles from "./Services.module.css";
import { ServicesList as content, type TServices } from "./Services.content";
import type { IHeadingBox, TLang } from "../../data/Interfaces/IGeneral";
import { ServiceCard } from "../UI/ServiceCard/ServiceCard";
import { ArticleTitle } from "../UI/ArticleTitle/ArticleTitle";
import { HeadingServices } from "./Services.content";

export const Services: React.FC<{ lang: TLang }> = ({ lang }) => {
  const data: TServices[] = content[lang];
  const text: IHeadingBox = HeadingServices[lang];

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
