import logo from '../img/logo.svg';
import styled from 'styled-components';

export default function Header() {
    const Header = styled.header`
        background-color: #FFFFFF;
        border-bottom: 1px solid #E4E7EC;
        padding: 13px 103px;
        display: grid;
        grid-auto-flow: column;
        justify-content: space-between;
    `

    const Logo = styled.img`
        padding: 3px 0;
        cursor: pointer;
    `

    const ButtonSection = styled.div`
        display: grid;
        grid-auto-flow: column;
        column-gap: 36px;
        justify-content: start;
    `

    const StudyCreationButton = styled.button`
        padding: 7px 12px;
        border: 1px solid #E4E7EC;
        border-radius: 18px;
        background: #FFFFFF;
        font-size: 14px;
        color: #175CD3;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
        font-weight: 700;
        cursor: pointer;
        letter-spacing: -1px;
        line-height: 18px;
    `

    const HeaderLink = styled.a`
        color: #101828;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
        letter-spacing: -1px;
        font-size: 15px;
        padding: 7px 0 8px 0;
        cursor: pointer;
        line-height: 19px;
    `;

    return (
        <Header>
            <Logo src={logo} />
            <ButtonSection>
                <StudyCreationButton>스터디 생성하기</StudyCreationButton>
                <HeaderLink>스터디 찾기</HeaderLink>
                <HeaderLink>맴버 찾기</HeaderLink>
                <HeaderLink>로그인</HeaderLink>
                
            </ButtonSection>
        </Header>
    )
}