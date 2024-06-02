import styles from '../scss/modal/Modal.module.scss';
import cn from 'classnames';
import { getClassName } from '../utils/commonUtils';

export default function Modal(props: ModalProps) {
    const { width, height, children } = props;

    return (
        <div className={cn(styles['modal'])}>
            <div className={cn(
                styles['popup'],
                {
                    [styles[`${getClassName('popup--width', width)}`]]: width,
                    [styles[`${getClassName('popup--height', height)}`]]: height,
                }
            )}>
                {children}
            </div>
        </div>
    )
}