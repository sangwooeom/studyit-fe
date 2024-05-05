import styled from "styled-components"
import Grid from "./Grid";
import PrevButton from "./PrevButton";
import Heading from "./Heading";
import Text from "./Text";

export default function AuthForm(props: AuthFormProps) {
    const { isShowPrevButton, to, title, description, children } = props;

    const Container = styled(Grid)`
        margin: 80px auto 0 auto;
        width: 416px;
        row-gap: 40px;
    `;

    return (
        <Container>
            {isShowPrevButton && <div><PrevButton to={to}/></div>}
            <Grid rowGap="40px" margin="0 auto" width='400px'>
                <Grid rowGap="10px">
                    <Heading>{title}</Heading>
                    <Text lineHeight={22} color="#667085">{description}</Text>
                </Grid>
                {children}
            </Grid>
        </Container>
    )
}