import cn from 'classnames';
import styles from '../scss/components/Text.module.scss';
import { getClassName } from "../utils/commonUtils";

export default function Text(props: TextProps) {
    const {
        color,
        fontSize,
        lineHeight,
        textAlign,
        children,
    } = props;

    return (
        <p
            className={cn(
                styles['text'],
                {
                    [styles[`${getClassName('text--color', color)}`]]: color,
                    [styles[`${getClassName('text--font-size', fontSize)}`]]: fontSize,
                    [styles[`${getClassName('text--line-height', lineHeight)}`]]: lineHeight,
                    [styles[`${getClassName('text--text-align', textAlign)}`]]: textAlign,
                }
            )}
        >
            {children}
        </p>
    )
}