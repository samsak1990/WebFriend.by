import React, { useState } from 'react'
import s from './Carousel.module.css'
import type { IPriceContent } from '../../Price/Price.content';
import type { TContentSiteCards } from '../SiteCard/SiteCArd';

interface ICarouselProps {
    listData: IPriceContent[]; // Замените 'any' на тип данных, который вы будете использовать
    cardWidth: number;
    renderCard: (item: IPriceContent) => JSX.Element; // Замените 'any' на тип данных, который вы будете использовать
}

export const Carousel: React.FC<ICarouselProps> = ({ listData, cardWidth, renderCard }) => {
    const [offset, setOffset] = useState(cardWidth);

    const handleArrowClick = (direction: 'left' | 'right') => {
        const maxOffset = (listData.length - 4) * cardWidth; // Adjust based on the number of cards visible
        if (direction === 'left') {
            setOffset(prev => Math.max(prev - cardWidth, 0));
        } else {
            setOffset(prev => Math.min(prev + cardWidth, maxOffset));
        }
    };

    return (
        <>
            <section className={s.carousel}>
                <div className={s.carousel__wrapper}>
                    <div className={s.carousel__cards} style={{ transform: `translateX(-${offset}px)` }}>
                        {listData.map((item) => renderCard(item))}
                    </div>
                </div>
                <span className={`${s.carousel__arrow} ${s.carousel__arrow_left}`} onClick={() => handleArrowClick('left')}></span>
                <span className={`${s.carousel__arrow} ${s.carousel__arrow_right}`} onClick={() => handleArrowClick('right')}></span>
            </section>
        </>
    );
};