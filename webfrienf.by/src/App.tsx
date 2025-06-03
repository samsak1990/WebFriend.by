import React from "react";
import { Main } from "./pages/Main/Main";
import { LanguageProvider } from "./data/Context/ProviderLang";
import { store } from './app/store'
import { Provider } from 'react-redux'

export const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <LanguageProvider>
          <Main />
        </LanguageProvider>
      </Provider>

    </>
  );
};
