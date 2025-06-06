import React, { useState } from 'react'
import s from './Carousel.module.css'
import type { IPriceContent } from '../../Price/Price.content';

interface ICarouselProps {
    listData: IPriceContent[]; // Замените 'any' на тип данных, который вы будете использовать
    cardWidth: number;
    renderCard: (item: IPriceContent) => JSX.Element; // Замените 'any' на тип данных, который вы будете использовать
}

export const Carousel: React.FC<ICarouselProps> = ({ listData, cardWidth, renderCard }) => {
    const [offset, setOffset] = useState(0);

    const handleArrowClick = (direction: 'left' | 'right') => {
        const visibleCards = 4;
        const maxOffset = (listData.length - visibleCards) * cardWidth; // Adjust based on the number of cards visible
        if (direction === 'left' && offset > 0) {
            setOffset(prev => prev - cardWidth);
        } else if (direction === 'right' && offset < maxOffset) {
            setOffset(prev => prev + cardWidth);
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