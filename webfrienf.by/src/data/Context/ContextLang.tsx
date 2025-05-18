import { createContext } from "react";

interface ILanguageContext {
    lang: string;
    setLang: (lang: string) => void
}

export const LanguageContext = createContext<ILanguageContext | null>(null)