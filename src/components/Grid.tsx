import cn from 'classnames';
import styles from '../scss/components/Grid.module.scss';
import { getClassName } from '../utils/commonUtils';

// const Grid = styled.div<GridProps>`
//     display: grid;

//     margin: ${props => props.margin || "0"};
//     width: ${props => props.width || "auto"};
//     justify-content: ${props => props.justifyContent || "initial"};
//     grid-auto-flow: ${props => props.gridAutoFlow || "row"};
//     row-gap: ${props => props.rowGap || "normal"};
//     column-gap: ${props => props.columnGap || "normal"};
//     border: ${props => props.border || "none"};
//     border-radius: ${props => props.borderRadius || "0"};
//     grid-template-columns: ${props => props.gridTemplateColumns || "none"};
//     background-color?: ${props => props.backgroundColor || "initial"};
// `;

export default function Grid(props: GridProps) {
    const { 
        margin, 
        padding, 
        width, 
        height,
        justifyContent,
        gridAutoFlow,
        gridTemplateColumns,
        rowGap,
        columnGap,
        border,
        borderBottom,
        borderRadius,
        boxSizing,
        backgroundColor,
        children 
    } = props;

    return (
        <div
            className={cn(
                styles['grid'],
                {
                    [styles[`${getClassName('grid--margin', margin)}`]]: margin,
                    [styles[`${getClassName('grid--padding', padding)}`]]: padding,
                    [styles[`${getClassName('grid--width', width)}`]]: width,
                    [styles[`${getClassName('grid--height', height)}`]]: height,
                    [styles[`${getClassName('grid--justify-content', justifyContent)}`]]: justifyContent,
                    [styles[`${getClassName('grid--grid-auto-flow', gridAutoFlow)}`]]: gridAutoFlow,
                    [styles[`${getClassName('grid--grid-template-columns', gridTemplateColumns)}`]]: gridTemplateColumns,
                    [styles[`${getClassName('grid--row-gap', rowGap)}`]]: rowGap,
                    [styles[`${getClassName('grid--column-gap', columnGap)}`]]: columnGap,
                    [styles[`${getClassName('grid--border', border)}`]]: border,
                    [styles[`${getClassName('grid--border-bottom', borderBottom)}`]]: borderBottom,
                    [styles[`${getClassName('grid--border-radius', borderRadius)}`]]: borderRadius,
                    [styles[`${getClassName('grid--box-sizing', boxSizing)}`]]: boxSizing,
                    [styles[`${getClassName('grid--background-color', backgroundColor)}`]]: backgroundColor,
                }
            )}
        >
            {children}
        </div>)
}