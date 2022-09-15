import { Link, NavLink } from "react-router-dom";
import ResetState from "../utils/resetStates";

const Navbar = () => {
  const links = [
    { path: "/coins", name: "Coins" },
    { path: "/exchanges", name: "Exchanges" },
  ];

  return (
    <div className="flex flex-row items-center justify-between bg-amp-card h-[50px] border-b-2 border-amp-border font-base select-none">
      <div className="flex flex-row justify-between items-center w-full px-14">
        <div className="text-xl font-mont font-black">
          <NavLink to="/" onClick={() => ResetState("/")}>
            <span className="text-yellow-500">CRYPTO</span>
            <span className="">NAS</span>
          </NavLink>
        </div>
        <div className="text-amp-subtext">
          {links.map((obj) => (
            <NavLink
              key={obj.name}
              to={obj.path}
              onClick={() => ResetState(obj.path)}
              className="hover:text-amber-400 mx-5"
            >
              {obj.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
