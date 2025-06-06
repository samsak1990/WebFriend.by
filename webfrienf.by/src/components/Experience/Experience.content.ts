import type { IGeneralContent } from "../../data/Interfaces/IGeneral"
import ClientsImg from '../../assets/experience/clients.svg'
import ProjectsImg from '../../assets/experience/projects.svg'
import YearsImg from '../../assets/experience/years.svg'

export type TExperienceContent = {
    image: string,
    count: string,
    title: string,
}

const EXPERIENCE_ITEMS = [
    { image: ClientsImg, count: "20+" },
    { image: ProjectsImg, count: "20+" },
    { image: YearsImg, count: "2+" }
];

const EXPERIENCE_TITLES = {
    ru: ["Клиенты", "Проекты", "Лет опыта"],
    en: ["Clients", "Projects", "Years Experience"]
};

export const DATA_BOX_EXPERIENCE: IGeneralContent<TExperienceContent[]> = {
    ru: EXPERIENCE_ITEMS.map((item, index) => ({
        ...item,
        title: EXPERIENCE_TITLES.ru[index]
    })),
    en: EXPERIENCE_ITEMS.map((item, index) => ({
        ...item,
        title: EXPERIENCE_TITLES.en[index]
    }))
};