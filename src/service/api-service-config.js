import axios from "axios";

// const DOMAIN = 'https://localhost:8089'
const DOMAIN = 'https://3.26.217.107:8089'

const DEFAULT_HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}

export const courseScoreApiClient = axios.create({
    baseURL: `${DOMAIN}/api/v1/course`,
    headers: DEFAULT_HEADERS,
})

export const stablefordScoreApiClient = axios.create({
    baseURL: `${DOMAIN}/api/v1/stableford`,
    headers: DEFAULT_HEADERS,
})

courseScoreApiClient.interceptors.request.use((request) => request, Promise.reject("API failure"))
stablefordScoreApiClient.interceptors.request.use((request) => request, Promise.reject("API failure"))




