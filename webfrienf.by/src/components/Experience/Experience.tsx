import React from 'react'
import s from './Experience.module.css'
import type { TLang } from '../../data/Interfaces/IGeneral'
import { ExperienceOneBox } from '../UI/ExperienceOneBox/ExperienceOneBox'
import { DATA_BOX_EXPERIENCE as content } from './Experience.content'


export const Experience: React.FC<{ lang: TLang }> = ({ lang }) => {
    return (
        <div className={s.experienceBlock}>
            {content[lang].map((item) => (
                <ExperienceOneBox data={item} key={item.title} />
            ))}

        </div>
    )
}
