import AuthForm from "../../../components/AuthForm"
import Input from "../../../components/Input"
import Button from "../../../components/Button"
import { ButtonType } from "../../../enum"

export default function Finder() {
    return (
        <AuthForm 
            isShowPrevButton={true} 
            to="/auth/login"
            title="비밀번호 찾기"
            description={(<>비밀번호를 재설정하기 위하여 링크를 이메일로 보내드릴게요.<br/>가입 시 사용한 이메일 주소를 정확히 입력해주세요.</>)}
        >
            <Input 
                label="이메일" 
                placeholder="example@studyit.com" 
                type="text"
            />
            <Button type={ButtonType.PRIMARY_BUTTON} disabled={true}>이메일로 링크 받기</Button>
        </AuthForm>
    )
}