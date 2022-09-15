import { useEffect } from "react";
import Marquee from "react-fast-marquee";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { topGainersAndLosers } from "./MarqueeSlice";
import { Link } from "react-router-dom";

const CoinMarquee = () => {
  const dispatch = useDispatch();
  const MarqueeData = useSelector((state) => state.MarqueeSlice);

  useEffect(() => {
    if (MarqueeData.status === "idle") {
      dispatch(topGainersAndLosers());
    }
  }, [dispatch, MarqueeData]);

  return (
    <div className="bg-amp-card md:w-full xs:w-full mx-auto select-none">
      {MarqueeData.status === "success" && (
        <Marquee
          pauseOnHover={true}
          direction="left"
          speed={20}
          loop={0}
          gradient={true}
          gradientColor={[13, 14, 18]}
          className="h-[50px]"
        >
          <p className="px-2 ml-10 font-bold text-green-600 border-r-2 border-amp-border">
            Top 24H Gainers:
          </p>
          {MarqueeData.topGainers.map((data) => (
            <div key={data.symbol}>
              <Link
                to={`/coins/${data.id}`}
                className="flex flex-row border-x-2 border-amp-border px-3"
              >
                <p className="px-2 font-bold">{data.symbol.toUpperCase()}</p>
                <p className="px-1 text-amp-subtext">${data.current_price}</p>
                <p className="px-1 text-green-500">
                  <FontAwesomeIcon icon={faCaretUp} className="pr-1 w-2 h-[12px]" />
                  {data.price_change_percentage_24h}
                </p>
              </Link>
            </div>
          ))}

          <p className="px-2 ml-10 font-bold text-red-500 border-r-2 border-amp-border">
            Top 24H Losers:
          </p>
          {MarqueeData.topLosers.map((data) => (
            <div key={data.symbol} className="flex flex-row border-x-2 border-amp-border px-3">
              <p className="px-2 font-bold">{data.symbol.toUpperCase()}</p>
              <p className="px-1 text-amp-subtext">${data.current_price}</p>
              <p className="px-1 text-red-500">
                <FontAwesomeIcon icon={faCaretUp} className="pr-1 w-2 h-[12px]" />
                {data.price_change_percentage_24h}
              </p>
            </div>
          ))}
        </Marquee>
      )}
    </div>
  );
};

export default CoinMarquee;
