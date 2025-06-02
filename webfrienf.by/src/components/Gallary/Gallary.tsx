import React, { useState } from 'react'
import s from './Gallary.module.css'
import type { TLang } from '../../data/Interfaces/IGeneral'
import { HeadingGallary, GALLARY_PHOTOS as photos } from './Gallary.content'
import { ArticleTitle } from '../UI/ArticleTitle/ArticleTitle'
import { ProjectBox } from '../UI/ProjectBox/ProjectBox'



export const Gallary: React.FC<{ lang: TLang }> = ({ lang }) => {
    const [isOpenImg, setIsOpenImg] = useState<boolean>(false)

    return (
        <section className={s.gallary}>
            <ArticleTitle text={HeadingGallary[lang]} />
            <div className={s.gallary__box}>
                {photos.map((photo, index) => (
                    <ProjectBox key={index} photo={photo} index={index} openImg={{ isOpenImg, setIsOpenImg }} />
                ))}

            </div>
        </section>
    )
}
