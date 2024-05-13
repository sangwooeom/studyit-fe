declare interface TextProps {
    lineHeight?: string;
    color?: string;
    fontSize?: string;
    textAlign?: "left" | "right" | "center" | "justify" | "initial" | "inherit";
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
    description?: string;
    errorMessage?: string;
    onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
    children: string;
}

declare interface GridProps {
    margin?: string;
    padding?: string;
    width?: string;
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "start" | "initial" | "inherit";
    gridAutoFlow?: "column" | "row" | "dense" | "row dense" | "column dense";
    rowGap?: string | "normal" | "initial" | "inherit";
    columnGap?: string | "normal" | "initial" | "inherit";
    border?: string;
    borderBottom?: string;
    borderRadius?: string;
    backgroundColor?: string;
    gridTemplateColumns?: string;
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
    id: string;
    password: string;
}

declare interface LoginResponse {
    accessToken: string;
    refreshToken: string;
}

declare interface ImageProps {
    type: ImageType;
}