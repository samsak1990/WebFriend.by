import { useEffect, useMemo, useState, type ReactNode } from "react";
import { LanguageContext } from "./ContextLang";
import type { TLang } from "../Interfaces/IGeneral";

interface ILangProps {
    children: ReactNode
}

export const LanguageProvider = ({ children }: ILangProps) => {
    const [lang, setLang] = useState<TLang>(localStorage.getItem('lang') as TLang || 'en')

    const memoLang = useMemo(() => ({ lang, setLang }), [lang])

    useEffect(() => {
        localStorage.setItem('lang', lang)
    }, [lang])

    return (
        <LanguageContext.Provider value={memoLang}>
            {children}
        </LanguageContext.Provider>
    )
}