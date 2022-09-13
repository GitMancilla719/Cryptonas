import { useSelector } from "react-redux";
// import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Top10Exchanges = () => {
  const top10exchanges = useSelector(
    (state) => state.DashboardSlice.top10exchanges.data
  );

  // console.log(top10exchanges);
  return (
    <div className="p-10 w-full">
      <div className="border-2 border-amp-border md:p-5 xs:p-0 rounded-md bg-amp-card overflow-auto">
        <h1 className="text-3xl font-bold md:p-0 xs:p-3 xs:pb-0">
          Top 10 Crypto Exchanges
        </h1>
        <p className="text-amp-subtext py-1 font-light md:p-1 xs:p-3">
          There is no one best exchange for every user. However, some of the
          features shared by the best cryptocurrency exchanges include solid
          security tools, low fees, several payment options, an accessible
          platform and availability on both mobile and desktop.
        </p>
        <table className="table-auto border-collapse border-2 border-x-0 border-amp-border w-full overflow-scroll border-spacing-40">
          <thead className="">
            <tr className="text-amp-subtext text-sm text-left">
              <th className="p-2 bg-amp-card text-center">#</th>
              <th>Exchange</th>
              <th>BTC Trade Volume</th>
              <th className="text-center">Trust Score</th>
              <th className="text-center">Year Established</th>
            </tr>
          </thead>
          <tbody className="">
            {top10exchanges &&
              top10exchanges.map((exchange, index) => (
                <tr
                  key={index}
                  className="text-amp-subtext font-light border-2 border-x-0 border-amp-border hover:duration-300 truncate md:text-base xs:text-xs"
                >
                  {/* rank */}
                  <td className="text-center px-5 bg-amp-card">{index + 1}</td>

                  {/* Exchange */}
                  <td className="flex flex-row items-center font-normal w-[190px] py-5 p-[3px] bg-amp-card">
                    <img
                      src={exchange.image}
                      alt="alt"
                      className="w-[15pt] mx-1"
                    />
                    <p className="pl-3 text-amp-text">{exchange.name}</p>
                  </td>

                  {/* Trade Volume */}
                  <td className="p-[3px] px-2">
                    $ {exchange.trade_volume_24h_btc.toLocaleString()}
                  </td>

                  {/* Trust Score */}
                  <td className="text-amp-text flex flex-row justify-center items-center text-center">
                    <div
                      className={`h-8 w-8 rounded-sm font-bold pt-1 ${
                        exchange.trust_score >= 8
                          ? "bg-green-700"
                          : exchange.trust_score >= 4
                          ? "bg-orange-600"
                          : "bg-red-500"
                      }`}
                    >
                      {exchange.trust_score.toLocaleString()}
                    </div>
                    {/* </div> */}
                  </td>

                  {/* Year */}
                  <td className="p-[3px] px-2 text-center">
                    {exchange.year_established}
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

export default Top10Exchanges;
