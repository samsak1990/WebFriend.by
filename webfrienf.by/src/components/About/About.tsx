import React from "react";
import s from "./About.module.css";
import Photo from "../../assets/about_photo.png";
import { ArticleTitle } from "../UI/ArticleTitle/ArticleTitle";
import {
    ABOUT_CONTENT,
    HeadingAbout,
    type TKeyOfContact,
} from "./About.content";
import { AboutContactBox } from "../UI/AboutContactBox/AboutContactBox";
import { generalContacts } from "./About.content";
import type { TLang } from "../../data/Interfaces/IGeneral";

export const About: React.FC<{ lang: TLang }> = ({ lang }) => {
    const content = ABOUT_CONTENT[lang];
    const kindOfContacts: TKeyOfContact[] = Object.keys(
        generalContacts
    ) as TKeyOfContact[];

    return (
        <section className={s.about}>
            <ArticleTitle text={HeadingAbout[lang]} />
            <div className={s.about__content}>
                <div className={s.about__photo}>
                    <img src={Photo} alt="Здесь должен был быть я:)" />
                </div>
                <div className={s.about__text}>
                    <div className={s.about__intro}>{content.text}</div>
                    <div className={s.about__contacts} data-copy='copy' >
                        {
                            kindOfContacts.map((contact) => {
                                if (contact != "name")
                                    return <AboutContactBox contact={contact} key={contact} />;
                            })
                        }
                    </div>
                </div>
            </div>
        </section >
    );
};
