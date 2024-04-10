import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {MoviesRequestData} from "../api/types/types";
import {FetchMoviesProps} from "../hooks/useMovies";



export const fetchMovies = createAsyncThunk<MoviesRequestData, FetchMoviesProps>(
	'movies/fetchMovies',
	async (asyncData ,{ rejectWithValue }) => {
		try {
			const url = new URL(`${process.env.BASE_URL}movie`)

			for (const asyncDataKey in asyncData) {
				const key = asyncDataKey as keyof typeof asyncData ;
				const value = asyncData[key];

				// Проверяем, что ключ и значение не являются undefined
				if (value !== undefined && value !== '' && value !== null) {
					url.searchParams.set(asyncDataKey, String(value));
				}
			}
			const response = await axios.get(url.href, {
				headers: {
					'X-API-KEY': process.env.API_TOKEN,
					'accept': 'application/json',
				}
			});
			console.log('response', response.data)

			if (!response.data) {
				throw new Error('Error');
			}

			return response.data;
		} catch (e) {
			return rejectWithValue('Error')
		}


	}
);