import Input from '../../components/Input';
import Button from '../../components/Button';
import { ButtonType, LinkType } from '../../enum';
import Link from '../../components/Link';
import AuthForm from '../../components/AuthForm';
import Grid from '../../components/Grid';
import { loginAPI } from '../../utils/api';
import { useState } from 'react';
import { getErrorMessage, saveTokenInLocalStorage } from '../../utils/commonUtils';
import { AxiosResponse } from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onClickLoginButton() {
        const request: LoginRequest = { email, password };
        loginAPI(request)
        .then((response: AxiosResponse<LoginResponseData>) => {
            saveTokenInLocalStorage(response);
            navigate('/');
        })
        .catch((error) => {
            const message = getErrorMessage(error);
            alert(message);
        })
    } 

    return (
        <AuthForm title="로그인" description={(<>환영합니다.<br/>로그인 후 스터딧해보세요!</>)}>
            <Grid rowGap='20px'>
                <Input 
                    type="text" 
                    label='이메일'
                    onInput={({currentTarget}: React.FormEvent<HTMLInputElement>) => setEmail(currentTarget.value)}
                    placeholder='example@studiy.com'
                />
                <Input 
                    type="password" 
                    label='비밀번호'
                    onInput={({currentTarget}: React.FormEvent<HTMLInputElement>) => setPassword(currentTarget.value)}
                    placeholder='비밀번호를 입력해 주세요'
                />
            </Grid>
            <Grid rowGap='15px'>
                <Grid rowGap='12px'>
                    <Button type={ButtonType.PRIMARY_BUTTON} onClick={onClickLoginButton}>이메일로 로그인하기</Button>
                    <Button type={ButtonType.KAKAO_BUTTON}>카카오로 로그인하기</Button>
                    <Button type={ButtonType.GOOGLE_BUTTON}>구글로 로그인하기</Button>
                </Grid>
                <Grid gridAutoFlow='column' justifyContent='space-between'>
                    <Link type={LinkType.PRIMARY_LINK} to="/auth/join/Selector">아직 회원이 아니신가요?</Link>
                    <Link type={LinkType.PRIMARY_LINK} to="/auth/password/finder">비밀번호 찾기</Link>
                </Grid>
            </Grid>
        </AuthForm>
    )
}