import {apiClient} from "./api-service-config";

export const retrieveCourseScores = async () => {
    try {
        const { data } = await apiClient.get().then((response) => response)
        return data
    } catch (err) {
        throw new Error()
    }
}