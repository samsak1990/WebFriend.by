import React from 'react'
import styles from './Main.module.css'
import { WrapperContent } from '../../components/UI/WrapperContent/WrapperContent'

export const Main: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <WrapperContent>
                <h1>Hello</h1>
            </WrapperContent>
        </div>
    )
}
