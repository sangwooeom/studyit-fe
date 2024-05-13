import Grid from "../../../components/Grid"
import Header from "../../../components/Header"
import Heading from '../../../components/Heading'
import Link from "../../../components/Link"
import Text from "../../../components/Text"
import { LinkType } from "../../../enum"

export default function Result() {
    return (
        <>
            <Header />
            <Grid rowGap="40px" margin="110px auto 0 auto" width="392px">
                <Heading fontSize="32px" lineHeight="40px">이메일 인증</Heading>
                <Text fontSize='16px' lineHeight="26px">
                    인증 메일을 <b>example@studyit.com</b>(으)로 전송했습니다.<br />
                    받으신 이메일을 열어 버튼을 클릭하면 인증이 완료됩니다.
                </Text>
                <Text textAlign="center" color="gray-500" fontSize="14px">
                    인증 메일을 받지 못하셨나요?<br/>
                    스팸보관함 확인 또는 <Link type={LinkType.EMAIL_RESAND_LINK}>인증 메일 재전송</Link>
                </Text>
            </Grid>
        </>
    )
}