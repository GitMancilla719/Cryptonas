import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { COINGECKO_BASE_URL } from "../../common/utils/baseURL";

export const getTrendingCoins = createAsyncThunk(
  "dashboard/getTrendingCoins",
  async () => {
    // ALWAYS MATCH URL FOR PESO AND DOLLAR
    const responsePHP = await axios.get(
      `${COINGECKO_BASE_URL}/coins/markets?vs_currency=php&ids=bitcoin,ethereum,tether,smooth-love-potion,axie-infinity,ronin,pegaxy-stone`
    );

    const responseUSD = await axios.get(
      `${COINGECKO_BASE_URL}/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,tether,smooth-love-potion,axie-infinity,ronin,pegaxy-stone`
    );

    const combinedData = [];
    if (responsePHP.data != null || responsePHP.data !== undefined) {
      for (let index = 0; index <= responsePHP.data.length - 1; index++) {
        if (responsePHP.data[index].name === responseUSD.data[index].name) {
          const test = {
            symbol: responsePHP.data[index].symbol,
            name: responsePHP.data[index].name,
            image: responsePHP.data[index].image,

            peso_current_price: responsePHP.data[index].current_price,
            dollar_current_price: responseUSD.data[index].current_price,

            peso_market_cap_change_percentage_24h:
              responsePHP.data[index].market_cap_change_percentage_24h,
            dollar_market_cap_change_percentage_24h:
              responseUSD.data[index].market_cap_change_percentage_24h,

            peso_price_change_percentage_24h:
              responsePHP.data[index].price_change_percentage_24h,
            dollar_price_change_percentage_24h:
              responseUSD.data[index].price_change_percentage_24h,
          };

          combinedData.push(test);
        } else {
          break;
        }
      }
    }

    return combinedData;
  }
);

export const getTop10Crypto = createAsyncThunk(
  "dashboard/getTop10Crypto",
  async () => {
    // ALWAYS MATCH URL FOR PESO AND DOLLAR
    const responsePHP = await axios.get(
      `${COINGECKO_BASE_URL}/coins/markets?vs_currency=PHP&per_page=10`
    );

    const responseUSD = await axios.get(
      `${COINGECKO_BASE_URL}/coins/markets?vs_currency=USD&per_page=10`
    );

    const combinedData = [];
    if (responsePHP.data != null || responsePHP.data !== undefined) {
      for (let index = 0; index <= responsePHP.data.length - 1; index++) {
        if (responsePHP.data[index].name === responseUSD.data[index].name) {
          // const responsePHPRange = await axios.get(
          //   `${COINGECKO_BASE_URL}/coins/${responsePHP.data[index].id}/market_chart?vs_currency=usd&days=6&interval=daily`
          // );

          const responseUSDRange = await axios.get(
            `${COINGECKO_BASE_URL}/coins/${responsePHP.data[index].id}/market_chart?vs_currency=usd&days=30&interval=daily`
          );

          // console.log("HOHOY", responsePHPRange.data.prices);

          const test = {
            id: responsePHP.data[index].id,
            symbol: responsePHP.data[index].symbol,
            name: responsePHP.data[index].name,
            image: responsePHP.data[index].image,

            // price and price change %
            peso_current_price: responsePHP.data[index].current_price,
            dollar_current_price: responseUSD.data[index].current_price,

            peso_price_change_percentage_24h:
              responsePHP.data[index].price_change_percentage_24h,
            dollar_price_change_percentage_24h:
              responseUSD.data[index].price_change_percentage_24h,

            // volume total_volume
            peso_volume: responsePHP.data[index].total_volume,
            dollar_volume: responseUSD.data[index].total_volume,

            // market cap and market cap change %
            peso_market_cap: responsePHP.data[index].market_cap,
            dollar_market_cap: responseUSD.data[index].market_cap,

            // peso chart
            peso_chart: responseUSDRange.data.prices,

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

    return combinedData;
  }
);

export const getTop10Exchanges = createAsyncThunk(
  "dashboard/getTop10Exchanges",
  async () => {
    const response = await axios.get(
      `${COINGECKO_BASE_URL}/exchanges?per_page=10`
    );

    const exchangeData = response.data.map((obj) => {
      const data = {
        name: obj.name,
        year_established: obj.year_established,
        image: obj.image,
        trust_score: obj.trust_score,
        trade_volume_24h_btc: obj.trade_volume_24h_btc,
      };

      return data;
    });

    return exchangeData;
  }
);

const DashboardSlice = createSlice({
  name: "Dashboard",
  initialState: {
    top10crypto: {
      data: null,
      status: "idle",
    },
    trendingCoins: {
      data: null,
      status: "idle",
    },
    top10exchanges: {
      data: null,
      status: "idle",
    },
  },
  reducers: {
    resetDash: (state) => {
      state.top10crypto.data = null;
      state.trendingCoins.data = null;
      state.top10exchanges.data = null;

      state.top10crypto.status = "idle";
      state.trendingCoins.status = "idle";
      state.top10exchanges.status = "idle";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTrendingCoins.pending, (state) => {
        state.trendingCoins.status = "loading";
      })
      .addCase(getTrendingCoins.fulfilled, (state, action) => {
        state.trendingCoins.status = "success";
        state.trendingCoins.data = action.payload;
      })
      .addCase(getTrendingCoins.rejected, (state) => {
        state.trendingCoins.status = "failed";
        state.trendingCoins.data = null;
      })
      .addCase(getTop10Crypto.pending, (state) => {
        state.top10crypto.status = "loading";
      })
      .addCase(getTop10Crypto.fulfilled, (state, action) => {
        state.top10crypto.status = "success";
        state.top10crypto.data = action.payload;
      })
      .addCase(getTop10Crypto.rejected, (state) => {
        state.top10crypto.status = "failed";
        state.top10crypto.data = null;
      })
      .addCase(getTop10Exchanges.pending, (state) => {
        state.top10exchanges.status = "loading";
      })
      .addCase(getTop10Exchanges.fulfilled, (state, action) => {
        state.top10exchanges.status = "success";
        state.top10exchanges.data = action.payload;
      })
      .addCase(getTop10Exchanges.rejected, (state) => {
        state.top10exchanges.status = "failed";
        state.top10exchanges.data = null;
      });
  },
});

export const { resetDash } = DashboardSlice.actions;

export default DashboardSlice;
