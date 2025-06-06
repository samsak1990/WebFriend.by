import React from 'react'
import styles from './Socials.module.css'
import type { ISocials } from '../../../data/Socials/Socials'
import { NavLink } from 'react-router-dom'

interface ISocialProp {
    data: ISocials
}

export const Social: React.FC<ISocialProp> = ({ data }) => {
    return (
        <div className={styles.socialLink}>
            <NavLink to={data.http}><img loading="lazy" src={data.image} alt={data.name} title={data.name} /></NavLink>
        </div>
    )
}
