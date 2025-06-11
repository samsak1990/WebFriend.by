import React, { useEffect } from 'react'
import s from './Form.module.css'
import { FORM_CONTENT } from './Form.content.ts'
import { ArticleTitle } from '../UI/ArticleTitle/ArticleTitle'
import type { TLang } from '../../data/Interfaces/IGeneral'
import { FormContact } from '../UI/FormContact/FormContact.tsx'
import { useDispatch, useSelector } from 'react-redux'
import type { RootState } from '../../app/store.tsx'
import { showMessage } from '../../features/showResultSendingMessageSlice.ts'

export const Form: React.FC<{ lang: TLang }> = ({ lang }) => {
    const content = FORM_CONTENT[lang]
    const sendingResult = useSelector((state: RootState) => state.resultMessage.result)
    const dispatch = useDispatch()

    useEffect(() => {
        if (sendingResult !== null) {
            const timer = setTimeout(() => dispatch(showMessage(null)), 1500)
            return () => clearTimeout(timer)
        }
    }, [sendingResult, dispatch])

    return (
        <section className={s.form}>
            {sendingResult !== null && (
                <p className={`${s.form__result} ${sendingResult ? s.sucsess : s.error}`}>{sendingResult ? 'Сообщение отправлено' : 'Сообщение не отправлено'}</p>
            )}
            <ArticleTitle text={{ title: content.title, description: content.description }} />
            <div className={`${s.form__contacts} ${s.contacts}`}>
                <div className={`${s.contacts_box} ${s.locate}`}>
                    <p>{content.locate}</p></div>
                <div className={`${s.contacts_box} ${s.phone}`}>
                    <p>{content.phone}</p></div>
                <div className={`${s.contacts_box} ${s.email}`}>
                    <p>{content.emal}</p></div>
            </div>
            <div className={s.form__wrapper}>
                <div className={s.form__sendlerInfo}></div>
                <FormContact data={content.form} />
            </div>
        </section>
    )
}