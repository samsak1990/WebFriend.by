import React from "react";
import s from "./AboutContactBox.module.css";
import { generalContacts, type TKeyOfContact } from "../../About/About.content";

type TAboutContactBoxProps = {
  contact: TKeyOfContact;
};

export const AboutContactBox: React.FC<TAboutContactBoxProps> = ({
  contact,
}) => {
  return (
    <div className={s.contactBox} data-social={contact}>
      {generalContacts[contact]}
    </div>
  );
};
