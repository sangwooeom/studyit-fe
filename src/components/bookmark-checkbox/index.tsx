import { iconBookmarkIn, iconBookmarkNot } from "../../img";
import { useState, useEffect } from "react";
import styles from './style.module.scss';
import cn from 'classnames';

interface BookmarkCheckboxProps {
    checked: boolean;
    onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

export default function BookmarkCheckbox(props: BookmarkCheckboxProps) {
    const { checked } = props;
    const [src, setSrc] = useState(iconBookmarkNot);

    useEffect(() => {
        if (checked) setSrc(iconBookmarkIn);
        else setSrc(iconBookmarkNot);
    }, [checked])

    function onClick(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) {
        if (props.onClick) props.onClick(event);
    }

    return (
        <span className={cn(styles.bookmark)} onClick={onClick}>
            <input type="checkbox" checked={checked}/>
            <img src={src} />
        </span>
    )
}