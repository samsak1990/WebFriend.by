import React from 'react'
import s from './Post.module.css'

type TPostProps = ''

export const Post: React.FC<{ post: TPostProps }> = ({ post }) => {
    return (
        <div className={s.post}>
            <div className={s.post__image}>
                <img src="https://themebing.com/html/amike/assets/images/blog-1.jpg" alt="" />
            </div>
            <div className={s.post__content}>
                <p className={s.post__info}>
                    <span className={s.post__info_author}>admin</span>
                    <span className={s.post__info_date}>Tuesday</span>
                </p>
                <p className={s.post__title}>Ten Secrets You Will Not Want To Know</p>
                <p className={s.post__readMore}>
                    <button type="button">Read more</button>
                </p>
            </div>
        </div>
    )
}