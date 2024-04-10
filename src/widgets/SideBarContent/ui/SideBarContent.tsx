import cn from "classnames";
import style from './SideBarContent.module.scss'
import {MoviesFilters} from "features/MoviesFilters";

interface  SideBarContentProps {
    className?: string;

}

export const SideBarContent = ({className}: SideBarContentProps) =>{
    return  (
        <div className={cn(style.SideBarContent)}>
		    <MoviesFilters/>
        </div>
    )
}

