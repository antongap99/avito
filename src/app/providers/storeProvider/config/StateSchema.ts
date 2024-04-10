import {LoginSchema} from "features/UserAuthorization";
import {MoviesSchema} from "widgets/MoviesList";
import {MoviesFilterSchema} from "features/MoviesFilters";


export interface StateSchema {
	loginForm: LoginSchema,
	moviesList: MoviesSchema,
	moviesFilters: MoviesFilterSchema
}
