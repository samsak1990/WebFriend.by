import React from 'react'
import s from './ViewProject.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { closeProject } from '../../features/openImageSlice'
import { GALLARY_PHOTOS as projects } from '../Gallary/Gallary.content'
import type { RootState } from '../../app/store'

export const ViewProject: React.FC = () => {
    const projectOpening = useSelector((state: RootState) => state.project.projectName)
    const dispatch = useDispatch()
    const [{ disc, photo }] = projects.filter(project => project.id === projectOpening)
    return (
        <div className={s.viewProjectBox}>
            <img src={photo} alt={disc} />
            <button className={s.viewProjectBox__close} onClick={() => dispatch(closeProject(''))}></button>
        </div>
    )
}
