import cn from 'classnames';
import styles from '../scss/components/Text.module.scss';
import { getClassName } from "../utils/commonUtils";

export default function Text(props: TextProps) {
    const {
        margin,
        color,
        fontSize,
        fontWeight,
        lineHeight,
        textAlign,
        children,
    } = props;

    return (
        <p
            className={cn(
                styles['text'],
                {
                    [styles[`${getClassName('text--margin', margin)}`]]: margin,
                    [styles[`${getClassName('text--color', color)}`]]: color,
                    [styles[`${getClassName('text--font-size', fontSize)}`]]: fontSize,
                    [styles[`${getClassName('text--line-height', lineHeight)}`]]: lineHeight,
                    [styles[`${getClassName('text--text-align', textAlign)}`]]: textAlign,
                    [styles[`${getClassName('text--font-weight', fontWeight)}`]]: fontWeight,
                }
            )}
        >
            {children}
        </p>
    )
}