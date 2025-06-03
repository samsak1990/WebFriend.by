import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type ProjectName = `Work${number}`;

export interface IProgectName {
  projectName: "" | ProjectName
}

const initialState: IProgectName = {
  projectName: '',
}

export const projectNameSlice = createSlice({
  name: 'projectName',
  initialState,
  reducers: {
    openingProject: (state, action: PayloadAction<string>) => {
      if(/^Work\d+$/.test(action.payload)){
        state.projectName = action.payload as ProjectName
        document.body.style.overflow = 'hidden'
      } else { 
        state.projectName = ''
        document.body.style.overflow = 'auto'
      }
    },
    closeProject: (state)=>{
      state.projectName = ''
      if(!state.projectName) document.body.style.overflow = 'auto'
    },
  }
})

export const { openingProject, closeProject } = projectNameSlice.actions

export default projectNameSlice.reducer