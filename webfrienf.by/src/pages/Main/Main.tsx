import React from 'react'
import styles from './Main.module.css'
import { WrapperContent } from '../../components/UI/WrapperContent/WrapperContent'
import { Header } from '../../components/Header/Header'
import { Outlet } from 'react-router'

export const Main: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <WrapperContent>
                <Header />
                <Outlet />
            </WrapperContent>
        </div>
    )
}
