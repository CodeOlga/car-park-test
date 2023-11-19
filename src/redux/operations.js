import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6556fefbbd4bcef8b611e2f0.mockapi.io';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  async ({ page, limit }, thunkAPI) => {
    try {
      const url = new URL('/cars', axios.defaults.baseURL);
      url.searchParams.append('page', page);
      url.searchParams.append('limit', limit);

      const { data } = await axios.get(url.toString());
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const fetchCarsMore = createAsyncThunk(
  'cars/fetchCarsMore',
  async ({ page, limit }, thunkAPI) => {
    try {
      const url = new URL('/cars', axios.defaults.baseURL);
      url.searchParams.append('page', page);
      url.searchParams.append('limit', limit);

      const { data } = await axios.get(url.toString());
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

