import cn from "classnames";
import style from './MoviesList.module.scss'
import {useEffect, useState} from "react";
import {useAppDispatch} from "app/providers/storeProvider/config/hooks/hooks";
import {moviesActions} from "widgets/MoviesList";
import {fetchRandomMovie} from "../modal/services/fetchMovies";

interface  MoviesListProps {
    className?: string;

}

export const MoviesList = ({className}: MoviesListProps) =>{
	// TODO добавить хук
	const [movies, setMovies] = useState([])
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchRandomMovie({params: 's'}));
	}, []);

    return  (
        <div className={cn(style.MoviesList)}>

        </div>
    )
}

