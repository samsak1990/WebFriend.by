import { configureStore } from '@reduxjs/toolkit'
import projectNameReducer from '../features/openImageSlice'

export const store = configureStore({
    reducer: {
        project: projectNameReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch