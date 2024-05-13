import prevButtonImg from '../img/prev_btn.svg';
import { useNavigate } from 'react-router-dom';
import styles from '../scss/components/PrevButton.module.scss';
import cn from 'classnames';

export default function PrevButton(props: PrevButtonProps) {
    // props
    const { to } = props;

    // hook
    const navigate = useNavigate();

    return (
        <button className={cn(styles.btn)} onClick={() => navigate(to || '')}>
            <img src={prevButtonImg} />
            <p className={cn(styles.btn__text)}>이전으로</p>
        </button>
    )
}