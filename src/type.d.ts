declare interface TextProps {
    lineHeight?: string;
    color?: string;
    fontSize?: string;
    fontWeight?: string;
    textAlign?: "left" | "right" | "center" | "justify" | "initial" | "inherit";
    margin?: string;
    children?: React.ReactNode;
}

declare interface HeadingProps {
    lineHeight?: string;
    color?: string;
    fontSize?: string;
    children?: React.ReactNode;
}

declare interface InputProps {
    label?: string;
    placeholder?: string;
    type: "text" | "password";
    validation?: ValidationType;
    description?: string;
    errorMessage?: string;
    onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.FocusEvent<HTMLInputElement, Element>) => void;
    validate?: (value: string) => boolean;
}

declare interface ButtonProps {
    type: ButtonType;
    disabled?: boolean;
    children: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

declare interface LinkProps {
    to?: string;
    type: LinkType;
    children?: string;
}

declare interface GridProps {
    margin?: string;
    padding?: string;
    width?: string;
    height?: string;
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "start" | "initial" | "inherit";
    gridAutoFlow?: "column" | "row" | "dense" | "row dense" | "column dense";
    rowGap?: string | "normal" | "initial" | "inherit";
    columnGap?: string | "normal" | "initial" | "inherit";
    border?: string;
    borderBottom?: string;
    borderRadius?: string;
    backgroundColor?: string;
    gridTemplateColumns?: string;
    boxSizing?: "content-box" | "border-box" | "inherit" | "initial" | "revert" | "revert-layer" | "unset";
    children?: React.ReactNode;
}

declare interface PrevButtonProps {
    to?: string;
}

declare interface AuthFormProps {
    isShowPrevButton?: boolean;
    to?: string;
    title: string;
    description: React.ReactNode;
    children?: React.ReactNode;
}

declare interface IconButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

declare interface LoginRequest {
    email: string;
    password: string;
}

declare interface LoginResponseData {
    accessToken: string;
    refreshToken: string;
}

declare interface ImageProps {
    type: ImageType;
}

declare interface ModalProps {
    width: string;
    height: string;
    children?: React.ReactNode;
}

declare interface ErrorData {
    error: string;
    message: string;
    path: string;
    status: number;
    timestampe: number;
}

declare interface CheckResult {
    result: boolean;
    message?: string;
}

declare interface InfoValidation {
    [email: string]: ValidationType,
    [password: string]: ValidationType,
    [passwordConfirm: string]: ValidationType,
    [nickname: string]: ValidationType
}

declare interface JoinRequestData {
    [email: string]: string,
    [password: string]: string,
    [nickname: string]: string
}