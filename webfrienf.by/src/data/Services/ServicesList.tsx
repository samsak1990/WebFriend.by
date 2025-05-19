import type { IGeneralContent } from "../Interfaces/IGeneral";
import Dev from "../../assets/Services/development.svg";
import Design from "../../assets/Services/design.svg";
import Site from "../../assets/Services/site.svg";

export type TServices = {
  type: string;
  img: string;
  ditails: string[];
};

export const ServicesList: IGeneralContent<TServices[]> = {
  ru: [
    {
      type: "WEB-разработка",
      img: Dev,
      ditails: [
        "HTML & CSS",
        "JavaScript",
        "TypeScript",
        "React & Redux",
        "GIT",
        "Figma",
      ],
    },
    {
      type: "Сайты",
      img: Site,
      ditails: [
        "Лэндинг",
        "Портфолио",
        "Интернет-магазин",
        "Сайт-визитка",
        "Тематические сайты",
        "Figma",
      ],
    },
    {
      type: "UX/UI Дизайн",
      img: Design,
      ditails: [
        "Лэндинги",
        "Веб-приложения",
        "Сайты",
        "Инфографика для маркетплейсов (карточки)",
      ],
    },
  ],
  en: [
    {
      type: "Developing",
      img: Dev,
      ditails: [
        "HTML & CSS",
        "JavaScript",
        "TypeScript",
        "React & Redux",
        "GIT",
        "Figma",
      ],
    },
    {
      type: "Web-sites",
      img: Site,
      ditails: [
        "Langing",
        "Portfolio",
        "Online store",
        "Business card website",
        "Thematic sites",
      ],
    },
    {
      type: "UX/UI Design",
      img: Design,
      ditails: [
        "Landing page",
        "Web-apps",
        "Web-sites",
        "Infographics for marketplaces (cards)",
      ],
    },
  ],
};
