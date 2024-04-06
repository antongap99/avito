import cn from "classnames";
import style from './AppLink.module.scss'
import {FC, ReactNode} from "react";
import {Link, LinkProps} from "react-router-dom";

export enum AppLinkTheme {
    Primary= 'primary',
    Secondary = 'secondary',
}

interface  AppLinkProps  extends LinkProps{
    className?: string;
    children: ReactNode,
    to: string,
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props: AppLinkProps) =>{
    const {className,
        children,
        to,
        theme = AppLinkTheme.Primary,
        ...otherProps} = props;
    return  (
        <Link
            to={to}
            className={cn(style.AppLink, style[theme], className)}
            {...otherProps}
        >
            {children}
        </Link>
    )
}

