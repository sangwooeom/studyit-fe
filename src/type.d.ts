declare interface TextProps {
    lineHeight?: number;
    color?: string;
    fontSize?: number;
    textAlign?: "left" | "right" | "center" | "justify" | "initial" | "inherit";
}

declare interface HeadingProps {
    lineHeight?: number;
    color?: string;
    fontSize?: number;
}

declare interface InputProps {
    label?: string;
    placeholder?: string;
    type?: "text" | "password";
    description?: string;
    onInput?: (event: React.FormEvent<HTMLInputElement>) => void;
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
    width?: string;
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "initial" | "inherit";
    gridAutoFlow?: "column" | "row" | "dense" | "row dense" | "column dense";
    rowGap?: string | "normal" | "initial" | "inherit";
    columnGap?: string | "normal" | "initial" | "inherit";
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