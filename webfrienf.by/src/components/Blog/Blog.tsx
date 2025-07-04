import React from 'react'
import s from './Blog.module.css'
import { BLOG_HEADING } from './Blog.content'
import { ArticleTitle } from '../UI/ArticleTitle/ArticleTitle'
import type { TLang } from '../../data/Interfaces/IGeneral'
import { Post } from '../UI/Post/Post'
import { Link } from 'react-router-dom'

export const Blog: React.FC<{ lang: TLang }> = ({ lang }) => {
    const head = BLOG_HEADING[lang]
    return (
        <section className={s.blog}>
            <ArticleTitle text={head} />
            <div className={s.blog__wrapper}>
                <Post post='' />
                <Post post='' />
                <Post post='' />
            </div>
            <Link to='/blog' style={{ color: 'inherit' }}>
                <button className={s.blog__btnShowAll}>{lang === 'ru' ? 'Смотреть все' : 'Show all'}</button>
            </Link>
        </section>
    )
}