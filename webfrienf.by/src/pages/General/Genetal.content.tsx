
export type TGeneralContent = {
    h1: string,
    span: string,
    h2: string,
    button_portfolio: string
}

export interface IGeneralContent {
    ru: TGeneralContent,
    en: TGeneralContent
}

export const GENERAL_CONTENT: IGeneralContent = {
    ru: {
        h1: "Привет! Меня зовут ",
        span: "Павел",
        h2: "Я - профессиональный web разработчик, с опытом работы более 2-х лет!",
        button_portfolio: "Порфолио",
    },
    en: {
        h1: "Hello! My name is ",
        span: "Poul",
        h2: "I'm a professional Web-developer and have more than 2 years of work experience.",
        button_portfolio: "Portfolio",
    },
}