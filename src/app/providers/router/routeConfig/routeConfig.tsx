import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/mainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import {MoviePage} from "pages/MoviePage";
import {LoginPage} from "pages/LoginPage";

export enum AppRoutes {
    MAIN = 'main',
    NOT_FOUND='not_found',
	MOVIE = 'movie',
    MOVIE_RANDOM = 'movie-random',
	LOGIN = 'login'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
	[AppRoutes.MOVIE]: '/movie/:movieId',
	[AppRoutes.MOVIE_RANDOM]: '/movie-random',
	[AppRoutes.NOT_FOUND]: '*',
	[AppRoutes.LOGIN]: '/login',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },
	[AppRoutes.MOVIE]: {
		path: RoutePath.movie,
		element: <MoviePage />,
	},
	[AppRoutes.MOVIE_RANDOM]: {
		path: RoutePath["movie-random"],
		element: <MoviePage />,
	},
	[AppRoutes.LOGIN]: {
		path: RoutePath.login,
		element: <LoginPage />,
	},
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },

};
