import { Link } from "react-router-dom";
const Navbar = () => {
  const links = [
    { path: "/coins", name: "Coins" },
    { path: "/gainers-and-losers", name: "Gainers/Losers" },
    { path: "/exchanges", name: "Exchanges" },
  ];
  return (
    <div className="flex flex-row items-center justify-between bg-amp-card h-[50px] border-b-2 border-amp-border font-base select-none">
      <div className="flex flex-row justify-between items-center w-full px-14">
        <div className="text-xl font-mont font-black">
          <Link to="/">
            <span className="text-yellow-500">CRYPTO</span>
            <span className="">NAS</span>
          </Link>
        </div>
        <div className="text-amp-subtext">
          {links.map((obj) => (
            <Link
              key={obj.name}
              to={obj.path}
              className="hover:text-amber-400 mx-5"
            >
              {obj.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
