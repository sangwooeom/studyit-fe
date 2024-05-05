import styled from 'styled-components';
import prevButtonImg from '../img/prev_btn.svg';
import { useNavigate } from 'react-router-dom';

export default function PrevButton(props: PrevButtonProps) {
    // props
    const { to } = props;

    // hook
    const navigate = useNavigate();

    // Style
    const BaseButton = styled.button`
        display: grid;
        grid-auto-flow: column;
        column-gap: 1px;
        padding 8px 1px;
        border: none;
        background-color: #FFFFFF;
        cursor: pointer;
    `;

    const BaseText = styled.p`
        margin: 2px 0;
        color: #175CD3;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
        letter-spacing: -1px;
        font-weight: bold;
        font-size: 16px;
        line-height: 20px;
    `;

    return (
        <BaseButton onClick={() => navigate(to || '')}>
            <img src={prevButtonImg} />
            <BaseText>이전으로</BaseText>
        </BaseButton>
    )
}