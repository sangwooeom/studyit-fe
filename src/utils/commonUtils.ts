import { AxiosError, AxiosResponse } from "axios";

export function getClassName(prefix: string, prop?: string) {
    return `${prefix}-${prop && prop.split(' ').join('-')}`;
}

export function getErrorMessage(error: AxiosError<ErrorData, any>) {
    return error.response?.data?.message
}

export function saveTokenInLocalStorage(response: AxiosResponse<LoginResponseData>) {
    const data = getResponseData(response);
    const { accessToken, refreshToken } = data;

    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
}

export function getResponseData(response: AxiosResponse<any, any>) {
    return response.data;
}