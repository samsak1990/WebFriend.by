import React from 'react'
import s from './ProjectBox.module.css'
import type { IGallaryPhoto } from '../../Gallary/Gallary.content'
import { useDispatch } from 'react-redux'
import { openingProject } from '../../../features/openImageSlice'
import ErrorImg from '../../../assets/error_img.png'


interface IProjectBoxProps {
    photo: IGallaryPhoto,
    index: number,
}

export const ProjectBox: React.FC<IProjectBoxProps> = React.memo(({ photo, index }) => {
    const dispatch = useDispatch()
    const handleProjectClick = () => dispatch(openingProject(photo.id));
    const handleError = (event: React.SyntheticEvent<HTMLImageElement>) => {
        event.currentTarget.src = ErrorImg; // Fallback image
    }

    return (
        <div
            role="button"
            aria-label="Open project photo"
            className={`${s[`div${index + 1}`]} ${s.box__photo}`}
            onClick={handleProjectClick}>
            <img src={photo.photo} alt={photo.id} loading="lazy" onError={handleError} />
        </div>
    )
})

ProjectBox.displayName = 'ProjectBox'