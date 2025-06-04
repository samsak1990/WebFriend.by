import React from 'react'
import s from './SiteCard.module.css'
import type { IPriceContent } from '../../Price/Price.content'

type TContentSiteCars = {
    content: IPriceContent
}

export const SiteCard: React.FC<TContentSiteCars> = ({ content }) => {
    return (
        <div className={content.top ? `${s.siteCard} ${s.top}` : s.siteCard}>
            <h2 className={s.siteCard__heading}>{content.name}</h2>
            <h3 className={s.siteCard__price}>от <span>{content.priceMin}</span>руб.</h3>
            <ul className={s.siteCard__includeList}>
                {content.include.map((service, index) => (
                    <li key={service + index}>{service}</li>
                ))}
            </ul>
        </div>
    )
}
