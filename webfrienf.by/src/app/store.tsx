import { configureStore } from '@reduxjs/toolkit'
import projectNameReducer from '../features/openImageSlice'
import showResultSendingMessageReducer from '../features/showResultSendingMessageSlice'


export const store = configureStore({
    reducer: {
        project: projectNameReducer,
        resultMessage: showResultSendingMessageReducer
    },
    devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch