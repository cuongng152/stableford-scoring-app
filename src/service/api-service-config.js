import axios from "axios";

const DEFAULT_HEADERS = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
}

export const apiClient = axios.create({
    baseURL: 'http://localhost:8089/api/v1/course',
    headers: DEFAULT_HEADERS,
})

apiClient.interceptors.request.use((request) => request, Promise.reject("API failure"))




