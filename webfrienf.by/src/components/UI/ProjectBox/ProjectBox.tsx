import React from 'react'
import s from './ProjectBox.module.css'
import type { IGallaryPhoto } from '../../Gallary/Gallary.content'
import { useDispatch } from 'react-redux'
import { openingProject } from '../../../features/openImageSlice'


interface IProjectBoxProps {
    photo: IGallaryPhoto,
    index: number,
}

export const ProjectBox: React.FC<IProjectBoxProps> = React.memo(({ photo, index }) => {
    const dispatch = useDispatch()
    return (
        <div className={`${s[`div${index + 1}`]} ${s.box__photo}`} onClick={() => dispatch(openingProject(photo.id))}>
            <img src={photo.photo} alt={photo.id} />
        </div>
    )
})
