export interface IGeneralContent<T> {
  ru: T;
  en: T;
}

export interface IHeadingBox {
  title: string;
  description?: string;
}

export type TLang = "ru" | "en";
