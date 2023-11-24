import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
    extraReducers: {
    [fetchCars.pending]: handlePending,
    [fetchCars.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items =
      state.items[0]?.id === payload[0]?.id
        ? payload
        : [...state.items, ...payload];
    },
    [fetchCars.rejected]: handleRejected,
  },
});

export const carsReducer = carsSlice.reducer;



