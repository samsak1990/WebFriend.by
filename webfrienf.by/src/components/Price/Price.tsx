import React from 'react'
import type { TLang } from '../../data/Interfaces/IGeneral'
import s from './Price.module.css'
import { ArticleTitle } from '../UI/ArticleTitle/ArticleTitle'

export const Price: React.FC<{ lang: TLang }> = ({ lang }) => {
    return (
        <div className={s.priceBlock}>
            <ArticleTitle text={{ title: 'Price' }} />
        </div>
    )
}
