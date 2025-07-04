import type { IGeneralContent } from "../Interfaces/IGeneral";
import { SOCIAL_LIST } from "../Socials/Socials";


export type TAboutConstant = {
    email: string,
    linkedIn: string,
    telegram: string,
    instargam: string,
    phone: string,
    locate: IGeneralContent<string>
}

export const ABOUT_CONSTANT: TAboutConstant = {
    email: SOCIAL_LIST.find(item => item.name === 'Email')?.http as string,
    linkedIn: 'Pavel Kozlovski',
    telegram: '@whoIsPavelK',
    instargam: "@webfriend.by",
    phone: '+375-29-647-25-67',
    locate: {
        ru: 'Минск, Беларусь', en: 'Minsk, Belarus'
    }
}