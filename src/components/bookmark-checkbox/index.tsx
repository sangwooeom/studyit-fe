import { iconBookmarkIn, iconBookmarkNot } from "../../img";
import { useState } from "react";
import styles from './style.module.scss';
import cn from 'classnames';

interface BookmarkCheckboxProps {
    checked: boolean;
    onClick?: (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

export default function BookmarkCheckbox(props: BookmarkCheckboxProps) {
    const { checked } = props;
    const [src, setSrc] = useState(iconBookmarkNot);

    function onClick(event: React.MouseEvent<HTMLSpanElement, MouseEvent>) {

    }

    return (
        <span className={cn(styles.bookmark)} onClick={onClick}>
            <input type="checkbox" />
            <img src={src} />
        </span>
    )
}