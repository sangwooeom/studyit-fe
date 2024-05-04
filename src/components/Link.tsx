import styled from "styled-components";

export default function Link(props: LinkProps) {
    const { to, children } = props;

    const BaseLink = styled.a`
        color: #667085;
        font-size: 14px;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
        letter-spacing: -1px;
        line-height: 18px;
        text-decoration: none;
    `; 

    return (
        <BaseLink href={to}>{children}</BaseLink>
    )
}