import cn from 'classnames';
import styles from '../scss/components/Heading.module.scss';
import { getClassName } from "../utils/commonUtils";

export default function Heading(props: HeadingProps) {
    const {
        color,
        fontSize,
        lineHeight,
        children
    } = props;

    return (
        <h1
            className={cn(
                styles['headding'],
                {
                    [styles[`${getClassName('heading--color', color)}`]]: color,
                    [styles[`${getClassName('heading--font-size', fontSize)}`]]: fontSize,
                    [styles[`${getClassName('heading--line-height', lineHeight)}`]]: lineHeight,
                }
            )}
        >
            {children}
        </h1>
    )
}
