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
    name: string,
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
    { name: 'Work1', disc: 'Subtitle', photo: Photo1 },
    { name: 'Work2', disc: 'Subtitle', photo: Photo2 },
    { name: 'Work3', disc: 'Subtitle', photo: Photo3 },
    { name: 'Work4', disc: 'Subtitle', photo: Photo4 },
    { name: 'Work5', disc: 'Subtitle', photo: Photo5 },
    { name: 'Work6', disc: 'Subtitle', photo: Photo6 },
    { name: 'Work7', disc: 'Subtitle', photo: Photo7 },
    { name: 'Work8', disc: 'Subtitle', photo: Photo8 },
    { name: 'Work9', disc: 'Subtitle', photo: Photo9 },
    { name: 'Work10', disc: 'Subtitle', photo: Photo10 },
]