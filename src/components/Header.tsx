import Grid from './Grid';
import Link from './Link';
import { ButtonType, ImageType, LinkType } from '../enum';
import Button from './Button';
import Image from './Image';

export default function Header() {
    return (
        <Grid
            padding="13px 103px"
            borderBottom="1px solid gray-200"
        >
            <Grid 
                margin="0 auto"
                width="1160px" 
                gridAutoFlow="column" 
                justifyContent="space-between"
            >
                <Image type={ImageType.LOGO_IMG} />
                <Grid gridAutoFlow="column" columnGap="36px" justifyContent="start">
                    <Button type={ButtonType.STUDY_CREATE_BUTTUN}>스터디 생성하기</Button>
                    <Link type={LinkType.HEADER_LINK} to="/study/list">스터디 찾기</Link>
                    <Link type={LinkType.HEADER_LINK} to="/member/list">맴버 찾기</Link>
                    <Link type={LinkType.HEADER_LINK} to="/auth/login">로그인</Link>
                </Grid>
            </Grid>
        </Grid>
    )
}