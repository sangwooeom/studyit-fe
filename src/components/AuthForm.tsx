import Grid from "./Grid";
import Heading from "./Heading";
import Text from "./Text";
import Link from "./Link";
import { LinkType } from "../enum";

export default function AuthForm(props: AuthFormProps) {
    const { isShowPrevButton, to, title, description, children } = props;

    return (
        <Grid margin="80px auto 0 auto" width="416px" rowGap="40px">
            {isShowPrevButton && <div><Link type={LinkType.PREV_LINK} to={to}/></div>}
            <Grid rowGap="40px" margin="0 auto" width="400px">
                <Grid rowGap="10px">
                    <Heading fontSize="32px" lineHeight="40px" color="black">{title}</Heading>
                    <Text lineHeight="22px" color="gray-500" fontSize="14px">{description}</Text>
                </Grid>
                {children}
            </Grid>
        </Grid>
    )
}