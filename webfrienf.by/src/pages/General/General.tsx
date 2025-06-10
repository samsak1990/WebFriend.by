import React, { useContext } from "react";
import { WrapperUnderlay } from "../../components/UI/WrapperUnderlay/WrapperUnderlay";
import { WrapperContent } from "../../components/UI/WrapperContent/WrapperContent";
import { LanguageContext } from "../../data/Context/ContextLang";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { ViewProject } from "../../components/UI/ViewProject/ViewProject";
import { AppStructure } from "../../data/APP_STRUCTURE/APP_STRUCTURE";


export const General: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  const showProject = useSelector((state: RootState) => state.project.projectName)
  const listComponents = AppStructure

  return (
    <>
      {showProject && <ViewProject />}
      {listComponents.map((Component, index) => {
        if (index % 2 === 0) {
          return (
            <WrapperUnderlay key={index}>
              <WrapperContent>
                <Component lang={lang} />
              </WrapperContent>
            </WrapperUnderlay>
          )
        }
        return (
          <WrapperContent key={index}>
            <Component lang={lang} />
          </WrapperContent>
        )
      }
      )}
    </>
  );
};
