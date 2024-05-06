import styled from "styled-components";

const Text = styled.p<TextProps>`
    color: ${props => props.color || '#101828'};
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    letter-spacing: -1px;
    font-size: ${props => props.fontSize || '15'}px;
    line-height: ${props => props.lineHeight}px;
    text-align: ${props => props.textAlign || "initial"};
`;

export default Text;