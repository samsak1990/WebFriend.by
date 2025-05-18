import React from "react"
import { Main } from "./pages/Main/Main"
import { LanguageProvider } from "./data/Context/ProviderLang"


export const App: React.FC = () => {
  return (
    <>
      <LanguageProvider>
        <Main />
      </LanguageProvider>
    </>
  )
}

