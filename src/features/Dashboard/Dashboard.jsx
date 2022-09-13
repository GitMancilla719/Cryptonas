import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getTrendingCoins,
  getTop10Crypto,
  getTop10Exchanges,
  // resetDash,
} from "./DashboardSlice";
import TopTrendingPinas from "./TopTrendingPinas";
import Top10Crypto from "./Top10Crypto";
import Top10Exchanges from "./Top10Exchanges";
import Hero from "./Hero";
import CoinMarquee from "../Marquee/CoinMarquee";

const Dashboard = () => {
  const dispatch = useDispatch();
  const DashboardData = useSelector((state) => state.DashboardSlice);
  // console.log(DashboardData);

  useEffect(() => {
    dispatch(getTrendingCoins());
    dispatch(getTop10Crypto());
    dispatch(getTop10Exchanges());
  }, [dispatch, DashboardData]);

  return (
    <div>
      <CoinMarquee />
      <Hero />
      <TopTrendingPinas />
      <Top10Crypto />
      <Top10Exchanges />
    </div>
  );
};

export default Dashboard;
