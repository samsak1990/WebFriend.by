import type { IGeneralContent, IHeadingBox } from "../../data/Interfaces/IGeneral";
import Dev from "../../assets/Services/development.svg";
import Design from "../../assets/Services/design.svg";
import Site from "../../assets/Services/site.svg";

export type TServices = {
  type: string;
  img: string;
  ditails: string[];
};


export const HeadingServices: IGeneralContent<IHeadingBox> = {
  ru: {
    title: 'Мои услуги',
    description: 'Создаю веб-решения, которые работают на вас! Разработка современных веб-приложений, стильных сайтов, подбор дизайна и инфографики для маркетплейсов — всё, чтобы выделить ваш бизнес и привлечь клиентов. Работаю до тех пор, пока Вы не останитесь довольны! Хотите яркий и функциональный проект? Давате обсудим!'
  },
  en: {
    title: 'Services',
    description: 'I create web solutions that work for you! Developing modern web applications, stylish websites, design selection, and infographics for marketplaces—everything to make your business stand out and attract clients. I work until you’re fully satisfied! Want a bright and functional project? Let’s discuss it!'
  }
}

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
