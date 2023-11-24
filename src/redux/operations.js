import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6556fefbbd4bcef8b611e2f0.mockapi.io';

export const fetchCars = createAsyncThunk(
  'cars/fetchAll',
  // payload creator
  async ( page, { rejectWithValue }) => {
    try {
      const url = `/cars?page=${page}&limit=12`;
      const { data } = await axios.get(url);
      return data;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

