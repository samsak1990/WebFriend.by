import type { IGeneralContent } from "../../data/Interfaces/IGeneral";

export interface IPriceContent {
    name: string;
    priceMin: number;
    priceMax?: number;
    time: string;
    include: string[];
    extra?: string[];
    top?: boolean
}

type TPrice = {
    min: number,
    max?: number
}

type TGeneralPrice = {
    sites: Record<string, TPrice>;
    extra: Record<string, TPrice>;
}

export const PRICE_HEADING = {
    ru: {
        title: "Цены на услуги",
        description: "Я предлагаю прозрачные цены на разработку сайтов и дополнительные услуги. Ознакомьтесь с прайсом, выберите подходящий вариант и начнём работу"
    },
    en: {
        title: "Service Prices",
        description: "I offer transparent pricing for website development and additional services. Take a look at the price list, choose the option that suits you best, and let’s get started."
    }
}

const GENERAL_PRICE: TGeneralPrice = {
    sites: {
        landing: { min: 300, max: 500 },
        Business: { min: 400, max: 700 },
        Portfolio: { min: 500, max: 800 },
        Promo: { min: 500, max: 800 },
        Catalog: { min: 700, max: 1000 }
    },
    extra: {
        Form: { min: 50 },
        Mobile: { min: 100 },
        Analytics: { min: 50 },
        Template: { min: 150 },
        Hosting: { min: 50 }
    }
}

export const PRICE_MAIN_SERVICES: IGeneralContent<IPriceContent[]> = {
    ru: [
        {
            name: "Сайт-визитка",
            priceMin: GENERAL_PRICE.sites.Business.min,
            priceMax: GENERAL_PRICE.sites.Business.max,
            time: "5–10 дней",
            include: [
                "2–4 страницы",
                "Кроссбраузерная адаптивность",
                "Простой роутинг (React Router)",
                "Форма + карта",
                "TailwindCSS или Bootstrap"
            ]
        },
        {
            name: "Портфолио",
            priceMin: GENERAL_PRICE.sites.Portfolio.min,
            priceMax: GENERAL_PRICE.sites.Portfolio.max,
            time: "7–10 дней",
            include: [
                "Галерея проектов",
                "Фильтрация по категориям",
                "Разделы: О себе, Контакты, Соцсети",
                "Headless CMS (при необходимости)",
                "Hover-эффекты"
            ]
        },
        {
            name: "Лендинг",
            priceMin: GENERAL_PRICE.sites.landing.min,
            priceMax: GENERAL_PRICE.sites.landing.max,
            time: "от 3 до 7 дней",
            include: [
                "Адаптивная верстка",
                "До 5 блоков",
                "Форма обратной связи",
                "Простые анимации (CSS, AOS)",
                "Подключение карты",
                "Базовая SEO-структура"
            ],
            top: true
        },
        {
            name: "Промо-сайт",
            priceMin: GENERAL_PRICE.sites.Promo.min,
            priceMax: GENERAL_PRICE.sites.Promo.max,
            time: "5–8 дней",
            include: [
                "Таймер обратного отсчета",
                "Программа мероприятия",
                "Галерея и видео-блок",
                "Интеграция с Telegram/Google Forms"
            ]
        },
        {
            name: "Интернет-каталог",
            priceMin: GENERAL_PRICE.sites.Catalog.min,
            priceMax: GENERAL_PRICE.sites.Catalog.max,
            time: "10–14 дней",
            include: [
                "Каталог товаров",
                "Фильтрация по категориям",
                "Форма заказа",
                "Вывод данных из JSON/Markdown"
            ],
            extra: [
                "Без корзины и онлайн-оплаты",
                "Подходит для витрин без CMS"
            ]
        },
    ],
    en: [

        {
            name: "Business Card",
            priceMin: GENERAL_PRICE.sites.Business.min,
            priceMax: GENERAL_PRICE.sites.Business.max,
            time: "5–10 days",
            include: [
                "2–4 pages",
                "Responsive and cross-browser layout",
                "Basic routing (React Router)",
                "Form + map",
                "TailwindCSS or Bootstrap"
            ]
        },
        {
            name: "Portfolio",
            priceMin: GENERAL_PRICE.sites.Portfolio.min,
            priceMax: GENERAL_PRICE.sites.Portfolio.max,
            time: "7–10 days",
            include: [
                "Project gallery",
                "Category filtering",
                "Sections: About Me, Contacts, Socials",
                "Optional Headless CMS",
                "Hover effects"
            ]
        },
        {
            name: "Landing",
            priceMin: GENERAL_PRICE.sites.landing.min,
            priceMax: GENERAL_PRICE.sites.landing.max,
            time: "3 to 7 days",
            include: [
                "Responsive layout",
                "Up to 5 sections",
                "Contact form",
                "Simple animations (CSS, AOS)",
                "Map integration",
                "Basic SEO structure"
            ],
            top: true
        },
        {
            name: "Promo",
            priceMin: GENERAL_PRICE.sites.Promo.min,
            priceMax: GENERAL_PRICE.sites.Promo.max,
            time: "5–8 days",
            include: [
                "Countdown timer",
                "Event schedule section",
                "Gallery and video block",
                "Telegram or Google Forms integration"
            ]
        },
        {
            name: "Product Catalog",
            priceMin: GENERAL_PRICE.sites.Catalog.min,
            priceMax: GENERAL_PRICE.sites.Catalog.max,
            time: "10–14 days",
            include: [
                "Product catalog (image, title, price)",
                "Front-end filtering",
                "Order form",
                "Rendering from JSON or Markdown"
            ],
            extra: [
                "No cart or payment system",
                "Best for simple showcases without CMS"
            ]
        }
    ]
}

