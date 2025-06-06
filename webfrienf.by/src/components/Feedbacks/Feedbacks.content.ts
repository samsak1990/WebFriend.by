import type { IGeneralContent } from "../../data/Interfaces/IGeneral";

export type TFeedback = {
        header: string;
        text: string;
}

export const FEEDBACKS_CONTENT:IGeneralContent<TFeedback> = {
    ru:{header:"Отзывы моих клиентов", text:"Здесь вы можете ознакомиться с некоторыми отзывами моих клиентов, которые доверились мне и моим услугам."},
    en:{header:"Feedbacks from my clients", text:"Here you can read some feedbacks from my clients who trusted me and my services."}
}