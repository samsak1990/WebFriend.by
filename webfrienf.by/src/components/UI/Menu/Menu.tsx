import React, { useContext } from "react";
import styles from "./Menu.module.css";
import { NavLink } from "react-router-dom";
import { LanguageContext } from "../../../data/Context/ContextLang";
import { MENU_LIST } from "../../../data/Menu/MenuList";
import { NavHashLink } from 'react-router-hash-link';

export const Menu: React.FC = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <menu className={styles.header__menu}>
      {MENU_LIST.map((link, index) => (
        <li key={index}>
          <NavLink
            to={link.pathTo}
            className={({ isActive }) => (isActive ? styles["active"] : "")}
          >
            {link[lang]}
          </NavLink>
          {/* <NavHashLink smooth
            to={`/${link.pathTo}`}
            activeClassName={styles.active}>
            {link[lang]}
          </NavHashLink> */}
        </li>
      ))}
    </menu>
  );
};
