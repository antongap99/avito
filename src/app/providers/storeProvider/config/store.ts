import {combineReducers, configureStore} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider/config/StateSchema';
import {loginReducer} from "features/UserAuthorization";
import {moviesReducer } from "widgets/MoviesList";
import {moviesFiltersReducer} from "features/MoviesFilters";

const rootReducer = combineReducers({
	loginForm: loginReducer,
	moviesList: moviesReducer,
	moviesFilters: moviesFiltersReducer,
});

export function createReduxStore(initialState?: StateSchema) {
    return configureStore({
        reducer: rootReducer,
        devTools: true, // TODO в проде нужно убрать
        preloadedState: initialState,
    });
}

export type AppStore = ReturnType<typeof createReduxStore>;
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>
