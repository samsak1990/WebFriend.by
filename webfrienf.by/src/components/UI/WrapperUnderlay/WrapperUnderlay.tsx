import React, { type ReactNode } from 'react'
import style from './WrapperUnderlay.module.css'

interface IChildren {
    children: ReactNode
}

export const WrapperUnderlay: React.FC<IChildren> = ({ children }) => {
    return (
        <div className={style.wrapper__underlay}>
            {children}
        </div>
    )
}
