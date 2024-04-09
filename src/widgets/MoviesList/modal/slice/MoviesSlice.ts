import {fetchRandomMovie} from "widgets/MoviesList/modal/services/fetchMovies";
import {createSlice} from "@reduxjs/toolkit";
import {MoviesSchema} from "widgets/MoviesList";


const initialState: MoviesSchema = {
	movies: null,
	loading: false,
	error: null
}

const moviesSlice = createSlice({
	name: 'movies',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchRandomMovie.pending, (state, action) => {
			state.error = null;
			state.loading = true;
		})
		.addCase(fetchRandomMovie.fulfilled, (state, action) => {
			state.loading = false;
		})
		.addCase(fetchRandomMovie.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload as string;
		});
	},

});

export const { actions: moviesActions, reducer: moviesReducer } = moviesSlice;