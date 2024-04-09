import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

interface Movies {

}

interface MoviesAsyncThunkProps {
	params: string
}

export const fetchRandomMovie = createAsyncThunk<Movies, MoviesAsyncThunkProps>(
	'movies/fetchRandomMovie',
	async (asyncData ,{ rejectWithValue }) => {
		try {
			const response = await axios.get(`${process.env.BASE_URL}movie/random`, {
				headers: {
					'X-API-KEY': process.env.API_TOKEN,
					'accept': 'application/json',
				}
			});

			if (!response.data) {
				throw new Error('Error');
			}

			return response.data;
		} catch (e) {

		}


	}
);