import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import s from './FormContact.module.css'
import { type IFormAreas } from '../../Form/Form.content'
import { useSendUserMessage } from '../../../Hooks/sendUserMessage/useSendUserMessage'
import { useDispatch } from 'react-redux'
import { showMessage } from '../../../features/showResultSendingMessageSlice'
import type { AppDispatch } from '../../../app/store'

export type TFormDataSending = {
    email: string,
    message: string,
    name: string,
    subject: string
}

export const FormContact: React.FC<{ data: IFormAreas }> = ({ data }) => {
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<TFormDataSending>({ mode: 'onBlur' })
    const sendUserMessage = useSendUserMessage()
    const dispatch = useDispatch<AppDispatch>()

    const handleSubmitFromContact = async (userData: TFormDataSending) => {
        const result = await sendUserMessage(userData)
        if (result?.status === 201) {
            dispatch(showMessage(true))
            // reset()
        } else {
            dispatch(showMessage(false))
        }
    }

    return (
        <form className={s.formContact} name='form_contact' onSubmit={handleSubmit(handleSubmitFromContact)} >
            <div className={s.formContact__firstLine}>
                <div className={`${s.inputWrapper} ${errors.name ? s.error : ''}`}>
                    <input
                        id="name"
                        {...register(`name`, {
                            required: 'Name is required',
                            minLength: {
                                value: 3,
                                message: "Minimum 3 characters"
                            }
                        })}
                        type="text"
                        placeholder={data.name}
                        autoComplete="off"
                    />
                    {errors.name && <p className={s.error_input}>{errors.name.message as string}</p>}
                </div>
                <div className={`${s.inputWrapper} ${errors.email ? s.error : ''}`}>
                    <input
                        id="email"
                        {...register(`email`, {
                            required: 'Email is required',
                            pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
                                message: "Invalid email format"
                            }
                        })}
                        type="email"
                        placeholder={data.email}
                        autoComplete="off"
                    />
                    {errors.email && <p className={s.error_input}>{errors.email.message as string}</p>}
                </div>
            </div>
            <div className={`${s.formContact__secondLine} ${s.inputWrapper} ${errors.subject ? s.error : ''}`}>
                <input
                    id="subject"
                    {...register(`subject`, {
                        required: 'Subject is required',
                        minLength: {
                            value: 5,
                            message: "Minimum 5 characters"
                        }
                    })}
                    type="text"
                    placeholder={data.subject}
                    autoComplete="off"
                />
                {errors.subject && <p className={s.error_input}>{errors.subject.message as string}</p>}
            </div>
            <div className={`${s.formContact__thirdLine} ${s.inputWrapper} ${errors.message ? s.error : ''}`}>
                <textarea
                    id="message"
                    {...register(`message`, {
                        required: 'Message is required',
                        minLength: {
                            value: 5,
                            message: "Minimum 5 characters"
                        }
                    })
                    }
                    placeholder={data.message}
                    autoComplete="off"
                />
                {errors.message && <p className={s.error_input}>{errors.message.message as string}</p>}
            </div>

            <button className={s.formContact__button} disabled={isSubmitting} type='submit'>{isSubmitting ? "Sending..." : data.button}</button>
        </form >
    )
}