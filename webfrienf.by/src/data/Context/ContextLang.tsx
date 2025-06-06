import { createContext } from "react";
import type { TLang } from "../Interfaces/IGeneral";

interface ILanguageContext {
  lang: TLang;
  setLang: (lang: TLang) => void;
}

export const LanguageContext = createContext<ILanguageContext>({
  lang: "en",
  setLang: () => { },
});
