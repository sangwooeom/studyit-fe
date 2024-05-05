import styled from "styled-components";

const Grid = styled.div<GridProps>`
    display: grid;

    margin: ${props => props.margin || "0"};
    width: ${props => props.width || "auto"};
    justify-content: ${props => props.justifyContent || "initial"};
    grid-auto-flow: ${props => props.gridAutoFlow || "row"};
    row-gap: ${props => props.rowGap || "normal"};
    column-gap: ${props => props.columnGap || "normal"};

`;

export default Grid;