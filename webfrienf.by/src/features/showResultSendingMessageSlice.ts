import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface TInitialState{
    result: null | boolean
} 

const initialState: TInitialState = {
  result: null,
}

export const showResultSendingMessageSlice = createSlice({
  name: 'resultMessage',
  initialState,
  reducers: {
    showMessage: (state, action: PayloadAction<null | boolean>) => {
        state.result = action.payload
    },
  }
})

export const { showMessage } = showResultSendingMessageSlice.actions

export default showResultSendingMessageSlice.reducer