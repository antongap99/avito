import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {MoviesFilterSchema} from "../types/types";

const initialState: MoviesFilterSchema = {
	limit: 10,
	searchName: '',
	yearFilter: null,
	countryFilter:  null,
	isLoading: false,
	isError: false,
	page: 1
};

export const moviesFiltersSlice = createSlice({
	name: 'moviesFilters',
	initialState,
	reducers: {
		setSearchName: (state, action: PayloadAction<string>) => {
			state.searchName = action.payload;
		},
		setLimit(state, action: PayloadAction<number>){
			state.limit = action.payload
		},
		setYearFilter(state, action: PayloadAction<number | null>){
			state.yearFilter = action.payload
		},
		clearYearFilter(state){
			state.yearFilter = null
		},
		setCountryFilter(state, action: PayloadAction<string>){
			state.countryFilter = action.payload
		},
		clearCountryFilter(state){
			state.countryFilter = null
		},
		// FIXME переместить в moviesPaginations
		setPage(state, action: PayloadAction<number>){
			state.page = action.payload
		},
	},

});

export const { actions: moviesFiltersActions, reducer: moviesFiltersReducer } = moviesFiltersSlice;
