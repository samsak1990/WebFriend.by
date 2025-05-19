import type { IGeneralContent } from "../Interfaces/IGeneral";
import Dev from "../../assets/Services/development.svg";
import Design from "../../assets/Services/design.svg";
import Site from "../../assets/Services/site.svg";

export type TServices = {
  type: string;
  svg: string;
  ditails: string[];
};

export const ServicesList: IGeneralContent<TServices[]> = {
  ru: [
    {
      type: "WEB-разработка",
      svg: Dev,
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
      svg: Site,
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
      svg: Design,
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
      svg: Dev,
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
      svg: Site,
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
      svg: Design,
      ditails: [
        "Landing page",
        "Web-apps",
        "Web-sites",
        "Infographics for marketplaces (cards)",
      ],
    },
  ],
};
