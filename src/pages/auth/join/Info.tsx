import AuthForm from "../../../components/AuthForm"
import Button from "../../../components/Button"
import Grid from "../../../components/Grid"
import Input from "../../../components/Input"
import { ButtonType, ValidationType } from "../../../enum"
import { useMemo, useState } from "react"
import { 
    checkEmail, 
    checkNickname, 
    checkPassword 
} from "../../../utils/validationUtils"
import { 
    addMemberAPI,
    isDuplicateEmailAPI, 
    isDuplicateNicknameAPI 
} from "../../../utils/api"
import { AxiosResponse } from "axios"
import { getErrorMessage, getResponseData } from "../../../utils/commonUtils"
import { useNavigate } from "react-router-dom"

export default function Info() {
    const navigate = useNavigate();
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ passwordConfirm, setPasswordConfirm] = useState('');
    const [ nickname, setNickname ] = useState('');

    const [ validation, setValidation] = useState<InfoValidation>({
        email: ValidationType.NORMAL,
        password: ValidationType.NORMAL,
        passwordConfirm: ValidationType.NORMAL,
        nickname: ValidationType.NORMAL
    })

    const [ errorMessage, setErrorMessage ] = useState({
        email: '',
        password: '',
        passwordConfirm: '',
        nickname: '',
    });

    const joinButtonDisabled = useMemo(() => {
        for (let key in validation) {
            if (validation[key] !== ValidationType.VALIDATE) return true;
        }

        return false;
    }, [validation])

    function checkPasswordConfirm(passwordConfirm: string): CheckResult {
        if (password === passwordConfirm) return { result: true };
        else return { result: false, message: '비밀번호가 일치하지 않습니다.' } 
    }

    function changeErrorMessage(
        key: 'email' | 'password' | 'passwordConfirm' | 'nickname', 
        value: string
    ) {
        const errorMessageCopy = {...errorMessage};
        errorMessageCopy[key] = value;
        setErrorMessage(errorMessageCopy);
    }

    function changeValidation(
        key: 'email' | 'password' | 'passwordConfirm' | 'nickname', 
        value: ValidationType
    ) {
        const validationCopy = {...validation};
        validationCopy[key] = value;
        setValidation(validationCopy);
    }

    function createValidate(
        type: 'email' | 'password' | 'passwordConfirm' | 'nickname', 
        checkFunc: (value: string) => CheckResult, 
        isDuplicateAPI?: (param: string) => Promise<AxiosResponse<boolean>>,
        duplicationMessage?: string
    ) {
        return function(event: React.FocusEvent<HTMLInputElement, Element>) {
            const value = event.currentTarget.value;
            const checkResult: CheckResult = checkFunc(value)

            if (!checkResult.result && checkResult.message) {
                changeValidation(type, ValidationType.NON_VALIDATE);
                changeErrorMessage(type, checkResult.message);
            } else if (isDuplicateAPI) {
                isDuplicateAPI(value)
                .then((response: AxiosResponse<boolean>) => {
                    const data = getResponseData(response);
                    const validationValue = data ? ValidationType.NON_VALIDATE : ValidationType.VALIDATE;

                    changeValidation(type, validationValue);
                    changeErrorMessage(type, duplicationMessage || '');
                })
            } else {
                changeValidation(type, ValidationType.VALIDATE);
                changeErrorMessage(type, '');
            }
        }
    }

    function onClickJoinButton() {
        const data: JoinRequestData = { email, password, nickname };
        addMemberAPI(data)
        .then(() => {
            navigate('/auth/join/result');
        })
        .catch((error) => {
            const message = getErrorMessage(error);
            alert(message);
        })
    }

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
                    onInput={({currentTarget}: React.FormEvent<HTMLInputElement>) => setEmail(currentTarget.value)}
                    onBlur={createValidate('email', checkEmail, isDuplicateEmailAPI)}
                    validation={validation.email}
                    errorMessage={errorMessage.email}
                    type="text"
                />
                <Input 
                    label="비밀번호" 
                    placeholder="비밀번호를 입력해 주세요"
                    description="영문/숫자/특수문자 조합, 8자~32자"
                    onInput={({currentTarget}: React.FormEvent<HTMLInputElement>) => setPassword(currentTarget.value)}
                    onBlur={createValidate('password', checkPassword)}
                    validation={validation.password}
                    errorMessage={errorMessage.password}
                    type="password"
                />
                <Input 
                    label="비밀번호 확인" 
                    placeholder="비밀번호를 한 번 더 입력해 주세요" 
                    onInput={({currentTarget}: React.FormEvent<HTMLInputElement>) => setPasswordConfirm(currentTarget.value)}
                    onBlur={createValidate('passwordConfirm', checkPasswordConfirm)}
                    validation={validation.passwordConfirm}
                    errorMessage={errorMessage.passwordConfirm}
                    type="password"
                />
                <Input 
                    label="닉네임" 
                    placeholder="닉네임을 입력해 주세요" 
                    description="한글/영어/숫자 혼용 가능, 최대 10자"
                    onInput={({currentTarget}: React.FormEvent<HTMLInputElement>) => setNickname(currentTarget.value)}
                    onBlur={createValidate('nickname', checkNickname, isDuplicateNicknameAPI)}
                    validation={validation.nickname}
                    errorMessage={errorMessage.nickname}
                    type="text"
                />
            </Grid>
            <Button 
                type={ButtonType.PRIMARY_BUTTON} 
                disabled={joinButtonDisabled}
                onClick={onClickJoinButton}
            >
                회원가입하기
            </Button>
        </AuthForm>
    )
}