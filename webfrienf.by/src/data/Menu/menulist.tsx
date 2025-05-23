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
    pathTo: "/1",
  },
  {
    ru: "Кто я?",
    en: "About",
    pathTo: "/2",
  },
  {
    ru: "Навыки",
    en: "Skills",
    pathTo: "/3",
  },
  {
    ru: "Портфолио",
    en: "Portfolio",
    pathTo: "/4",
  },
  {
    ru: "Блог",
    en: "Blog",
    pathTo: "/blog",
  },
  {
    ru: "Контакты",
    en: "Contacts",
    pathTo: "/5",
  },
];
