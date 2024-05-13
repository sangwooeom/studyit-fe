import logoImg from '../img/logo.svg';
import styles from '../scss/components/Header.module.scss';
import cn from 'classnames';
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
            gridAutoFlow="column"
            justifyContent="space-between"
        >
            <Image type={ImageType.LOGO_IMG} />
            <Grid gridAutoFlow="column" columnGap="36px" justifyContent="start">
                <Button type={ButtonType.STUDY_CREATE_BTTUN}>스터디 생성하기</Button>
                <Link type={LinkType.HEADER_LINK}>스터디 찾기</Link>
                <Link type={LinkType.HEADER_LINK}>맴버 찾기</Link>
                <Link type={LinkType.HEADER_LINK}>로그인</Link>
            </Grid>
        </Grid>
    )
}