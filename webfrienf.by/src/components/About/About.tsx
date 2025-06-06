import React, { memo, useState } from "react";
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

interface AboutProps {
    lang: TLang;
}

interface ImageErrorState {
    hasError: boolean;
    errorMessage: string;
}

export const About: React.FC<AboutProps> = memo(({ lang }) => {
    const [imageError, setImageError] = useState<ImageErrorState>({
        hasError: false,
        errorMessage: "",
    });

    const content = ABOUT_CONTENT[lang];
    const kindOfContacts: TKeyOfContact[] = Object.keys(
        generalContacts
    ).filter((contact): contact is TKeyOfContact => contact !== "name");

    const handleImageError = () => {
        setImageError({
            hasError: true,
            errorMessage: "Failed to load profile image",
        });
    };

    return (
        <section className={s.about} aria-label="About section">
            <ArticleTitle text={HeadingAbout[lang]} />
            <div className={s.about__content}>
                <div className={s.about__photo}>
                    {imageError.hasError ? (
                        <div className={s.about__photo_error} role="alert">
                            {imageError.errorMessage}
                        </div>
                    ) : (
                        <img
                            src={Photo}
                            alt="Profile photo"
                            onError={handleImageError}
                            loading="lazy"
                            width={300}
                            height={300}
                        />
                    )}
                </div>
                <div className={s.about__text}>
                    <div className={s.about__intro}>{content.text}</div>
                    <div
                        className={s.about__contacts}
                        data-copy="copy"
                        role="list"
                        aria-label="Contact information"
                    >
                        {kindOfContacts.map((contact) => (
                            <AboutContactBox
                                key={contact}
                                contact={contact}
                                lang={lang}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
});

About.displayName = "About";
