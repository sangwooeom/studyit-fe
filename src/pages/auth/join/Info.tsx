import AuthForm from "../../../components/AuthForm"
import Button from "../../../components/Button"
import Grid from "../../../components/Grid"
import Input from "../../../components/Input"
import { ButtonType } from "../../../enum"

export default function Info() {
    return (
        <AuthForm
            isShowPrevButton={true}
            to="/auth/join/selector"
            title="회원가입"
            description={(<>반갑습니다.<br />열정적인 멤버들이 기다리고 있어요!</>)}
        >
            <Grid rowGap="20px">
                <Input 
                    label="이메일" 
                    placeholder="example@studyit.com" 
                />
                <Input 
                    label="비밀번호" 
                    placeholder="비밀번호를 입력해 주세요"
                    description="영문/숫자/특수문자 조합, 8자~32자"
                    type="password"
                />
                <Input 
                    label="비밀번호 확인" 
                    placeholder="비밀번호를 한 번 더 입력해 주세요" 
                    type="password"
                />
                <Input 
                    label="닉네임" 
                    placeholder="닉네임을 입력해 주세요" 
                    description="한글/영어/숫자 혼용 가능, 최대 10자"
                />
            </Grid>
            <Button type={ButtonType.PRIMARY_BUTTON} disabled={true}>회원가입하기</Button>
        </AuthForm>
    )
}