import styled from "styled-components";

const Heading = styled.h1<HeadingProps>`
    color: ${props => props.color || '#101828'};
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    letter-spacing: -1px;
    font-size: ${props => props.fontSize || '32'}px;
    line-height: ${props => props.lineHeight}px;
`;

export default Heading;