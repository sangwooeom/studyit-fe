import { useState } from "react";
import styles from '../scss/components/Input.module.scss';
import cn from "classnames";
import { ValidationType } from "../enum";
import Grid from "./Grid";
import Text from "./Text";

export default function Input(props: InputProps) {
    const { label, placeholder, type, description, errorMessage, validation } = props;

    const [hide, setHide] = useState(true);
    //const [validation, setValidation] = useState(ValidationType.NORMAL);
    
    function onInput(event: React.FormEvent<HTMLInputElement>) {
        if (props.onInput) props.onInput(event);
        // validate(event.currentTarget.value);
    }

    function onBlur(event: React.FocusEvent<HTMLInputElement, Element>) {
        if (props.onBlur) props.onBlur(event);
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
                        onBlur={onBlur}
                        placeholder={placeholder || ''} 
                        type="text"
                    />
                }
                {type === "password" && 
                <Grid 
                    gridAutoFlow="column" 
                    gridTemplateColumns="auto 54px" 
                    borderRadius="6px" 
                    border={validation === ValidationType.NON_VALIDATE ? "1px solid red" : "1px solid gray-200"}
                >
                    <input 
                        className={cn(
                            styles['input'], 
                            styles['input--password'],
                            {
                                [styles['right']]: validation === ValidationType.VALIDATE,
                            }
                        )}
                        onInput={onInput} 
                        onBlur={onBlur}
                        placeholder={placeholder || ''} 
                        type={hide ? "password" : "text"} 
                    />
                    <button 
                        className={cn(
                            styles['iconBtn'],
                            {
                                [styles['visibility-off']]: hide,
                                [styles['visibility-on']]: !hide,
                                [styles['right']]: validation === ValidationType.VALIDATE
                            }
                        )}
                        onClick={() => setHide(!hide)}
                    ></button>
                </Grid>}
                {description && <Text color="gray-500" fontSize="14px">{description}</Text>}
                {validation === ValidationType.NON_VALIDATE && errorMessage && <Text color="red" fontSize="14px">{errorMessage}</Text>}
            </Grid>
        </Grid>
    )
}