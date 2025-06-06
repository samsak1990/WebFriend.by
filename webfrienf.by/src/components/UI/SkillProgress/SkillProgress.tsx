import React from 'react'
import s from './SkillProgress.module.css'


interface ISkillProgressProps {
    tech: string;
    value: number;
}

export const SkillProgress: React.FC<ISkillProgressProps> = React.memo(({ tech, value }) => {
    return (
        <li className={s.skill} aria-label={`Level of ${tech} skill: ${value}%`}>
            <span className={s.skill__name}>{tech}</span>
            <span className={`${s.tech__icon} ${s[tech]}`}></span>
            <span className={s.skill__per} style={{ left: `${value}%` }}>{value}%</span>
            <div className={s.skill__progress}>
                <div className={s.progress__value} style={{ width: `${value}%` }}></div>
            </div>
        </li>
    )
})
