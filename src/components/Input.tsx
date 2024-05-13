import { useState } from "react";
import styles from '../scss/components/input.module.scss';
import cn from "classnames";
import visibilityOffIcon from '../img/ic_visibility_off_24dp.svg';
import visibilityOnIcon from '../img/ic_visibility_on_24dp.svg';
import { ValidationType } from "../enum";
import Grid from "./Grid";
import Text from "./Text";

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
            {label && <Text color="gray-500" fontSize="16px" lineHeight="20px">{label}</Text>}
            <Grid rowGap="6px">
                {type === "text" && 
                    <input
                        className={cn(
                            styles['input'], 
                            styles['input--text'],
                            {
                                [styles['right']]: validation === ValidationType.VALIDATE,
                                [styles['warning']]: validation === ValidationType.NON_VALIDATE
                            }
                        )}
                        onInput={onInput} 
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder={placeholder || ''} 
                        type="text"
                    />
                }
                {type === "password" && 
                <Grid gridAutoFlow="column" gridTemplateColumns="auto 54px" borderRadius="6px" border="1px solid gray-200">
                    <input 
                        className={cn(
                            styles['input'], 
                            styles['input--password'],
                            {
                                [styles['right']]: validation === ValidationType.VALIDATE,
                            }
                        )}
                        onInput={onInput} 
                        onChange={onChange}
                        onBlur={onBlur}
                        placeholder={placeholder || ''} 
                        type={hide ? "password" : "text"} 
                    />
                    <button 
                        className={cn(
                            styles['iconBtn'],
                            {
                                [styles['right']]: validation === ValidationType.VALIDATE,
                            }
                        )}
                        onClick={() => setHide(!hide)}
                    >
                        <img src={getIconImg(hide)} />
                    </button>
                </Grid>}
                {description && <Text color="gray-500" fontSize="14px">{description}</Text>}
                {validation === ValidationType.NON_VALIDATE && errorMessage && <Text color="red" fontSize="14px">{errorMessage}</Text>}
            </Grid>
        </Grid>
    )
}