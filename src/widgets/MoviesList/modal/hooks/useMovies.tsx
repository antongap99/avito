import {useAppDispatch, useAppSelector} from "app/providers/storeProvider/config/hooks/hooks";
import {getMovies, getLoading, getError} from "../selectors/selectors";
import {useEffect} from "react";
import {fetchMovies} from "../services/fetchMovies";

export interface FetchMoviesProps {
	page: number,
	limit: number,
	searchName?: string
	yearFilter?: number
	countryFilter?: string
}

export const useMovies = (params: FetchMoviesProps) => {
    const movies = useAppSelector(getMovies);
	const loading = useAppSelector(getLoading);
	const error = useAppSelector(getError);
	const dispatch = useAppDispatch()
	const {page,
		limit,
		yearFilter,
		countryFilter,
	} = params

	useEffect(() => {
		dispatch(fetchMovies(params));
	}, [
		page,
		limit,
		yearFilter,
		countryFilter,
	]);

	return {
		movies,
		loading,
		error,
	}
}