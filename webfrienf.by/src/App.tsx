import React from "react";
import { Main } from "./pages/Main/Main";
import { LanguageProvider } from "./data/Context/ProviderLang";
import { store } from './app/store'
import { Provider } from 'react-redux'
import { useScroll, motion } from "framer-motion";

export const App: React.FC = () => {
  const { scrollYProgress } = useScroll()
  return (
    <>
      <Provider store={store}>
        <LanguageProvider>
          <motion.div
            id="scroll-indicator"
            style={{
              scaleX: scrollYProgress,
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: 10,
              originX: 0,
              backgroundColor: "#a13531",
              zIndex: 10000,
            }}
          />
          <Main />
        </LanguageProvider>
      </Provider>

    </>
  );
};
