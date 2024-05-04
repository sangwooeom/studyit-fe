import Header from '../../components/Header';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { ButtonType } from '../../enum';
import Link from '../../components/Link';
import Grid from '../../components/Grid';
import AuthContainer from '../../components/AuthContainer';

export default function Login() {
    return (
        <>
            <Header />
            <AuthContainer rowGap='40px'>
                <Grid rowGap='10px'>
                    <Heading lineHeight={40} fontSize={32}>로그인</Heading>
                    <Text color='#667085' fontSize={14} lineHeight={22}>
                        환영합니다. <br />
                        로그인 후 스터딧해보세요!
                    </Text>
                </Grid>
                <Grid rowGap='20px'>
                    <Input label='이메일' placeholder='example@studiy.com'/>
                    <Input label='비밀번호' placeholder='비밀번호를 입력해 주세요'/>
                </Grid>
                <Grid rowGap='15px'>
                    <Grid rowGap='12px'>
                        <Button type={ButtonType.PRIMARY_BUTTON}>이메일로 로그인하기</Button>
                        <Button type={ButtonType.KAKAO_BUTTON}>카카오로 로그인하기</Button>
                        <Button type={ButtonType.GOOGLE_BUTTON}>구글로 로그인하기</Button>
                    </Grid>
                    <Grid gridAutoFlow='column' justifyContent='space-between'>
                        <Link to="/auth/join/Selector">아직 회원이 아니신가요?</Link>
                        <Link to="/auth/password/finder">비밀번호 찾기</Link>
                    </Grid>
                </Grid>
            </AuthContainer>
        </>
    )
}