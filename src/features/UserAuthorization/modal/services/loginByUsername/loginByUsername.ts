import { createAsyncThunk, PayloadAction, ThunkAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/User';
import { RootState } from '@reduxjs/toolkit/query';

export interface loginByUserNameProps {
	username: string,
	password: string
}

export const loginByUserName = createAsyncThunk<User, loginByUserNameProps>(
    'login/loginByUserName',
    async (authData, { rejectWithValue }) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', authData, {
                headers: {
                    authorization: 'fakeToken',
                },
            });

            if (!response.data) {
                throw new Error('Error');
            }

            return response.data;
        } catch (e) {
            return rejectWithValue(e);
        }
    },
);
