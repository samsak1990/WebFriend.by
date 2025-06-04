export interface IMenuList {
  ru: string;
  en: string;
  pathTo: string;
}

export const MENU_LIST: IMenuList[] = [
  {
    ru: "Главная",
    en: "Home",
    pathTo: "/",
  },
  {
    ru: "Услуги",
    en: "Services",
    pathTo: "/Services",
  },
  {
    ru: "Кто я?",
    en: "About",
    pathTo: "/About",
  },
  {
    ru: "Навыки",
    en: "Skills",
    pathTo: "/Skills",
  },
  {
    ru: "Портфолио",
    en: "Portfolio",
    pathTo: "/Portfolio",
  },
  {
    ru: "Блог",
    en: "Blog",
    pathTo: "/blog",
  },
  {
    ru: "Контакты",
    en: "Contacts",
    pathTo: "/Contacts",
  },
];
