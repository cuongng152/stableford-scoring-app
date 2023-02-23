import {courseScoreApiClient, stablefordScoreApiClient} from "./api-service-config";
import {loggingAPIError} from "../utils/global-utils";

export const retrieveCourseScores = async () => {
    try {
        const { data } = await courseScoreApiClient.get().then((response) => response)
        return data
    } catch (err) {
        const {code, message, response} = err || {}
        loggingAPIError(code, message, response?.status)
        throw new Error()
    }
}

export const retrieveStablefordScore = async () => {
    try {
        const { data } = await stablefordScoreApiClient.get().then((response) => response)
        return data
    } catch (err) {
        const {code, message, response} = err || {}
        loggingAPIError(code, message, response?.status)
        throw new Error()
    }
}

export const getStablefordScoreByHoleCode = async (holeCode) => {
    try {
        const { data } = await stablefordScoreApiClient.get(`/hole/${holeCode}`).then((response) => response)
        return data
    } catch (err) {
        const {code, message, response} = err || {}
        loggingAPIError(code, message, response?.status)
        throw new Error(err)
    }
}

export const saveStablefordScoreByHole = async (payload) => {
    try {
        const {status} =  await stablefordScoreApiClient.post(``, payload)
        if (status === 201) {
            return true
        }
        return false
    } catch (err) {
        const {code, message, response} = err || {}
        loggingAPIError(code, message, response?.status)
        throw new Error(err)
    }
}

export const saveCourseScore = async (payload) => {
    try {
        const {status} = await courseScoreApiClient.post('', payload)
        if (status === 201) {
            return true
        }
        return false
    } catch (err) {
        const {code, message, response} = err || {}
        loggingAPIError(code, message, response?.status)
        throw new Error(err)
    }
}

export const getCourseScoreByHoleCode = async (holeCode) => {
    try {
        const { data } = await courseScoreApiClient.get(`/holecode/${holeCode}`).then((response) => response)
        return data
    } catch (err) {
        const {code, message, response} = err || {}
        loggingAPIError(code, message, response?.status)
        throw new Error(err)
    }
}