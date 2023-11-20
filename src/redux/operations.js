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
  async ({ page, limit, append }, thunkAPI) => {
    try {
      const url = new URL('/cars', axios.defaults.baseURL);
      url.searchParams.append('page', page);
      url.searchParams.append('limit', limit);

      const { data } = await axios.get(url.toString());

      if (append) {
        return data; // повертаємо тільки нові дані, якщо append === true
      } else {
        return thunkAPI.getState().cars.concat(data); // поєднуємо існуючи дані з новими
      }
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// //=============
// export const fetchFavorites = createAsyncThunk(
//   'favorites/fetchFavorites',
//   async (_, thunkAPI) => {
//     try {
//       const url = new URL('/favorites', axios.defaults.baseURL);
//       const { data } = await axios.get(url.toString());
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
// // Предположим, что у вас также есть действие для добавления избранной машины
// export const addFavorite = createAsyncThunk(
//   'favorites/addFavorite',
//   async (car, thunkAPI) => {
//     try {
//       const url = new URL('/favorites', axios.defaults.baseURL);
//       const { data } = await axios.post(url.toString(), car);
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

// // Предположим, что у вас также есть действие для удаления избранной машины
// export const deleteFavorite = createAsyncThunk(
//   'favorites/deleteFavorite',
//   async (carId, thunkAPI) => {
//     try {
//       const url = new URL(`/favorites/${carId}`, axios.defaults.baseURL);
//       const { data } = await axios.delete(url.toString());
//       return data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );

