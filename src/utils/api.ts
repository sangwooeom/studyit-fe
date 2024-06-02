import axios, { AxiosResponse } from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 10000
})

export function loginAPI(request: LoginRequest): Promise<AxiosResponse<LoginResponseData>> {
    return api.post<LoginResponseData, AxiosResponse<LoginResponseData>, LoginRequest>('/api/auth/v1/login', request);
}