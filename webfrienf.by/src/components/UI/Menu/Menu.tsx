import React, { useContext } from 'react'
import styles from './Menu.module.css'
import { MENU_LIST } from '../../../data/Menu/menulist'
import { NavLink } from 'react-router-dom'
import { LanguageContext } from '../../../data/Context/ContextLang'

export const Menu: React.FC = () => {
    const lang = useContext(LanguageContext)
    return (
        <menu className={styles.header__menu}>
            {MENU_LIST.map((link, index) => (
                <li key={index}>
                    <NavLink to={link.pathTo} className={({ isActive }) => isActive ? styles['active'] : ""}>
                        {lang?.lang == 'ru' ? link.nameEn : link.nameRu}
                    </NavLink>
                </li>
            ))}
        </menu>
    )
}
