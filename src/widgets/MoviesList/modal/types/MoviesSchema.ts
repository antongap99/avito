import {MovieData} from "widgets/MoviesList/modal/api/types/types";

export interface MoviesSchema {
	movies:  MovieData[],
	total: null | number,
	pages: null | number,
	loading: boolean,
	error: null | string
}