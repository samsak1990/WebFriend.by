import React, { useState } from 'react'
import type { TLang } from '../../data/Interfaces/IGeneral'
import s from './Price.module.css'
import { ArticleTitle } from '../UI/ArticleTitle/ArticleTitle'
import { PRICE_MAIN_SERVICES } from './Price.content'
import { PRICE_HEADING as head } from './Price.content'
import { SiteCard } from '../UI/SiteCard/SiteCArd'

export const Price: React.FC<{ lang: TLang }> = ({ lang }) => {
    const listSites = PRICE_MAIN_SERVICES[lang]
    const [offset, setOffset] = useState(0)

    const handleArrowClick = (direction: 'left' | 'right') => {
        const cardWidth = 320; // Assuming each card has a fixed width of 300px
        const maxOffset = (listSites.length - 4) * cardWidth; // Adjust based on the number of cards visible
        if (direction === 'left') {
            setOffset(prev => Math.max(prev - cardWidth, 0));
        } else {
            setOffset(prev => Math.min(prev + cardWidth, maxOffset));
        }
    }

    return (
        <>
            <ArticleTitle text={head[lang]} />
            <div className={s.carousel__wrapper}>
                <div className={s.carousel__cards} style={
                    { transform: `translateX(-${offset}px)` }
                }>
                    {listSites.map((site, index) => (
                        <SiteCard key={index} content={site} />))}
                </div>
            </div>
            <span className={`${s.carousel__arrow} ${s.carousel__arrow_left}`} onClick={() => handleArrowClick('left')}></span>
            <span className={`${s.carousel__arrow} ${s.carousel__arrow_right}`} onClick={() => handleArrowClick('right')}></span >
        </>

    )
}
