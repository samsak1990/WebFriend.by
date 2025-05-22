import React from 'react'
import type { TLang } from '../../data/Interfaces/IGeneral'
import { ArticleTitle } from '../UI/ArticleTitle/ArticleTitle'
import { ABOUT_CONTENT, HeadingAbout } from './About.content'
import s from './About.module.css'
import Photo from '../../assets/about_photo.png'


export const About: React.FC<{ lang: TLang }> = ({ lang }) => {
    const content = lang === 'ru' ? ABOUT_CONTENT.ru : ABOUT_CONTENT.en
    return (
        <section className={s.about}>
            <ArticleTitle text={HeadingAbout[lang]} />
            <div className={s.about__photo}>
                <img src={Photo} alt="" />
            </div>
            <div className={s.about__text}>{content.text}</div>
        </section>
    )
}
