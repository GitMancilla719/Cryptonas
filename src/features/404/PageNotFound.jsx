import React from "react";

const PageNotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen mt-[-40px] text-center px-4 select-none font-mont">
      <h1 className="text-9xl font-black font-mont">404</h1>
      <h1 className="text-xl font-semibold text-amp-subtext py-3">
        Oops, Page not found
      </h1>
      <p className="text-sm text-amp-subtext">
        Sorry, the page you are looking for doesn't exist or an error has
        occured.
      </p>
    </div>
  );
};

export default PageNotFound;
