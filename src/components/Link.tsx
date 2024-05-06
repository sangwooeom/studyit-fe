import styled from "styled-components";
import { LinkType } from "../enum";

function getTextDecoration(type: LinkType) {
    switch (type) {
        case LinkType.PRIMARY_LINK:
            return "none";
        case LinkType.EMAIL_RESAND_LINK:
            return "underline solid auto #175CD3";
    }
}

function getColor(type: LinkType) {
    switch (type) {
        case LinkType.PRIMARY_LINK:
            return "#667085";
        case LinkType.EMAIL_RESAND_LINK:
            return "#175CD3";
    }
}

export default function Link(props: LinkProps) {
    const { to, children, type } = props;

    const BaseLink = styled.a`
        color: ${getColor(type)};
        font-size: 14px;
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
        letter-spacing: -1px;
        line-height: 18px;
        cursor: pointer;
        
        text-decoration: ${getTextDecoration(type)};
    `; 

    return (
        <BaseLink href={to}>{children}</BaseLink>
    )
}