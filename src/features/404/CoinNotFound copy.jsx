import React from "react";

const CoinNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen mt-[-40px] text-center px-4 select-none font-mont">
      <h1 className="text-5xl font-black font-mont">Coin not found</h1>
      <h1 className="text-xl font-semibold text-amp-subtext py-3">
        Oops, it seems that this coin doesn't exist (yet), or an error has
        occured.
      </h1>
      <p className="text-sm text-amp-subtext">
        Head over to the Coins section to see the list of supported
        cryptocurrencies.
      </p>
    </div>
  );
};

export default CoinNotFound;
