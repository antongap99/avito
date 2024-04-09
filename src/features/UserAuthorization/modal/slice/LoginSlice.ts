import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginByUserName } from '../services/loginByUsername/loginByUsername';
import { LoginSchema } from '../types/LoginSchema';

const initialState: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
	    setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
	    },
    },
    extraReducers: (builder) => {
	    builder.addCase(loginByUserName.pending, (state, action) => {
            state.error = undefined;
            state.isLoading = true;
	    })
	    .addCase(loginByUserName.fulfilled, (state, action) => {
		    state.isLoading = false;
	    })
	    .addCase(loginByUserName.rejected, (state, action) => {
		    state.isLoading = false;
		    state.error = action.payload as string;
	    });
    },

});

export const { actions: loginActions, reducer: loginReducer } = loginSlice;
