import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { COINGECKO_BASE_URL } from "../../common/utils/baseURL";

export const topGainersAndLosers = createAsyncThunk(
  "Marquee/topGainersAndLosers",
  async () => {
    const response = await axios.get(
      `${COINGECKO_BASE_URL}/coins/markets?vs_currency=usd`
    );

    const topGainers = response.data
      .map((data) => {
        const objdata = {
          id: data.id,
          symbol: data.symbol,
          price_change_percentage_24h: data.price_change_percentage_24h,
          current_price: data.current_price,
          image: data.image,
        };

        return objdata;
      })
      .sort(
        (a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h
      )
      .slice(0, 5);

    const topLosers = response.data
      .map((data) => {
        const objdata = {
          id: data.id,
          symbol: data.symbol,
          price_change_percentage_24h: data.price_change_percentage_24h,
          current_price: data.current_price,
          image: data.image,
        };

        return objdata;
      })
      .sort(
        (a, b) => a.price_change_percentage_24h - b.price_change_percentage_24h
      )
      .slice(0, 5);

    return { topGainers, topLosers };
  }
);

const MarqueeSlice = createSlice({
  name: "Marquee",
  initialState: {
    topGainers: null,
    topLosers: null,
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
      .addCase(topGainersAndLosers.pending, (state) => {
        state.status = "loading";
      })
      .addCase(topGainersAndLosers.fulfilled, (state, action) => {
        state.status = "success";
        state.topGainers = action.payload.topGainers;
        state.topLosers = action.payload.topLosers;
      })
      .addCase(topGainersAndLosers.rejected, (state) => {
        state.status = "failed";
        state.topGainers = null;
        state.topLosers = null;
      });
  },
});

export const { reset } = MarqueeSlice.actions;

export default MarqueeSlice;
