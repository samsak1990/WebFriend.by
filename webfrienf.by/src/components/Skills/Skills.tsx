import React from 'react'
import s from './Skills.module.css'
import type { TLang } from '../../data/Interfaces/IGeneral'
import { SKILLS_CONTENT as content } from './Skills.content'
import { SKILLS_LEVEL as level } from './Skills.content'


export const Skills: React.FC<{ lang: TLang }> = ({ lang }) => {
    const data = content[lang]
    return (
        <section className={s.skills}>
            <div className={s.skills__text}>
                <h2>{data.h2}</h2>
                <p>{data.p}</p>
            </div>
            <div className={s.skills__lavel}>
                
            </div>
            <div></div>

        </section>
    )
}
