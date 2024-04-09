import { StateSchema } from 'app/providers/storeProvider/config/StateSchema';

export const loginSelector = (state: StateSchema) => state?.loginForm;