export const PRICE_EXTRA_SERVICES: IGeneralContent<IPriceContent[]> = {
    ru: [
        {
            name: "Подключение формы обратной связи",
            priceMin: GENERAL_PRICE.extra.Form.min,
            time: "1 день",
            include: [
                "Интеграция через Formspree, EmailJS или Telegram Bot"
            ]
        },
        {
            name: "Адаптация сайта под мобильные устройства",
            priceMin: GENERAL_PRICE.extra.Mobile.min,
            time: "2–3 дня",
            include: [
                "Адаптация существующего сайта под телефоны и планшеты"
            ]
        },
        {
            name: "Установка аналитики",
            priceMin: GENERAL_PRICE.extra.Analytics.min,
            time: "1 день",
            include: [
                "Google Analytics, Yandex Metrika, события"
            ]
        },
        {
            name: "Установка шаблона",
            priceMin: GENERAL_PRICE.extra.Template.min,
            time: "2–3 дня",
            include: [
                "Настройка HTML-шаблона под контент клиента"
            ]
        },
        {
            name: "Заливка сайта на хостинг",
            priceMin: GENERAL_PRICE.extra.Hosting.min,
            time: "1 день",
            include: [
                "GitHub Pages, Netlify, Vercel, хостинг-платформы"
            ]
        }
    ],

    en: [
        {
            name: "Contact Form Integration",
            priceMin: GENERAL_PRICE.extra.Form.min,
            time: "1 day",
            include: [
                "Setup via Formspree, EmailJS or Telegram Bot"
            ]
        },
        {
            name: "Mobile Optimization",
            priceMin: GENERAL_PRICE.extra.Mobile.min,
            time: "2–3 days",
            include: [
                "Make existing site responsive for phones/tablets"
            ]
        },
        {
            name: "Analytics Setup",
            priceMin: GENERAL_PRICE.extra.Analytics.min,
            time: "1 day",
            include: [
                "Google Analytics, Yandex Metrika, basic events"
            ]
        },
        {
            name: "Template Installation",
            priceMin: GENERAL_PRICE.extra.Template.min,
            time: "2–3 days",
            include: [
                "Setup and adapt HTML template with your content"
            ]
        },
        {
            name: "Website Hosting",
            priceMin: GENERAL_PRICE.extra.Hosting.min,
            time: "1 day",
            include: [
                "Deploy via GitHub Pages, Netlify, Vercel, etc."
            ]
        }
    ],

}