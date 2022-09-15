import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { COINGECKO_BASE_URL } from "../../common/utils/baseURL";

export const getCoinInfo = createAsyncThunk("Coins/getCoinInfo", async (id) => {
  // ALWAYS MATCH URL FOR PESO AND DOLLAR
  const response = await axios.get(`${COINGECKO_BASE_URL}/coins/${id}`);

  return response.data;
});

export const getTop100Crypto = createAsyncThunk("Coins/getTop100Crypto", async () => {
  // ALWAYS MATCH URL FOR PESO AND DOLLAR
  const responsePHP = await axios.get(
    `${COINGECKO_BASE_URL}/coins/markets?vs_currency=PHP&per_page=100`
  );

  // return responsePHP.data;

  const responseUSD = await axios.get(
    `${COINGECKO_BASE_URL}/coins/markets?vs_currency=USD&per_page=100`
  );

  const combinedData = [];
  if (responsePHP.data != null || responsePHP.data !== undefined) {
    for (let index = 0; index <= responsePHP.data.length - 1; index++) {
      if (responsePHP.data[index].name === responseUSD.data[index].name) {
        // const responsePHPRange = await axios.get(
        //   `${COINGECKO_BASE_URL}/coins/${responsePHP.data[index].id}/market_chart?vs_currency=usd&days=6&interval=daily`
        // );

        // const responseUSDRange = await axios.get(
        //   `${COINGECKO_BASE_URL}/coins/${responsePHP.data[index].id}/market_chart?vs_currency=usd&days=30&interval=daily`
        // );

        const test = {
          id: responsePHP.data[index].id,
          symbol: responsePHP.data[index].symbol,
          name: responsePHP.data[index].name,
          image: responsePHP.data[index].image,

          // price and price change %
          peso_current_price: responsePHP.data[index].current_price,
          dollar_current_price: responseUSD.data[index].current_price,

          peso_price_change_percentage_24h: responsePHP.data[index].price_change_percentage_24h,
          dollar_price_change_percentage_24h: responseUSD.data[index].price_change_percentage_24h,

          // volume total_volume
          peso_volume: responsePHP.data[index].total_volume,
          dollar_volume: responseUSD.data[index].total_volume,

          // market cap and market cap change %
          peso_market_cap: responsePHP.data[index].market_cap,
          dollar_market_cap: responseUSD.data[index].market_cap,

          // peso chart
          // peso_chart: responseUSDRange.data.prices,

          // peso_market_cap_change_percentage_24h:
          //   responsePHP.data[index].market_cap_change_percentage_24h,
          // dollar_market_cap_change_percentage_24h:
          //   responseUSD.data[index].market_cap_change_percentage_24h,

          // 24H high
          // peso_high_24h: responsePHP.data[index].high_24h,
          // dollar_high_24h: responseUSD.data[index].high_24h,

          // peso_low_24h: responsePHP.data[index].low_24h,
          // dollar_low_24h: responseUSD.data[index].low_24h,
        };

        combinedData.push(test);
      } else {
        break;
      }
    }
  }

  // console.log("CD", combinedData);
  return combinedData;
});

const CoinSlice = createSlice({
  name: "Coins",
  initialState: {
    CoinInfo: {
      data: null,
      status: "idle",
    },
    Top100Crypto: {
      data: null,
      status: "idle",
    },
  },
  reducers: {
    resetCoins: (state) => {
      state.CoinInfo.data = null;
      state.CoinInfo.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCoinInfo.pending, (state) => {
        state.CoinInfo.status = "loading";
      })
      .addCase(getCoinInfo.fulfilled, (state, action) => {
        state.CoinInfo.status = "success";
        state.CoinInfo.data = action.payload;
      })
      .addCase(getCoinInfo.rejected, (state) => {
        state.CoinInfo.status = "failed";
        state.CoinInfo.data = null;
      })
      .addCase(getTop100Crypto.pending, (state) => {
        state.Top100Crypto.status = "loading";
      })
      .addCase(getTop100Crypto.fulfilled, (state, action) => {
        state.Top100Crypto.status = "success";
        state.Top100Crypto.data = action.payload;
      })
      .addCase(getTop100Crypto.rejected, (state) => {
        state.Top100Crypto.status = "failed";
        state.Top100Crypto.data = null;
      });
  },
});

export const { resetCoins } = CoinSlice.actions;

export default CoinSlice;
