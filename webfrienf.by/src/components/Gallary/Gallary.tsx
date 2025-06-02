import React from 'react'
import s from './Gallary.module.css'
import type { TLang } from '../../data/Interfaces/IGeneral'
import { HeadingGallary, GALLARY_PHOTOS as photos } from './Gallary.content'
import { ArticleTitle } from '../UI/ArticleTitle/ArticleTitle'



export const Gallary: React.FC<{ lang: TLang }> = ({ lang }) => {
    return (
        <section className={s.gallary}>
            <ArticleTitle text={HeadingGallary[lang]} />
            <div className={s.gallary__box}>
                {photos.map((photo, index) => (
                    <div className={`${s['div' + index + 1]} ${s.box__photo}`} key={index + photo.name}>
                        <img src={photo.photo} alt={photo.name} />
                    </div>
                ))}

            </div>
        </section>
    )
}
