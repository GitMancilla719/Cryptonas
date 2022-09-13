import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-hero h-[300px] bg-center bg-cover w-full select-none">
      <h1 className="font-mont font-black md:text-7xl md:p-4 sm:text-5xl sm:p-2 xs:text-5xl xs:p-1">
        <span className="text-yellow-500">CRYPTO</span>
        <span className="">NAS</span>
      </h1>
      <h1 className="font-mont font-bold text-amp-subtext md:text-3xl sm:text-2xl xs:text-1xl  ">
        Your source for <span className="text-white font-black">Crypto</span>{" "}
        <Typed
          className="text-amber-500 md:text-3xl sm:text-3xl text-xl font-black"
          strings={["News", "Analysis", "Events", "Information"]}
          typeSpeed={50}
          backSpeed={50}
          loop
        />
      </h1>
      <p className="font-mont font-medium text-amp-subtext md:text-lg sm:text-md xs:text-sm ">
        all in one place, all for FREE
      </p>
    </div>

    // <div>test</div>
  );
};

export default Hero;
