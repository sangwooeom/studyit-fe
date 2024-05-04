import styled from "styled-components";

const Grid = styled.div<GridProps>`
    display: grid;

    justify-content: ${props => props.justifyContent || "initial"};
    grid-auto-flow: ${props => props.gridAutoFlow || "row"};
    row-gap: ${props => props.rowGap || "normal"};
    column-gap: ${props => props.columnGap || "normal"};

`;

export default Grid;