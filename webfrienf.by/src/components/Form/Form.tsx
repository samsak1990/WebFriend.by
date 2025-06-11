import React from 'react'
import s from './Form.module.css'
import { FORM_CONTENT } from './Form.content.ts'
import { ArticleTitle } from '../UI/ArticleTitle/ArticleTitle'
import type { TLang } from '../../data/Interfaces/IGeneral'
import { FormContact } from '../UI/FormContact/FormContact.tsx'

export const Form: React.FC<{ lang: TLang }> = ({ lang }) => {
    const content = FORM_CONTENT[lang]
    return (
        <section className={s.form}>
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
                <FormContact data={content.form} />
            </div>
        </section>
    )
}