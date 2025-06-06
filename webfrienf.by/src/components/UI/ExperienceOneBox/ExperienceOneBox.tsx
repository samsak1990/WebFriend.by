import React from 'react'
import type { TExperienceContent } from '../../Experience/Experience.content'
import s from './ExperienceOneBox.module.css'

type TExperienceOneBoxProps = {
    data: TExperienceContent
}

export const ExperienceOneBox: React.FC<TExperienceOneBoxProps> = ({ data }) => {
    return (
        <div className={s.experienceBox}>
            <img src={data.image} alt={data.title} />
            <p>{data.count}</p>
            <h3>{data.title}</h3>
        </div>
    )
}
