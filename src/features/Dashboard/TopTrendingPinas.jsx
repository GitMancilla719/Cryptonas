import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const TopTrendingPinas = () => {
  const trendingCoins = useSelector(
    (state) => state.DashboardSlice.trendingCoins.data
  );

  return (
    <div className="p-5 mx-5">
      {/* <h1 className="text-center text-2xl font-semibold pb-3">
        Trending Coins Ngayon
      </h1> */}
      <h1 className="text-center text-3xl font-bold md:p-3 xs:p-3 xs:pb-0">
        Hot Coins in the Philippines
      </h1>
      <div className="flex flex-wrap justify-center sm:flex-row xs:flex-col">
        {trendingCoins ? (
          trendingCoins.map((obj, index) => (
            <div
              key={index}
              className="flex flex-row items-center bg-amp-card border-amp-border border-2 m-1 p-2 rounded-md sm:w-fit"
            >
              <div className="flex items-center mx-2">
                <img src={obj.image} alt="alt" className="w-[35pt]" />
              </div>

              <div className="px-2 pl-4 leading-5">
                <h1 className="text-md font-bold">
                  {obj.symbol.toUpperCase()}
                </h1>
                <h1 className="text-sm font-medium">{obj.name} </h1>

                <div className="text-amp-subtext text-sm font-normal">
                  <h1>
                    ₱ {obj.peso_current_price.toLocaleString()}{" "}
                    <span
                      className={`${
                        obj.peso_price_change_percentage_24h > 0
                          ? "text-green-500 "
                          : "text-red-400 "
                      } text-xs`}
                    >
                      <FontAwesomeIcon
                        icon={
                          obj.peso_price_change_percentage_24h > 0
                            ? faCaretUp
                            : faCaretDown
                        }
                      />{" "}
                      {obj.peso_price_change_percentage_24h.toFixed(2)}%{" "}
                    </span>
                  </h1>
                  <h1>
                    $ {obj.dollar_current_price.toLocaleString()}{" "}
                    <span
                      className={`${
                        obj.dollar_price_change_percentage_24h > 0
                          ? "text-green-500 "
                          : "text-red-400 "
                      } text-xs`}
                    >
                      <FontAwesomeIcon
                        icon={
                          obj.dollar_price_change_percentage_24h > 0
                            ? faCaretUp
                            : faCaretDown
                        }
                      />{" "}
                      {obj.dollar_price_change_percentage_24h.toFixed(2)}%
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="flex flex-row bg-amp-card border-amp-border border-2 m-2 p-2 rounded-md">
            Loading...
          </div>
        )}
      </div>
    </div>
  );
};

export default TopTrendingPinas;

// {top3.status === "success" ? (
//   top3.data.map((obj, index) => (
//     <div
//       key={index}
//       className="flex flex-row items-center bg-amp-card border-amp-border border-2 m-1 p-2 rounded-md sm:w-fit"
//     >
//       <div className="flex items-center mx-2">
//         <img src={obj.image.large} alt="alt" className="w-[40pt]" />
//       </div>
//       <div className="px-2 pl-4 leading-5">
//         <h1 className="text-lg font-medium">
//           <span className="text-lg font-medium">
//             {obj.symbol.toUpperCase()}
//           </span>{" "}
//           {obj.name}
//         </h1>

//         <div className="text-amp-subtext text-md font-normal">
//           <h1>₱ {obj.market_data.current_price.php.toLocaleString()}</h1>
//           <h1>$ {obj.market_data.current_price.usd.toLocaleString()}</h1>
//         </div>
//       </div>
//       {/* price_change_percentage_24h_in_currency */}
//       <div className="px-2 flex flex-col">
//         <p className="text-amp-subtext text-xs flex flex-col">
//           24H Price
//           <span
//             className={
//               obj.market_data.price_change_percentage_24h > 0
//                 ? "text-green-500"
//                 : "text-red-400"
//             }
//           >
//             {obj.market_data.price_change_percentage_24h}%
//           </span>
//         </p>

//         <p className="text-amp-subtext text-xs flex flex-col">
//           24H Mkt Cap
//           <span
//             className={
//               obj.market_data.price_change_percentage_24h > 0
//                 ? "text-green-500"
//                 : "text-red-400"
//             }
//           >
//             {obj.market_data.market_cap_change_percentage_24h}%
//           </span>
//         </p>
//       </div>
//     </div>
//   ))
// ) : (
//   <div className="flex flex-row bg-amp-card border-amp-border border-2 m-2 p-2 rounded-md">
//     Loading...
//   </div>
// )}
