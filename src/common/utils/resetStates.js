import { resetCoins } from "../../features/Coins/CoinSlice";
import { useDispatch } from "react-redux";

const ResetState = (location) => {
  const dispatch = useDispatch();
  if (location === "/" || location === "/coins" || location === "/exchanges") {
    dispatch(resetCoins());
  }
};

export default ResetState;
