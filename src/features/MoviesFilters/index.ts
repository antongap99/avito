import {MoviesFilters} from "./ui/MoviesFilters";
import  {MoviesFilterSchema, FilterMoviesParams} from './model/types/types'
import {moviesFiltersActions, moviesFiltersReducer} from './model/slice/moviesFiltersSlice'
import {SearchMovies} from './ui/SearchMovies'

export {
	MoviesFilters,
	MoviesFilterSchema,
	moviesFiltersActions,
	moviesFiltersReducer,
	FilterMoviesParams,
	SearchMovies
}