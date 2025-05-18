import Telegram from '../../assets/Socials/telegram.svg'
import Instagram from '../../assets/Socials/instagram.svg'
import Linkedin from '../../assets/Socials/linkedin.svg'
import Email from '../../assets/Socials/email.svg'

export interface ISocials {
    name: string,
    http: string,
    image: string
}

export const SOCIAL_LIST: ISocials[] = [
    {
        name: "Telegram",
        http: "https://t.me/whoIsPavelK",
        image: Telegram
    },
    {
        name: "Instagram",
        http: "https://www.instagram.com/webfriend.by/profilecard/?igsh=MW9hbDQ4azlja3Bscw==",
        image: Instagram
    },
    {
        name: "Linkedin",
        http: "https://www.linkedin.com/in/pavel-kozlovski-983989349?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        image: Linkedin
    },
    {
        name: "Email",
        http: "pasha.kozlovskij@list.ru",
        image: Email
    },
] 