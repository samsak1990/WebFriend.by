import React, { useContext } from "react";
import { WrapperUnderlay } from "../../components/UI/WrapperUnderlay/WrapperUnderlay";
import { WrapperContent } from "../../components/UI/WrapperContent/WrapperContent";
import { HelloBox } from "../../components/HelloBox/HelloBox";
import { Services } from "../../components/Services/Services";
import { LanguageContext } from "../../data/Context/ContextLang";
import { About } from "../../components/About/About";

export const General: React.FC = () => {
  const context = useContext(LanguageContext);
  if (!context) return null;
  const { lang } = context;

  return (
    <>
      <WrapperUnderlay>
        <WrapperContent>
          <HelloBox lang={lang} />
        </WrapperContent>
      </WrapperUnderlay>
      <WrapperContent>
        <Services lang={lang} />
      </WrapperContent>
      <WrapperUnderlay>
        <WrapperContent>
          <About lang={lang} />
        </WrapperContent>
      </WrapperUnderlay>
    </>
  );
};
