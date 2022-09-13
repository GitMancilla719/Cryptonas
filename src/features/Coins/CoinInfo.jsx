import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CoinNotFound from "../404/CoinNotFound copy";
import { getCoinInfo } from "./CoinSlice";

const CoinInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const CoinData = useSelector((state) => state.CoinSlice);

  useEffect(() => {
    if (CoinData.status === "idle") {
      dispatch(getCoinInfo(id));
    }
  }, [CoinData.status, dispatch, id]);

  // console.log("CoinData", CoinData);
  return (
    <div>
      {CoinData.status === "failed" ? <CoinNotFound /> : <div>test</div>}
    </div>
  );
};

export default CoinInfo;
