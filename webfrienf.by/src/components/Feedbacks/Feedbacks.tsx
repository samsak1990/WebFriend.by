import React from 'react'
import s from './Feedbacks.module.css'
import { FEEDBACKS_CONTENT } from './Feedbacks.content'
import type { TLang } from '../../data/Interfaces/IGeneral'
import { FeedbackCard } from '../UI/FeedbackCard/FeedbackCard'

export const Feedbacks: React.FC<{ lang: TLang }> = ({ lang }) => {
    const { header, text } = FEEDBACKS_CONTENT[lang]
    const feedback = ''
    return (
        <section className={s.feedbacks}>
            <div className={s.feedbacks__heading}>
                <h2>{header}</h2>
                <p>{text}</p>
            </div>
            <div className={s.feedbacks__users}>
                <FeedbackCard feedback={feedback} />
                <div className={s.feedbacks__controls}>
                    <span className={`${s.feedbacks__controls_btn} ${s.btn__left}`} role='button'></span>
                    <span className={`${s.feedbacks__controls_btn} ${s.btn__right}`} role='button'></span>
                </div>

            </div>
        </section>
    );
}

Feedbacks.displayName = 'Feedbacks'