import React, { useContext } from "react";
import { WrapperUnderlay } from "../../components/UI/WrapperUnderlay/WrapperUnderlay";
import { WrapperContent } from "../../components/UI/WrapperContent/WrapperContent";
import { HelloBox } from "../../components/HelloBox/HelloBox";
import { Services } from "../../components/Services/Services";
import { LanguageContext } from "../../data/Context/ContextLang";
import { About } from "../../components/About/About";
import { Skills } from "../../components/Skills/Skills";
import { Gallary } from "../../components/Gallary/Gallary";

import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { ViewProject } from "../../components/UI/ViewProject/ViewProject";
import { Price } from "../../components/Price/Price";
import { Experience } from "../../components/Experience/Experience";
import { Feedbacks } from "../../components/Feedbacks/Feedbacks";

export const General: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const showProject = useSelector((state: RootState) => state.project.projectName)

  return (
    <>
      {showProject && <ViewProject />}
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
      <WrapperContent>
        <Skills lang={lang} />
      </WrapperContent>
      <WrapperUnderlay>
        <WrapperContent>
          <Gallary lang={lang} />
        </WrapperContent>
      </WrapperUnderlay>
      <WrapperContent>
        <Price lang={lang} />
      </WrapperContent>
      <WrapperUnderlay>
        <WrapperContent>
          <Experience lang={lang} />
        </WrapperContent>
      </WrapperUnderlay>
      <WrapperContent>
        <Feedbacks lang={lang} />
      </WrapperContent>
    </>
  );
};
