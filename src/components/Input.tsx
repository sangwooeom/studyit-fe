import styled from "styled-components";
import Text from "./Text";
import Grid from "./Grid";

export default function Input(props: InputProps) {
    const { label, placeholder, type, description } = props;

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
    
    function onInput(event: React.FormEvent<HTMLInputElement>) {
        if (props.onInput) props.onInput(event);
    }

    return (
        <Grid rowGap="8px">
            {label && <Text color='#667085' fontSize={16} lineHeight={20}>{label}</Text>}
            <Grid rowGap="6px">
                <BaseInput onInput={onInput} placeholder={placeholder || ''} type={type || 'text'}/>
                {description && <Text color="#667085" fontSize={14}>{description}</Text>}
            </Grid>
        </Grid>
    )
}