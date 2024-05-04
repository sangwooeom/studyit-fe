import styled from "styled-components";
import { ButtonType } from "../enum";
import kakaoicon from '../img/kakao_icon.svg'
import googleicon from '../img/google_icon.svg';

function getBackgroundColor(type: ButtonType): string {
    switch (type) {
        case ButtonType.GOOGLE_BUTTON:
            return "#FFFFFF";
        case ButtonType.KAKAO_BUTTON:
            return "#FFE812";
        case ButtonType.PRIMARY_BUTTON:
            return "#175CD3";
    }
}

export default function Button(props: ButtonProps) {
    const { type, children } = props;

    const BaseButton = styled.button`
        display: grid;
        column-gap: 10px;
        grid-auto-flow: column;
        justify-content: center;
        padding: 14px;
        border-radius: 6px;
        font-size: 16px;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
        letter-spacing: -1px;
        line-height: 20px;
        cursor: pointer;

        border: ${type === ButtonType.GOOGLE_BUTTON ? "1px solid #E4E7EC" : "none"};
        color: ${type === ButtonType.PRIMARY_BUTTON ? "#FFFFFF" : "#101828"};
        background-color: ${getBackgroundColor(type)};
    `;

    function onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if (props.onClick) props.onClick(event);
    }
    return (
        <BaseButton onClick={onClick}>
            {type == ButtonType.KAKAO_BUTTON && <img src={kakaoicon} />}
            {type == ButtonType.GOOGLE_BUTTON && <img src={googleicon} />}
            {children || ""}
        </BaseButton>
    )
}