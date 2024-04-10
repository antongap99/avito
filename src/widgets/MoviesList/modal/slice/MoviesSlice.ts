import {fetchMovies} from "widgets/MoviesList/modal/services/fetchMovies";
import {createSlice} from "@reduxjs/toolkit";
import {MoviesSchema} from "widgets/MoviesList";
import {MockData} from "widgets/MoviesList/modal/api/MockData";


const initialState: MoviesSchema = {
	movies: MockData.docs,
	loading: false,
	error: null,
	total: null,
	pages: null,
}


const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchMovies.pending, (state, action) => {
			state.error = null;
			state.loading = true;
		})
		.addCase(fetchMovies.fulfilled, (state, action) => {

			state.loading = false;
			state.movies = action.payload.docs;
			state.total = action.payload.total;
			state.pages = action.payload.pages;
		})
		.addCase(fetchMovies.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload as string;
		});
	},

});

export const { actions: moviesActions, reducer: moviesReducer } = moviesSlice;