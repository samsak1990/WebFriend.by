import React from 'react'
import styles from './ArticleTitle.module.css'
import type { IHeadinxBox } from '../../../data/Interfaces/IGeneral'

type TArticleTitle = {
    text: IHeadinxBox
}

export const ArticleTitle: React.FC<TArticleTitle> = ({ text }) => {
    return (
        <div style={{ textAlign: 'center', marginBottom: '70px', marginTop: '50px' }}>
            <h2 className={styles.article__title}>
                {text.title}
            </h2>
            <p className={styles.article__description}>{text.description}</p>
        </div>

    )
}
