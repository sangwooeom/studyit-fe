import Text from "./Text";
import Grid from "./Grid";
import { useState } from "react";
import styles from '../scss/components/input.module.scss';
import cn from "classnames";
import visibilityOffIcon from '../img/ic_visibility_off_24dp.svg';
import visibilityOnIcon from '../img/ic_visibility_on_24dp.svg';
import { ValidationType } from "../enum";

function getIconImg(hide: boolean): string {
    return hide ? visibilityOffIcon : visibilityOnIcon;
}


export default function Input(props: InputProps) {
    const { label, placeholder, type, description, errorMessage } = props;

    const [hide, setHide] = useState(true);
    const [validation, setValidation] = useState(ValidationType.NORMAL);
    
    function onInput(event: React.FormEvent<HTMLInputElement>) {
        if (props.onInput) props.onInput(event);
    }

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        if (props.onChange) props.onChange(event);
    }

    function onBlur(event: React.FocusEvent<HTMLInputElement, Element>) {
        if (props.onBlur) props.onBlur(event);
        validate(event.currentTarget.value);
    }

    function validate(value: string) {
        if (props.validate) {
            if (props.validate(value)) setValidation(ValidationType.VALIDATE);
            else setValidation(ValidationType.NON_VALIDATE);
        }
    }

    return (
        <Grid rowGap="8px">
            {label && <Text color='#667085' fontSize={16} lineHeight={20}>{label}</Text>}
            <Grid rowGap="6px">
                {type === "text" && 
                    <input
                        className={cn(
                            styles.commonInput, 
                            styles.textInput,
                            validation === ValidationType.VALIDATE && styles.validation,
                            validation === ValidationType.NON_VALIDATE && styles.nonVaidation
                        )}
                        onInput={onInput} 
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder={placeholder || ''} 
                        type="text"
                    />
                }
                {type === "password" && 
                <Grid 
                    gridAutoFlow="column" 
                    gridTemplateColumns="auto 54px" 
                    border={validation === ValidationType.NON_VALIDATE ? "1px solid #F36355" : "1px solid #E4E7EC"} 
                    borderRadius="6px"
                    backgroundColor="#000000">
                    <input 
                        className={cn(
                            styles.commonInput, 
                            styles.passwordInput,
                            validation === ValidationType.VALIDATE && styles.validation
                        )}
                        onInput={onInput} 
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder={placeholder || ''} 
                        type={hide ? "password" : "text"} 
                    />
                    <button 
                        className={cn(
                            styles.iconButton,
                            validation === ValidationType.VALIDATE && styles.validation
                        )}
                        onClick={() => setHide(!hide)}
                    >
                        <img src={getIconImg(hide)} />
                    </button>
                </Grid>}
                {description && <Text color="#667085" fontSize={14}>{description}</Text>}
                {validation === ValidationType.NON_VALIDATE && errorMessage && <Text color="#F36355" fontSize={14}>{errorMessage}</Text>}
            </Grid>
        </Grid>
    )
}