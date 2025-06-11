import axios, { type AxiosResponse } from 'axios'
import type { TFormDataSending } from '../../components/UI/FormContact/FormContact'
import { useCallback } from 'react';

interface IFeedbackResponse {
    status: number
}

export const useSendUserMessage = () => {
    return useCallback(async (userData: TFormDataSending): Promise<IFeedbackResponse | null> => {
        const date = new Date()
        try {
            const response: AxiosResponse<IFeedbackResponse> = await axios.post<IFeedbackResponse>('http://localhost:3000/messages', { ...userData, date: date })
            return response
        } catch {
            return null
        }
    }, [])
}
