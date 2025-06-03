import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IProgectName {
  projectName: string
}

const initialState: IProgectName = {
  projectName: '',
}

export const projectNameSlice = createSlice({
  name: 'projectName',
  initialState,
  reducers: {
    openingProject: (state, action: PayloadAction<string>) => {
      state.projectName = action.payload
      if(state.projectName){
        document.body.style.overflow = 'hidden'
      } else document.body.style.overflow = 'scrollY'
    },
    closeProject: (state, action: PayloadAction<string>)=>{
      state.projectName = action.payload==='' ? action.payload : ''
      if(!state.projectName) document.body.style.overflow = 'auto'
    },
  }
})

export const { openingProject, closeProject } = projectNameSlice.actions

export default projectNameSlice.reducer