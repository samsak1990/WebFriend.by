import React, { useState } from 'react'
import s from './Feedbacks.module.css'
import { FEEDBACKS_CONTENT } from './Feedbacks.content'
import type { TLang } from '../../data/Interfaces/IGeneral'
import { FeedbackCard, type IFeedback } from '../UI/FeedbackCard/FeedbackCard'
import { useFetchFeedbacks } from '../../Hooks/Feedback/useFetchFeedbacks'
import noAvatar from "../../assets/error_img.png"


const DEFAULT_FEEDBACK: IFeedback = {
    id: "",
    username: "Loading...",
    avatar: noAvatar,
    comment: "Loading feedback...",
    siteType: "Loading site name...",
};



export const Feedbacks: React.FC<{ lang: TLang }> = ({ lang }) => {
    const { header, text } = FEEDBACKS_CONTENT[lang]
    const [currentFeedback, setCurrentFeedback] = useState<number>(1)
    const { feedback, length, loading, error } = useFetchFeedbacks(currentFeedback)

    const feedbackData = loading
        ? { ...DEFAULT_FEEDBACK, username: "Loading username...", comment: "Loading feedback...", siteType: "Loading site name..." }
        : error
            ? { ...DEFAULT_FEEDBACK, username: "Error...", comment: "Error...", siteType: "Error..." }
            : feedback ?? DEFAULT_FEEDBACK;

    const handlerChangeFeedback = (step: 'decrement' | 'increment') => {
        setCurrentFeedback(prev => {
            if (step === 'decrement') {
                return prev > 1 ? prev - 1 : length ?? 1;
            } else {
                return length && prev + 1 <= length ? prev + 1 : 1;
            }
        });
    }

    return (
        <section className={s.feedbacks}>
            <div className={s.feedbacks__heading}>
                <h2>{header}</h2>
                <p>{text}</p>
            </div>
            <div className={s.feedbacks__users}>

                    <FeedbackCard feedbackData={feedbackData} />

                <div className={s.feedbacks__controls}>
                    <span className={`${s.feedbacks__controls_btn} ${s.btn__left}`} role='button' onClick={() => handlerChangeFeedback('decrement')}></span>
                    <span className={`${s.feedbacks__controls_btn} ${s.btn__right}`} role='button' onClick={() => handlerChangeFeedback('increment')}></span>
                </div>

            </div>
        </section>
    );
}

Feedbacks.displayName = 'Feedbacks'