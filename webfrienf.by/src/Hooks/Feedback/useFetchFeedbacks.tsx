import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import type { IFeedback } from '../../components/UI/FeedbackCard/FeedbackCard';

interface IFetchFeedbacks {
    feedback: IFeedback | null,
    length: number,
    loading: boolean,
    error: Error | null
}

export const useFetchFeedbacks = (feedbackId: number): IFetchFeedbacks => {
    const [feedback, setFeedback] = useState<IFeedback | null>(null)
    const [length, setLength] = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)

    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const responseLength = await axios.get(`http://localhost:3000/feedbacks`, { signal: controller.signal });
                setLength(responseLength.data.length);
                const responseData = await axios.get(`http://localhost:3000/feedbacks/${feedbackId}`, { signal: controller.signal });
                setFeedback(responseData.data);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err);
                } else {
                    setError(new Error("Неизвестная ошибка"));
                }
            } finally {
                setLoading(false);
            }
        };
        fetchData();
        return () => controller.abort();
    }, [feedbackId]);

    return { feedback, length, loading, error }

}