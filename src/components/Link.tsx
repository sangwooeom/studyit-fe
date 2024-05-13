import { LinkType } from "../enum";
import styles from '../scss/components/Link.module.scss';
import cn from "classnames";
import { Link as RouterLink } from "react-router-dom";

export default function Link(props: LinkProps) {
    const { to, children, type } = props;

    return (
        <RouterLink 
            className={cn(
                styles['link'],
                {
                    [styles['link--primary']]: type === LinkType.PRIMARY_LINK,
                    [styles['link--email']]: type === LinkType.EMAIL_RESAND_LINK,
                    [styles['link--header-link']]: type === LinkType.HEADER_LINK,
                }
            )} 
            to={to || ''}
        >
            {children}
        </RouterLink>)
}