import { useState } from "react";
import visibilityOffIcon from '../img/ic_visibility_off_24dp.svg';
import visibilityOnIcon from '../img/ic_visibility_on_24dp.svg';
import styled from "styled-components";

function getIconImg(hide: boolean): string {
    return hide ? visibilityOffIcon : visibilityOnIcon;
}

export default function IconButton(props: IconButtonProps) {
    const [hide, setHide] = useState(true);

    const IconButton = styled.button`
        background-color: #FFFFFF;
        border: none;
        margin: 12px 15px;
        width: 24px;
        height: 24px;
        cursor: pointer;
    `;

    function onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        setHide(!hide);
        if (props.onClick) props.onClick(event);
    }
    return (
        <IconButton onClick={onClick}>
            <img src={getIconImg(hide)} />
        </IconButton>
    )
}