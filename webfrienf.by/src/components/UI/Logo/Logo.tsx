import React from 'react'
import styles from './Logo.module.css'
import imageLogo from '../../../assets/logo&Text.png'
// import imageLogo from '../../../assets/logo_3d.png'
import { NavLink } from 'react-router'

export const Logo: React.FC = () => {
    return (
        <div>
            <NavLink to='/' className={styles.logo__link}><img loading="lazy" src={imageLogo} alt="Web-friend.by" className={styles.logo} /></NavLink>
        </div>
    )
}
