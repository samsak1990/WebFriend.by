import React from 'react'
import styles from './Header.module.css'
import { Menu } from '../UI/Menu/Menu'
import { Logo } from '../UI/Logo/Logo'

export const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <Logo />
            <Menu />
        </header>
    )
}
