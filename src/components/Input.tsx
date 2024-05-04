import styled from "styled-components";
import Text from "./Text";

export default function Input(props: InputProps) {
    const { label, placeholder } = props;

    const BaseInput = styled.input`
        border: 1px solid #E4E7EC;
        background-color: #FFFFFF;
        border-radius: 6px;
        padding: 14px 15px;
        font-size: 16px;
        color: #101828;

        &::placeholder {
            color: #98A2B3;
        }
    `;

    const Container = styled.div`
        display: grid;
        row-gap: 8px;
    `

    function onInput(event: React.FormEvent<HTMLInputElement>) {
        if (props.onInput) props.onInput(event);
    }

    return (
        <Container>
            {label && <Text color='#667085' fontSize={16} lineHeight={20}>{label}</Text>}
            <BaseInput onInput={onInput} placeholder={placeholder || ''}/>
        </Container>
    )
}