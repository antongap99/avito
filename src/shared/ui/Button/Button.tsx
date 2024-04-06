import cn from 'classnames';
import { type ButtonHTMLAttributes, type ReactNode } from 'react';
import style from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'background_inverted'

}

export enum ButtonSize {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    children: ReactNode
    square?: boolean,
    size?: ButtonSize
}
export const Button = (props: ButtonProps) => {
    const {
        theme = ButtonTheme.BACKGROUND_INVERTED,
        className,
        children,
        square,
        size = ButtonSize.M,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [style[theme]]: true,
        [style.square]: !!square,
        [style[size]]: !!size,
    };

    return (
        <button
            type="button"
            className={cn(style.Button, ButtonTheme, className, 'button_style', mods)}
            {...otherProps}
        >
            {children}
        </button>
    );
};
