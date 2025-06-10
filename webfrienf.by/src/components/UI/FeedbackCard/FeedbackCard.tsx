import React from 'react'
import s from './FeedbackCard.module.css'
import { motion } from "framer-motion";

export interface IFeedback {
    id: number | string,
    username: string,
    avatar: string,
    comment: string,
    siteType: string
}

type TFeedbackCardProps = {
    feedbackData: IFeedback
}

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
};
export const FeedbackCard: React.FC<TFeedbackCardProps> = ({ feedbackData }) => {
    return (
        <div className={s.feedbackCard}>
            <motion.div
                key={feedbackData.username}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={variants}
                transition={{ duration: 0.7 }}
            >
                <div className={s.feedbackCard__content}>
                    <p className={s.feedbackCard__text}>"{feedbackData.comment}"</p>
                </div>
                <div className={s.feedbackCard__user}>
                    <img className={s.feedbackCard__userAvatar} src={feedbackData.avatar} alt={feedbackData.username} />
                    <div className={s.feedbackCard__userInfo}>
                        <p className={s.feedbackCard__userInfo_name}>{feedbackData.username}</p>
                        <p className={s.feedbackCard__userInfo_orderType}>{feedbackData.siteType}</p>
                    </div>
                </div>
            </motion.div>
        </div >
    )
}