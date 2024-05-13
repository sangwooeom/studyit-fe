export function loginAPI(request: LoginRequest): Promise<LoginResponse> {
    return new Promise((resolve, reject) => {
        const { id, password } = request;

        setTimeout(() => {
            if (id === 'example@studyit.com' && password === '1q2w3e4r') {
                resolve({
                    accessToken: '12345',
                    refreshToken: '12345'
                });
            } else {
                reject({
                    code: '403',
                    message: '로그인 실패'
                })
            }
        }, 100)
    })
}