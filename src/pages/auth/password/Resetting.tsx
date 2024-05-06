import AuthForm from "../../../components/AuthForm"
import Button from "../../../components/Button"
import Grid from "../../../components/Grid"
import Input from "../../../components/Input"
import { ButtonType } from "../../../enum"

export default function Resetting() {
    return (
        <AuthForm
            isShowPrevButton={true}
            to="/auth/password/finder"
            title="비밀번호 재설정"
            description="새로운 비밀번호를 설정해주세요."
        >
            <Grid rowGap="20px">
                <Input 
                    type="password" 
                    label="비밀번호"
                    description="영문/숫자/특수문자 조합, 8자 ~ 32자"
                    placeholder="비밀번호를 입력해 주세요" 
                />
                <Input 
                    type="password" 
                    label="비밀번호 확인"
                    placeholder="비밀번호를 한 번 더 입력해 주세요" 
                />
            </Grid>
            <Button type={ButtonType.PRIMARY_BUTTON} disabled={true}>재설정하기</Button>
        </AuthForm>
    )
}