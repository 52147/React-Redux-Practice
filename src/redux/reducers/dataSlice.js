import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../actions/dataActions';

const initialState = {
  message: '132456',
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.message = 'Loading...';
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.message = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.message = 'Error occurred while fetching data.';
      });
  },
});

export default dataSlice.reducer;
