import {createAsyncThunk} from '@reduxjs/toolkit';
import * as authService from '../services/authService';

export const loginAction = createAsyncThunk(
  'auth/login',
  async (data: any, {rejectWithValue}) => {
    try {
      const response = await authService.login(data);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || 'Login failed');
    }
  },
);

export const registerAction = createAsyncThunk(
  'auth/register',
  async (data: any, {rejectWithValue}) => {
    console.log('datadatadatadata', data);
    try {
      const response = await authService.register(data);
      console.log('responseresponseresponseresponse', response);
      return response.data;
    } catch (error: any) {
      console.log("errorerrorerror" , error?.response)
      return rejectWithValue(error.response?.data || 'Registration failed');
    }
  },
);
