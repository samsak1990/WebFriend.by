import { useEffect, useState, type ReactNode } from "react";
import { LanguageContext } from "./ContextLang";

interface ILangProps {
    children: ReactNode
}

export const LanguageProvider = ({ children }: ILangProps) => {
    const [lang, setLang] = useState<string>(localStorage.getItem('lang') || 'en')

    useEffect(() => {
        localStorage.setItem('lang', lang)
    }, [lang])

    return (
        <LanguageContext.Provider value={{ lang, setLang }}>
            {children}
        </LanguageContext.Provider>
    )
}