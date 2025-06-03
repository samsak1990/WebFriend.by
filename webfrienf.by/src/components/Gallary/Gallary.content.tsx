import Photo1 from '../../assets/gallary/1.webp'
import Photo2 from '../../assets/gallary/2.webp'
import Photo3 from '../../assets/gallary/3.webp'
import Photo4 from '../../assets/gallary/4.webp'
import Photo5 from '../../assets/gallary/5.webp'
import Photo6 from '../../assets/gallary/6.webp'
import Photo7 from '../../assets/gallary/7.webp'
import Photo8 from '../../assets/gallary/8.webp'
import Photo9 from '../../assets/gallary/9.webp'
import Photo10 from '../../assets/gallary/10.webp'
import type { IGeneralContent, IHeadingBox } from '../../data/Interfaces/IGeneral'

export interface IGallaryPhoto {
    id: `Work${number}`,
    disc: string,
    photo: string
}

export const HeadingGallary: IGeneralContent<IHeadingBox> = {
    ru: {
        title: "Портфолио",
        description: 'Здесь вы можете посмотреть мои работы для других клиентов.'
    },
    en: {
        title: "Portfolio",
        description: 'Here you can see my work for other clients.'
    },
};

export const GALLARY_PHOTOS: IGallaryPhoto[] = [
    { id: 'Work1', disc: 'Subtitle', photo: Photo1 },
    { id: 'Work2', disc: 'Subtitle', photo: Photo2 },
    { id: 'Work3', disc: 'Subtitle', photo: Photo3 },
    { id: 'Work4', disc: 'Subtitle', photo: Photo4 },
    { id: 'Work5', disc: 'Subtitle', photo: Photo5 },
    { id: 'Work6', disc: 'Subtitle', photo: Photo6 },
    { id: 'Work7', disc: 'Subtitle', photo: Photo7 },
    { id: 'Work8', disc: 'Subtitle', photo: Photo8 },
    { id: 'Work9', disc: 'Subtitle', photo: Photo9 },
    { id: 'Work10', disc: 'Subtitle', photo: Photo10 },
]