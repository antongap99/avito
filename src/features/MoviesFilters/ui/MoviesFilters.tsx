import cn from "classnames";
import style from './MoviesFilters.module.scss'
import {moviesFiltersActions} from "../model/slice/moviesFiltersSlice";
import {useAppDispatch, useAppSelector} from "app/providers/storeProvider/config/hooks/hooks";
import {getMoviesFilters} from "../model/selectors/getFilterMovies";
import {ChangeEvent} from "react";
import {MovieFilter} from "features/MoviesFilters/ui/MovieFilter";

interface  MoviesFiltersProps {
    className?: string;

}

export const MoviesFilters = ({ className }: MoviesFiltersProps) => {
	const dispatch = useAppDispatch();
	const moviesFilters = useAppSelector(getMoviesFilters)

	const handleSearchNameChange = (event: ChangeEvent<HTMLInputElement>) => {
		dispatch(moviesFiltersActions.setSearchName(event.target.value));
	};

	const handleYearFilterChange = (year: number | null) => {
		dispatch(moviesFiltersActions.setYearFilter(year));
	};

	const handleLimitChange = (limit: number) => {
		dispatch(moviesFiltersActions.setLimit(limit));
	};

	const handleCountryFilterChange = (
		country: string
	) => {
		dispatch(moviesFiltersActions.setCountryFilter(country));
	};

	const handleClearYearFilter = () => {
		dispatch(moviesFiltersActions.clearYearFilter());
	};

	const handleClearCountryFilter = () => {
		dispatch(moviesFiltersActions.clearCountryFilter());
	};

	const handleClearLimit = () => {
		// TODO Сделать под каждый фильтр компонент и д
		dispatch(moviesFiltersActions.setLimit(10));
	}

	return (
		<div className={cn(style.MoviesFilters, className)}>
			<h2 className={style.filterTitle}>Фильтры</h2>
			<MovieFilter
				id='yearFilter'
				value={moviesFilters.yearFilter}
			    clearStoreValue={handleClearYearFilter}
			    updateStoreValue={handleYearFilterChange}
				label='Год выпуска:'
			/>
			<MovieFilter
				id='countryFilter'
				value={moviesFilters.countryFilter}
				clearStoreValue={handleClearCountryFilter}
				updateStoreValue={handleCountryFilterChange}
				label='Страна выпуска'
			/>
			<MovieFilter
				id='limit'
				value={moviesFilters.limit}
				clearStoreValue={handleClearLimit}
				updateStoreValue={handleLimitChange}
				label='Лимит фильмов на странице'
			/>
		</div>
	);
};

