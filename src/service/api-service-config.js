import axios from "axios";

const DEV_HOST = 'https://127.0.0.1:8089'
const PROD_HOST = 'https://3.26.217.107:8089'

const DEFAULT_HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS'
}

export const courseScoreApiClient = axios.create({
    baseURL: `${PROD_HOST}/api/v1/course`,
    headers: DEFAULT_HEADERS,
})

export const stablefordScoreApiClient = axios.create({
    baseURL: `${PROD_HOST}/api/v1/stableford`,
    headers: DEFAULT_HEADERS,
})

courseScoreApiClient.interceptors.request.use((request) => request, Promise.reject("API failure"))
stablefordScoreApiClient.interceptors.request.use((request) => request, Promise.reject("API failure"))




