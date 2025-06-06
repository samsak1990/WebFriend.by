import React from 'react'
import s from './Gallary.module.css'
import type { TLang } from '../../data/Interfaces/IGeneral'
import { HeadingGallary, GALLARY_PHOTOS as photos } from './Gallary.content'
import { ArticleTitle } from '../UI/ArticleTitle/ArticleTitle'
import { ProjectBox } from '../UI/ProjectBox/ProjectBox'

export const Gallary: React.FC<{ lang: TLang }> = ({ lang }) => {


    return (
        <section className={s.gallary} aria-label="Project Photo Gallery">
            <ArticleTitle text={HeadingGallary[lang]} />
            <div className={s.gallary__box}>
                {photos.map((photo, index) => (
                    <ProjectBox key={photo.id} photo={photo} index={index}/>
                ))}

            </div>
        </section>
    )
}
