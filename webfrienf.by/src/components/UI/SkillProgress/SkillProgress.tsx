import React from 'react'
import s from './SkillProgress.module.css'

interface ISkillProgressProps {
    tech: string;
    value: number;
}

export const SkillProgress: React.FC<ISkillProgressProps> = ({ tech, value }) => {
    return (
        <li className={s.skill}>
            <span className={s.skill__name}>{tech}</span>
            <span className={s.skill__per} style={{ left: `${value}%` }}>{value}%</span>
            <div className={s.skill__progress}>
                <div className={s.progress__value} style={{width: `${value}%`}}></div>
            </div>
        </li>
    )
}
