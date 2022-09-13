import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { COINGECKO_BASE_URL } from "../../common/utils/baseURL";

export const getCoinInfo = createAsyncThunk("Coins/getCoinInfo", async (id) => {
  // ALWAYS MATCH URL FOR PESO AND DOLLAR
  const response = await axios.get(`${COINGECKO_BASE_URL}/coins/${id}`);

  return response.data;
});

const CoinSlice = createSlice({
  name: "Coins",
  initialState: {
    data: null,
    status: "idle",
  },
  reducers: {
    reset: (state) => {
      state.data = null;
      state.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCoinInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCoinInfo.fulfilled, (state, action) => {
        state.status = "success";
        state.data = action.payload;
      })
      .addCase(getCoinInfo.rejected, (state) => {
        state.status = "failed";
        state.data = null;
      });
  },
});

export const { reset } = CoinSlice.actions;

export default CoinSlice;
