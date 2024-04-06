import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/storeProvider/config/StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
        },
        devTools: true, // TODO в проде нужно убрать
        preloadedState: initialState,
    });
}
