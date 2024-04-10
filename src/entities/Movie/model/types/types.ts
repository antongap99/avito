
export interface Movie {
	id: number
	type: "movie" | "tv-series",
	name: string,
	description: string
}

export interface MovieSchema {
	currentMovie: Movie | null
}