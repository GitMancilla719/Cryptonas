import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CoinNotFound from "../404/CoinNotFound copy";
import { getCoinInfo } from "./CoinSlice";
import SkeletonLoader from "../../common/components/SkeletonLoader";
import CoinChart from "./CoinChart";

const CoinInfo = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const CoinData = useSelector((state) => state.CoinSlice);

  useEffect(() => {
    if (CoinData.CoinInfo.status === "idle") {
      dispatch(getCoinInfo(id));
    }
  }, [CoinData, dispatch, id]);

  return (
    <div>
      {CoinData.CoinInfo.status === "success" || CoinData.CoinInfo.data != null ? (
        <div>
          {/* info  */}
          <div className="">
            <div className="mx-3 my-2 h-fit w-fit flex flex-col bg-amp-card p-5 border-2 border-amp-border rounded-lg">
              {/* coin */}
              <div className="flex flex-row items-center">
                <img src={CoinData.CoinInfo.data.image.large} alt="img" className="w-[20pt] mx-3" />
                <h1 className="font-bold text-2xl">
                  {CoinData.CoinInfo.data.symbol.toUpperCase()}{" "}
                  <span className="text-lg text-amp-subtext">{CoinData.CoinInfo.data.name}</span>
                </h1>
              </div>

              {/* price */}
              <div className="flex flex-row text-xl items-center my-2">
                {/* peso */}
                <p className="px-5 font-semibold">
                  ₱ {CoinData.CoinInfo.data.market_data.current_price.php.toLocaleString()}
                  <span
                    className={`${
                      CoinData.CoinInfo.data.market_data.price_change_percentage_24h_in_currency
                        .php > 0
                        ? "text-green-500 "
                        : "text-red-400 "
                    } px-2`}
                  >
                    <FontAwesomeIcon
                      icon={
                        CoinData.CoinInfo.data.market_data.price_change_percentage_24h_in_currency
                          .php > 0
                          ? faCaretUp
                          : faCaretDown
                      }
                    />{" "}
                    {CoinData.CoinInfo.data.market_data.price_change_percentage_24h_in_currency.php.toFixed(
                      3
                    )}
                    %
                  </span>
                </p>
                {/* usd */}
                <p className="px-5 font-semibold">
                  $ {CoinData.CoinInfo.data.market_data.current_price.usd.toLocaleString()}
                  <span
                    className={`${
                      CoinData.CoinInfo.data.market_data.price_change_percentage_24h_in_currency
                        .usd > 0
                        ? "text-green-500 "
                        : "text-red-400 "
                    } px-2`}
                  >
                    <FontAwesomeIcon
                      icon={
                        CoinData.CoinInfo.data.market_data.price_change_percentage_24h_in_currency
                          .usd > 0
                          ? faCaretUp
                          : faCaretDown
                      }
                    />{" "}
                    {CoinData.CoinInfo.data.market_data.price_change_percentage_24h_in_currency.usd.toFixed(
                      3
                    )}
                    %
                  </span>
                </p>
              </div>

              {/* data */}
              <div className="flex flex-row justify-between text-amp-subtext text-sm">
                <div className="mx-1 w-[400px]">
                  <div className="flex flex-row justify-between border-b border-b-gray-500 py-2 px-2">
                    <p>24H Price Change</p>
                    <p>$ {CoinData.CoinInfo.data.market_data.price_change_24h.toLocaleString()}</p>
                  </div>
                  <div className="flex flex-row justify-between border-b border-b-gray-500 py-2 px-2">
                    <p>24h Low / 24h High</p>
                    <p>
                      $ {CoinData.CoinInfo.data.market_data.low_24h.usd.toLocaleString()} / ${" "}
                      {CoinData.CoinInfo.data.market_data.high_24h.usd.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex flex-row justify-between border-b border-b-gray-500 py-2 px-2">
                    <p>Market Cap</p>
                    <p>$ {CoinData.CoinInfo.data.market_data.market_cap.usd.toLocaleString()}</p>
                  </div>
                  <div className="flex flex-row justify-between border-b border-b-gray-500 py-2 px-2">
                    <p>All Time Low / All Time High</p>${" "}
                    {CoinData.CoinInfo.data.market_data.atl.usd.toLocaleString()} / ${" "}
                    {CoinData.CoinInfo.data.market_data.ath.usd.toLocaleString()}
                  </div>
                </div>

                <div className="mx-1 w-[400px]">
                  <div className="flex flex-row justify-between border-b border-b-gray-500 py-2 px-2">
                    <p>Total Supply</p>
                    <p>$ {CoinData.CoinInfo.data.market_data.total_supply.toLocaleString()}</p>
                  </div>
                  <div className="flex flex-row justify-between border-b border-b-gray-500 py-2 px-2">
                    <p>Circulating Supply</p>
                    <p>
                      $ {CoinData.CoinInfo.data.market_data.circulating_supply.toLocaleString()}
                    </p>
                  </div>
                  <div className="flex flex-row justify-between border-b border-b-gray-500 py-2 px-2">
                    <p>Sentiment votes</p>
                    <p>
                      {CoinData.CoinInfo.data.sentiment_votes_up_percentage}% up /{" "}
                      {CoinData.CoinInfo.data.sentiment_votes_down_percentage}% down
                    </p>
                  </div>
                  <div className="flex flex-row justify-between border-b border-b-gray-500 py-2 px-2">
                    <p>Fully Diluted Valutation</p>
                    <p>
                      ${" "}
                      {CoinData.CoinInfo.data.market_data.fully_diluted_valuation.usd &&
                        CoinData.CoinInfo.data.market_data.fully_diluted_valuation.usd.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chart  */}
          <div>
            <CoinChart />
          </div>

          {/* About  */}
          <div className="mx-3 my-2 h-fit text-sm bg-amp-card p-5 text-amp-subtext border-2 border-amp-border rounded-lg">
            <h1 className="pb-2 text-lg font-semibold">About {CoinData.CoinInfo.data.name}</h1>
            <p
              className=""
              dangerouslySetInnerHTML={{ __html: CoinData.CoinInfo.data.description.en }}
            />
          </div>
        </div>
      ) : CoinData.CoinInfo.status === "loading" ? (
        <SkeletonLoader />
      ) : (
        <CoinNotFound />
      )}
    </div>
  );
};

export default CoinInfo;
