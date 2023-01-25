import {courseScoreApiClient, stablefordScoreApiClient} from "./api-service-config";

export const retrieveCourseScores = async () => {
    try {
        const { data } = await courseScoreApiClient.get().then((response) => response)
        return data
    } catch (err) {
        throw new Error()
    }
}

export const retrieveStablefordScore = async () => {
    try {
        const { data } = await stablefordScoreApiClient.get().then((response) => response)
        return data
    } catch (err) {
        throw new Error()
    }
}

export const getStablefordScoreByHoleCode = async (holeCode) => {
    try {
        const { data } = await stablefordScoreApiClient.get(`/hole/${holeCode}`).then((response) => response)
        return data
    } catch (err) {
        throw new Error(err)
    }
}