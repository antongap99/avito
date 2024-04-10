import cn from "classnames";
import style from './MoviePage.module.scss'
import {useParams} from "react-router-dom";

interface  MoviePageProps {
    className?: string;

}

const MoviePage = ({className}: MoviePageProps) =>{
	const {moveId} = useParams()
    return  (
        <div className={cn(style.MoviePage)}>

        </div>
    )
}

export default MoviePage;

