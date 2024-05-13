import { ButtonType } from "../enum";
import kakaoicon from '../img/kakao_icon.svg'
import googleicon from '../img/google_icon.svg';
import styles from '../scss/components/Button.module.scss';
import cn from 'classnames';

export default function Button(props: ButtonProps) {
    const { type, children, disabled } = props;

    function onClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        if (props.onClick) props.onClick(event);
    }

    return (
        <button 
            className={cn(
                styles['btn'], 
                {
                    [styles['btn--kakao']]: type === ButtonType.KAKAO_BUTTON,
                    [styles['btn--google']]: type === ButtonType.GOOGLE_BUTTON,
                    [styles['btn--study-create-btn']]: type === ButtonType.STUDY_CREATE_BTTUN,
                }
            )} 
            onClick={onClick} 
            disabled={disabled}
        >
            {type == ButtonType.KAKAO_BUTTON && <img src={kakaoicon} />}
            {type == ButtonType.GOOGLE_BUTTON && <img src={googleicon} />}
            {children || ""}
        </button>
    )
}