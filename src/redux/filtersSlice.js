// import { createSlice } from "@reduxjs/toolkit";
// import { statusFilters } from "./constants";

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// const filtersSlice = createSlice({
//   name: "filters",
//   initialState: filtersInitialState,
//   reducers: {
//     setStatusFilter(state, action) {
//       state.status = action.payload;
//     },
//   },
// });

// export const { setStatusFilter } = filtersSlice.actions;
// export const filtersReducer = filtersSlice.reducer;


// //================

// import { createSlice } from "@reduxjs/toolkit";

// const filtersInitialState = {
//   selectedCarBrand: null,
//   selectedPricePerHour: null,
//   mileageRange: { from: '', to: '' },
// };

// const filtersSlice = createSlice({
//   name: "filters",
//   initialState: filtersInitialState,
//   reducers: {
//     setSelectedCarBrand(state, action) {
//       state.selectedCarBrand = action.payload;
//     },
//     setSelectedPricePerHour(state, action) {
//       state.selectedPricePerHour = action.payload;
//     },
//     setMileageRange(state, action) {
//       state.mileageRange = action.payload;
//     },
//   },
// });

// export const {
//   setSelectedCarBrand,
//   setSelectedPricePerHour,
//   setMileageRange,
// } = filtersSlice.actions;

// export const filtersReducer = filtersSlice.reducer;

