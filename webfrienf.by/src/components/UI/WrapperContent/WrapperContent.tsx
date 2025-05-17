import React, { type ReactNode } from 'react'
import style from './WrapperContent.module.css'

interface IChildren {
    children: ReactNode
}

export const WrapperContent: React.FC<IChildren> = ({ children }) => {
    return (
        <div className={style.wrapper__content}>
            {children}
        </div>
    )
}
