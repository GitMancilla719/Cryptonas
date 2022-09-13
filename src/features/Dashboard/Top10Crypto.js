import { useSelector } from "react-redux";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  scales: {
    x: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
        drawBorder: false,
        drawOnChartArea: false,
        drawTicks: false,
      },
    },
    y: {
      ticks: {
        display: false,
      },
      grid: {
        display: false,
        drawBorder: false,
        drawOnChartArea: false,
        drawTicks: false,
      },
    },
  },
  tooltips: {
    enabled: false,
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
  },
};

const Top10Crypto = () => {
  const top10crypto = useSelector(
    (state) => state.DashboardSlice.top10crypto.data
  );

  return (
    <div className="p-10 w-full">
      <div className="border-2 border-amp-border md:p-5 xs:p-0 rounded-md bg-amp-card overflow-auto">
        <h1 className="text-3xl font-bold md:p-0 xs:p-3 xs:pb-0">
          Top 10 Cryptocurrencies
        </h1>
        <p className="text-amp-subtext py-1 font-light md:p-1 xs:p-3">
          <b>Crypto market cap</b> is the total value of all the coins of a
          particular cryptocurrency that have been mined or are in circulation.
          Market capitalization is used to determine the ranking of
          cryptocurrencies. The higher the market cap of a particular crypto
          coin, the higher its ranking and share of the market.
        </p>

        <p className="text-amp-subtext py-2 mb-1 font-light md:p-1 xs:p-3">
          The <b>24h trading volume</b> refers to the amount a cryptocurrency
          has been bought and sold on all exchanges within the last 24 hours on
          the spot market.
        </p>
        <table className="table-auto border-collapse border-2 border-x-0 border-amp-border w-full overflow-scroll border-spacing-40">
          <thead className="">
            <tr className="text-amp-subtext text-sm">
              <th className="p-2 bg-amp-card">#</th>
              <th className="p-2 bg-amp-card">Coin</th>
              <th colSpan="2">Price</th>
              <th colSpan="2">Volume</th>
              <th colSpan="2">Market Cap</th>
              <th>Last 30D</th>
            </tr>
          </thead>
          <tbody className="">
            {top10crypto &&
              top10crypto.map((coin, index) => (
                <tr
                  key={index}
                  className="text-amp-subtext font-light border-2 border-x-0 border-amp-border hover:duration-300 truncate md:text-base xs:text-xs"
                >
                  {/* rank */}
                  <td className="text-center px-5 bg-amp-card">{index + 1}</td>

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
                          coin.peso_price_change_percentage_24h > 0
                            ? faCaretUp
                            : faCaretDown
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
                          coin.dollar_price_change_percentage_24h > 0
                            ? faCaretUp
                            : faCaretDown
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

                  {/* chart */}
                  <td className="p-1 pt-2">
                    <div className="w-[90px] h-[40px] mx-auto">
                      <Line
                        options={options}
                        data={{
                          labels: coin.peso_chart.map((obj) => ""),
                          datasets: [
                            {
                              label: "chwa",
                              data: coin.peso_chart.map((obj) => obj[1]),
                              pointRadius: 0,
                              pointHitRadius: 0,
                              borderWidth: 2,
                              borderColor:
                                coin.peso_price_change_percentage_24h > 0
                                  ? "#22c55e"
                                  : "#ef4444",
                              // borderColor: "rgb(255, 99, 132)",
                              // backgroundColor: "rgba(255, 99, 132, 0.5)",
                            },
                          ],
                        }}
                      />
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        <p className="text-amp-subtext text-right">
          Powered by <b>Coingecko</b>
        </p>
      </div>
    </div>
  );
};

export default Top10Crypto;
