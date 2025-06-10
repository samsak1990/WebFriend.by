import React from 'react'
import s from './Blog.module.css'
import { BLOG_HEADING } from './Blog.content'
import { ArticleTitle } from '../UI/ArticleTitle/ArticleTitle'
import type { TLang } from '../../data/Interfaces/IGeneral'

export const Blog: React.FC<{ lang: TLang }> = ({ lang }) => {
    const head = BLOG_HEADING[lang]
    return (
        <section className={s.blog}>
            <ArticleTitle text={head} />
            {/* Component's boby */}
        </section>
    )
}