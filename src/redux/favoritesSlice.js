import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
    carStatus: {},
    isLoading: false,
    error: null,
  },

  reducers: {
    addFavorite(state, { payload }) {
      state.items.push(payload);
      state.carStatus[payload.id] = true;
    },
    deleteFavorite(state, { payload }) {
      state.items = state.items.filter((item) => item !== payload);
      state.carStatus[payload.id] = false;
    },
  },
});

export const { addFavorite, deleteFavorite } = favoritesSlice.actions;
export const favoritesReducer = favoritesSlice.reducer;



