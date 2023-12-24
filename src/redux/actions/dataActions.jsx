import {createAsyncThunk} from "@reduxjs/toolkit"
import {fetchDataFromAPI} from "../../services/service"

export const fetchData = createAsyncThunk("data/fetchData",
  async () => {
    const response = await fetchDataFromAPI();
    return response;
  }
)