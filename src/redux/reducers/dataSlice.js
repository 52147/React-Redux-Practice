import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../actions/dataActions";
const initialState = {
  message: "initial state",
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.message = "loading...";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.message = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.message = "Error occur when fetching data from backend";
      });
  },
});
export default dataSlice.reducer;
