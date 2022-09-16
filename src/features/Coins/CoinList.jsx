import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getTop100Crypto } from "./CoinSlice";
import {
  faCaretUp,
  faCaretDown,
  faAnglesRight,
  faAnglesLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import SkeletonLoader from "../../common/components/SkeletonLoader";

const CoinList = () => {
  const dispatch = useDispatch();
  const CoinData = useSelector((state) => state.CoinSlice);

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (CoinData.Top100Crypto.status === "idle") {
      dispatch(getTop100Crypto());
    }
  }, [dispatch, setPage, CoinData.Top100Crypto.status]);

  const changePage = (move) => {
    if (move === "previous" && page - 1 >= 1) {
      dispatch(getTop100Crypto(page - 1));
      setPage(page - 1);
    }

    if (move === "next") {
      dispatch(getTop100Crypto(page + 1));
      setPage(page + 1);
    }
  };

  // console.log(
  //   "page",
  //   page,
  //   "status",
  //   CoinData.Top100Crypto.status,
  //   "data",
  //   CoinData.Top100Crypto.data
  // );

  return (
    <div className="p-10 w-full">
      {CoinData.Top100Crypto.data !== null ? (
        <div className="border-2 border-amp-border md:p-5 xs:p-0 rounded-md bg-amp-card overflow-auto">
          <h1 className="text-3xl font-bold md:p-0 xs:p-3 xs:pb-0">Crypto</h1>

          <div className="m-2 float-right flex flex-row">
            <button
              onClick={() => changePage("previous")}
              className="px-2"
              disabled={page === 1 ? true : false}
            >
              <FontAwesomeIcon
                icon={faAnglesLeft}
                className={page == 1 ? "text-gray-600" : "text-white"}
              />
            </button>

            <p className="text-lg font-bold px-2">{page}</p>
            <button onClick={() => changePage("next")} className="px-2">
              <FontAwesomeIcon icon={faAnglesRight} />
            </button>
          </div>

          {CoinData.Top100Crypto.status === "loading" && <SkeletonLoader />}

          {CoinData.Top100Crypto.status === "success" && (
            <table className="table-auto border-collapse border-2 border-x-0 border-amp-border w-full overflow-scroll border-spacing-40">
              <thead className="">
                <tr className="text-amp-subtext text-sm">
                  <th className="p-2 bg-amp-card">#</th>
                  <th className="p-2 bg-amp-card">Coin</th>
                  <th colSpan="2">Price</th>
                  <th colSpan="2">Volume</th>
                  <th colSpan="2">Market Cap</th>
                  {/* <th>Last 30D</th> */}
                </tr>
              </thead>
              <tbody className="">
                {CoinData.Top100Crypto.data !== null &&
                  CoinData.Top100Crypto.data.map((coin, index) => (
                    <tr
                      key={index}
                      className="text-amp-subtext font-light border-2 border-x-0 border-amp-border hover:duration-300 truncate md:text-base xs:text-xs"
                    >
                      {/* rank */}
                      <td className="text-center px-5 bg-amp-card">{coin.mc_rank}</td>

                      {/* coin */}
                      <td className="flex flex-row items-center font-normal w-[190px] py-5 p-[3px] bg-amp-card">
                        <img src={coin.image} alt="alt" className="w-[15pt] mx-1" />
                        <Link to={`/coins/${coin.id}`} className="flex flex-row">
                          <p className="pl-3 text-amp-text">{coin.name}</p>
                          <p className="pl-2 text-sm text-amp-subtext">
                            {coin.symbol.toUpperCase()}
                          </p>
                        </Link>
                      </td>

                      {/* price */}
                      <td className="p-[3px] border-l-1 border-amp-border border-dotted px-2">
                        {`₱ ${coin.peso_current_price.toLocaleString()} `}
                        <span
                          className={`${
                            coin.peso_price_change_percentage_24h > 0
                              ? "text-green-500 "
                              : "text-red-400 "
                          } text-xs`}
                        >
                          <FontAwesomeIcon
                            icon={
                              coin.peso_price_change_percentage_24h > 0 ? faCaretUp : faCaretDown
                            }
                          />{" "}
                          {coin.peso_price_change_percentage_24h.toFixed(3)}
                        </span>
                      </td>
                      <td>
                        {`$ ${coin.dollar_current_price.toLocaleString()} `}
                        <span
                          className={`${
                            coin.dollar_price_change_percentage_24h > 0
                              ? "text-green-500 "
                              : "text-red-400 "
                          } text-xs`}
                        >
                          <FontAwesomeIcon
                            icon={
                              coin.dollar_price_change_percentage_24h > 0 ? faCaretUp : faCaretDown
                            }
                          />{" "}
                          {coin.dollar_price_change_percentage_24h.toFixed(3)}
                        </span>
                      </td>

                      {/* volume */}
                      <td className="border-l-1 border-amp-border border-dotted px-2">
                        ₱ {coin.peso_volume.toLocaleString()}
                      </td>
                      <td className="border-r-1 border-amp-border border-dotted px-2">
                        $ {coin.dollar_volume.toLocaleString()}
                      </td>

                      {/* market cap */}
                      <td className="border-l-1 border-amp-border border-dotted px-2">
                        ₱ {coin.peso_market_cap.toLocaleString()}
                      </td>
                      <td className="border-r-1 border-amp-border border-dotted px-2">
                        $ {coin.dollar_market_cap.toLocaleString()}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          )}

          <p className="text-amp-subtext text-right">
            Powered by <b>Coingecko</b>
          </p>
        </div>
      ) : (
        <SkeletonLoader />
      )}
    </div>
  );
};

export default CoinList;
