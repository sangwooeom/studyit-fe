import styled from "styled-components";

const Grid = styled.div<GridProps>`
    display: grid;

    margin: ${props => props.margin || "0"};
    width: ${props => props.width || "auto"};
    justify-content: ${props => props.justifyContent || "initial"};
    grid-auto-flow: ${props => props.gridAutoFlow || "row"};
    row-gap: ${props => props.rowGap || "normal"};
    column-gap: ${props => props.columnGap || "normal"};
    border: ${props => props.border || "none"};
    border-radius: ${props => props.borderRadius || "0"};
    grid-template-columns: ${props => props.gridTemplateColumns || "none"};
    background-color?: ${props => props.backgroundColor || "initial"};
`;

export default Grid;