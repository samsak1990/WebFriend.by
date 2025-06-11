import type { IGeneralContent, IHeadingBox } from "../../data/Interfaces/IGeneral";
import { ABOUT_CONSTANT as me } from "../../data/About/About.constant";

export interface IFormAreas {
    name: string,
    email: string,
    subject: string,
    message: string,
    button: string
}

interface IFormContent extends IHeadingBox{
    locate: string,
    phone: string,
    emal: string,
    form: IFormAreas
}

export const FORM_CONTENT: IGeneralContent<IFormContent> = {
    ru:{
        title:'Свяжитесь со мной',
        description: 'У вас есть вопросы, предложения или хотите обсудить сотрудничество? Заполните форму обратной связи, и я отвечу вам в ближайшее время!',
        locate: me.locate.ru,
        phone: me.phone,
        emal: me.email,
        form: {
            name: 'Ваше имя',
            email: 'Ваш Email',
            subject: 'Тема сообщения',
            message: 'Ваше сообщение',
            button: 'Отправить'
        }
    },
    en:{
        title:'Contact Me',
        description: 'Do you have questions, suggestions, or want to discuss a collaboration? Fill out the contact form, and we’ll get back to you as soon as possible!',
        locate: me.locate.en,
        phone: me.phone,
        emal: me.email,
        form: {
            name: 'Your Name',
            email: 'Your Email',
            subject: 'Your Subject',
            message: 'Your Message',
            button: 'Send'
        }
    },
}