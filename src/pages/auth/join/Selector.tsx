import Grid from "../../../components/Grid"
import Button from "../../../components/Button"
import { ButtonType } from "../../../enum"
import AuthForm from "../../../components/AuthForm"
import { useNavigate } from "react-router-dom"

export default function Selector() {
    const navigate = useNavigate();

    return (
        <AuthForm isShowPrevButton={true} to="/auth/login" title="회원가입" description={(<>반갑습니다.<br/>열정적인 멤버들이 가디라고 있어요!</>)}>
            <Grid rowGap="12px">
                <Button type={ButtonType.PRIMARY_BUTTON} onClick={() => navigate('/auth/join/info')}>이메일로 시작하기</Button>
                <Button type={ButtonType.KAKAO_BUTTON}>카카오로 시작하기</Button>
                <Button type={ButtonType.GOOGLE_BUTTON}>구글로 시작하기</Button>
            </Grid>
        </AuthForm>
    ) 
}