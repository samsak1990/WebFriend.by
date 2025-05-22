import React, { useContext } from "react";
import styles from "./Header.module.css";
import { Menu } from "../UI/Menu/Menu";
import { Logo } from "../UI/Logo/Logo";
import { LanguageContext } from "../../data/Context/ContextLang";

export const Header: React.FC = () => {
  const context = useContext(LanguageContext);
  const { lang, setLang } = context;
  const iconLang: { class: string; title: string } =
    lang === "ru"
      ? { class: styles["header__lang-ru"], title: "Change language" }
      : { class: styles["header__lang-en"], title: "Сменить язык" };

  return (
    <header className={styles.header}>
      <Logo />
      <div className={styles.header__boxMenu}>
        <Menu />
        <button
          title={iconLang.title}
          className={[styles.header__lang, iconLang.class].join(" ")}
          onClick={() => setLang(lang === "ru" ? "en" : "ru")}
        ></button>
      </div>
    </header>
  );
};
