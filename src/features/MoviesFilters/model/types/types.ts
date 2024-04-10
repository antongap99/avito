export interface MoviesFilterSchema {
	limit: number,
	searchName: string,
	yearFilter: number | null,
	countryFilter:  string | null,
	isLoading: boolean,
	isError: boolean,
	ascending?: boolean
	page: number
}


export interface FilterMoviesParams {
	page: number,
	limit: number,
	searchName?: string
	yearFilter?: number
	countryFilter?: string
}