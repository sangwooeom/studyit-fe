import axios, { AxiosResponse } from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 10000
})

export function loginAPI(request: LoginRequest): Promise<AxiosResponse<LoginResponseData>> {
    return api.post<LoginResponseData, AxiosResponse<LoginResponseData>, LoginRequest>('/api/auth/v1/login', request);
}

export function isDuplicateEmailAPI(email: string): Promise<AxiosResponse<boolean>> {
    return api.get<boolean, AxiosResponse<boolean>>(`/api/v1/member/email/duplicate?email=${email}`);
}

export function isDuplicateNicknameAPI(nickname: string): Promise<AxiosResponse<boolean>> {
    return api.get<boolean, AxiosResponse<boolean>>(`/api/v1/member/nickname/duplicate?nickname=${nickname}`);
}

export function addMemberAPI(data: JoinRequestData): Promise<AxiosResponse<string>> {
    return api.post<string, AxiosResponse<string>, JoinRequestData>('/api/v1/member', data);
}