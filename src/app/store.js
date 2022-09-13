import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import CoinSlice from "../features/Coins/CoinSlice";
import DashboardSlice from "../features/Dashboard/DashboardSlice";
import MarqueeSlice from "../features/Marquee/MarqueeSlice";

export const store = configureStore({
  reducer: {
    DashboardSlice: DashboardSlice.reducer,
    MarqueeSlice: MarqueeSlice.reducer,
    CoinSlice: CoinSlice.reducer,
  },
  // middleware: [
  //   ...getDefaultMiddleware({
  //     serializableCheck: false,
  //   }),
  // ],
});
