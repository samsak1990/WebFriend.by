import React, { useRef } from "react";
import s from "./AboutContactBox.module.css";
import { generalContacts, type TKeyOfContact } from "../../About/About.content";
import handleCopyToClipboard from "../../../features/clipBoard";

type TAboutContactBoxProps = {
  contact: TKeyOfContact;
};

export const AboutContactBox: React.FC<TAboutContactBoxProps> = React.memo(({
  contact
}) => {
  const spanElemCopy = useRef<HTMLSpanElement>(null)

  return (
    <div className={s.contact__box} data-social='toCopy'>
      <span ref={spanElemCopy} className={s.contact__copy} title="Copy" onClick={() => handleCopyToClipboard({ contact: generalContacts[contact], element: spanElemCopy.current, className: s.copy_wellDone })}> </span>
      <span className={s.contact__label}>{contact}:</span>
      {generalContacts[contact]}
    </div >
  );
});
