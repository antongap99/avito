import {StateSchema} from "app/providers/storeProvider/config/StateSchema";
import {FilterMoviesParams} from "./../types/types";

export const getFilterMoviesParams = (state: StateSchema):FilterMoviesParams => {

	const params: FilterMoviesParams = {
		page: state.moviesFilters.page,
		limit: state.moviesFilters.limit,
	}
	if(state.moviesFilters.searchName) {
		params.searchName = state.moviesFilters.searchName
	}
	if(state.moviesFilters.countryFilter) {
		params.countryFilter = state.moviesFilters.countryFilter
	}
	if(state.moviesFilters.yearFilter) {
		params.yearFilter = state.moviesFilters.yearFilter
	}
	return params
}

export const getMoviesFilters  = (state: StateSchema) => state.moviesFilters