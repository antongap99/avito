import {StateSchema} from "app/providers/storeProvider/config/StateSchema";

export const getMovies = (state: StateSchema) => state.moviesList.movies;
export const getTotal = (state: StateSchema) => state.moviesList.total;
export const getPages = (state: StateSchema) => state.moviesList.pages;

export const getLoading = (state: StateSchema) => state.moviesList.loading;

export const getError = (state: StateSchema) => state.moviesList.error;