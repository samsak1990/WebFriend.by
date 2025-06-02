import React from 'react'
import s from './ProjectBox.module.css'
import type { IGallaryPhoto } from '../../Gallary/Gallary.content'

interface IProjectBoxProps {
    photo: IGallaryPhoto,
    index: number,
    openImg: {
        isOpenImg: boolean,
        setIsOpenImg: React.Dispatch<React.SetStateAction<boolean>>
    }
}

export const ProjectBox: React.FC<IProjectBoxProps> = ({ photo, index, openImg }) => {
    return (
        <div className={`${s['div' + index + 1]} ${s.box__photo}`} key={`${index}-${photo.name}`} >
            <img src={photo.photo} alt={photo.name} onClick={() => openImg.setIsOpenImg(!openImg.isOpenImg)} />
        </div>
    )
}
