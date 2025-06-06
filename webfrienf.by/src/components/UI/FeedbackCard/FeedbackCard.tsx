import React from 'react'
import s from './FeedbackCard.module.css'

type TFeedbackCard = {
    feedback: string;
}

export const FeedbackCard: React.FC<TFeedbackCard> = ({ feedback }) => {
    return (
        <div className={s.feedbackCard}>
            <div className={s.feedbackCard__content}>
                <p className={s.feedbackCard__text}>"{`This is a sample feedback text. It can be replaced with actual user feedback.`}"</p>
            </div>
            <div className={s.feedbackCard__user}>
                <img className={s.feedbackCard__userAvatar} src="https://avatars.mds.yandex.net/i?id=a1408a6eb51b3cebdf76032a37d9d293_l-5348499-images-thumbs&n=13" alt="User Avatar" />
                <div className={s.feedbackCard__userInfo}>
                    <p className={s.feedbackCard__userInfo_name}>User Name</p>
                    <p className={s.feedbackCard__userInfo_orderType}>Landing</p>
                </div>
            </div>
        </div >
    )
}