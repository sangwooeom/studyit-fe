import { ImageType, LinkType } from "../enum";
import styles from '../scss/components/Link.module.scss';
import cn from "classnames";
import { Link as RouterLink } from "react-router-dom";
import Image from "./Image";
import Text from "./Text";

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
                    [styles['link--prev-link']]: type === LinkType.PREV_LINK,
                }
            )} 
            to={to || ''}
        >
            {type === LinkType.PREV_LINK && 
                <>
                    <Image type={ImageType.PREV_BUTTON_IMG} />
                    <Text margin="2px 0" color="blue" fontWeight="bold" fontSize="16px" lineHeight="20px">이전으로</Text>
                </>
            }
            {type !== LinkType.PREV_LINK && children}
        </RouterLink>)
}