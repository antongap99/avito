import cn from "classnames";
import style from './MoviePage.module.scss'
import {useParams} from "react-router-dom";

interface  MoviePageProps {
    className?: string;
}

const MoviePage = ({className}: MoviePageProps) =>{
	const {movieId} = useParams()

    return  (
        <div className={cn(style.MoviePage)}>
	        Фильм с id: {movieId}
        </div>
    )
}

export default MoviePage;

