import cn from "classnames";
import style from './MoviesFilters.module.scss'
import {moviesFiltersActions} from "../model/slice/moviesFiltersSlice";
import {useAppDispatch, useAppSelector} from "app/providers/storeProvider/config/hooks/hooks";
import {getMoviesFilters} from "../model/selectors/getFilterMovies";

interface  MoviesFiltersProps {
    className?: string;

}

export const MoviesFilters = ({ className }: MoviesFiltersProps) => {
	const dispatch = useAppDispatch();
	const moviesFilters = useAppSelector(getMoviesFilters)

	const handleSearchNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(moviesFiltersActions.setSearchName(event.target.value));
	};

	const handleYearFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const year = parseInt(event.target.value);
		dispatch(moviesFiltersActions.setYearFilter(isNaN(year) ? null : year));
	};

	const handleCountryFilterChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		dispatch(moviesFiltersActions.setCountryFilter(event.target.value));
	};

	const handleClearYearFilter = () => {
		dispatch(moviesFiltersActions.clearYearFilter());
	};

	const handleClearCountryFilter = () => {
		dispatch(moviesFiltersActions.clearCountryFilter());
	};

	return (
		<div className={cn(style.MoviesFilters, className)}>
			<h2 className={style.filterTitle}>Фильтры</h2>
			<div className={style.filterGroup}>
				<label htmlFor="yearFilter" className={style.filterLabel}>
					Год выпуска:
				</label>
				<input
					id="yearFilter"
					type="number"
					value={moviesFilters.yearFilter || ''}
					onChange={handleYearFilterChange}
					className={style.filterInput}
				/>
				<button onClick={handleClearYearFilter} className={style.clearButton}>
					Очистить
				</button>
			</div>
			<div className={style.filterGroup}>
				<label htmlFor="countryFilter" className={style.filterLabel}>
					Страна:
				</label>
				<input
					id="countryFilter"
					type="text"
					value={moviesFilters.countryFilter || ''}
					onChange={handleCountryFilterChange}
					className={style.filterInput}
				/>
				<button
					onClick={handleClearCountryFilter}
					className={style.clearButton}
				>
					Очистить
				</button>
			</div>
		</div>
	);
};

