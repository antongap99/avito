import cn from "classnames";
import style from './MoviesList.module.scss'
import {useMovies} from "../modal/hooks/useMovies";
import { Card } from 'antd';
import {Loader} from "shared/ui/Loader/Loader";
import {useAppSelector} from "app/providers/storeProvider/config/hooks/hooks";
import {getFilterMoviesParams} from "features/MoviesFilters/model/selectors/getFilterMovies";

interface  MoviesListProps {
    className?: string;
}

export const MoviesList = ({className}: MoviesListProps) =>{
	const params = useAppSelector(getFilterMoviesParams)
	const {movies, loading, error} = useMovies(params)

	if(loading) return (
		<div>
			<Loader/>
		</div>
	)
	// if(error) return <div>Error</div>

    return  (
		<div className={style.MoviesListWrapper}>
			<div className={cn(style.MoviesList)}>
				{
					movies.map(movie => {
						return (
							<div key={movie.id}>
								<Card
									hoverable
									style={{ width: 240 }}
									cover={
										<img
											alt={movie.name}
											src={movie.poster.url}
											style={{maxHeight: 250, minHeight: 250 }}
										/>
									}
								>
									<div className={style.movieContent}>
										<h3 className={style.MovieTitle}>{movie.name}</h3>
										<p className={style.MovieDescription}>{movie.description}</p>
									</div>
								</Card>
							</div>
						)
					})
				}
			</div>
		</div>

    )
}

