import axios from "axios";

const DEFAULT_HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
}

export const courseScoreApiClient = axios.create({
    baseURL: 'http://localhost:8089/api/v1/course',
    headers: DEFAULT_HEADERS,
})

export const stablefordScoreApiClient = axios.create({
    baseURL: 'http://localhost:8089/api/v1/stableford',
    headers: DEFAULT_HEADERS,
})

courseScoreApiClient.interceptors.request.use((request) => request, Promise.reject("API failure"))
stablefordScoreApiClient.interceptors.request.use((request) => request, Promise.reject("API failure"))




