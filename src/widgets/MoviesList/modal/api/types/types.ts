export interface MoviesRequestData {
	docs: MovieData[],
	total: number,
	limit: number,
	page: number,
	pages: number
}

export interface MovieData 	{
	status: null,
	rating: {
		kp: number,
		imdb: number,
		filmCritics: number,
		russianFilmCritics: number,
		await: null
	},
	votes: {
		kp: number,
		imdb: number,
		filmCritics: number,
		russianFilmCritics: number,
		await: number
	},
	backdrop: {
		url: string,
		previewUrl: string
	},
	movieLength: number,
	id: number,
	type: "movie",
	name: string,
	description: string,
	year: number,
	poster: {
		url: string,
		previewUrl: string,
	},
	genres: {
		name: string
	}[],
	countries:{
		name: string
	}[],
	typeNumber: number,
	alternativeName: string,
	enName: null,
	names: {
		name: string,
		language?: string,
		type?: null | string
	}[],
	ratingMpaa: string,
	shortDescription: string,
	ticketsOnSale: boolean,
	ageRating: number,
	logo: {
		url: string
	},
	top10: null | number,
	top250: number | null,
	isSeries: boolean,
	seriesLength: null | number,
	totalSeriesLength: null | number
}