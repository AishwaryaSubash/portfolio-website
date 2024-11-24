import { Link } from "react-router-dom";
import { navLinks } from "../utils/constants";
import { useState } from "react";
// import { motion } from "framer-motion";
// import { navbarHoverAnimation } from "../utils/motion";

const Navbar = ({
  currentRoute,
  theme,
}: {
  currentRoute: string;
  theme: string | undefined;
}) => {
  const [routeHover, setRouteHover] = useState<null | number>(null);

  const handleRouteHover = (index: number, hover: boolean) => {
    return hover ? setRouteHover(index) : setRouteHover(null);
  };

  return (
    <div className="z-20 fixed top-0 w-full drop-shadow-sm flex items-center justify-between px-8 font-textFont font-semibold backdrop-filter backdrop-blur-[7px] shadow-[10px_1px_15px_rgba(30,30,30,0.1)]">
      <div>
        <Link to="/">
          {theme === "dark" ? (
            <img
              src="/main-logos/no-bg-dark-logo.png"
              alt="Logo"
              width={90}
              height={90}
            />
          ) : (
            <img
              src="/main-logos/no-bg-light-logo.png"
              alt="Logo"
              width={90}
              height={90}
            />
          )}
        </Link>
      </div>
      <div className="flex items-center justify-evenly gap-6">
        {navLinks.map((item, index) => {
          return (
            <div
              key={index}
              onMouseOver={() => handleRouteHover(index, true)}
              onMouseLeave={() => handleRouteHover(index, false)}
              className={`flex flex-col justify-between items-center ${
                item.href === currentRoute
                  ? "text-lightHighlight dark:text-darkHighlight"
                  : "text-lightText dark:text-darkText"
              }`}
            >
              <Link
                to={item.href}
                className="hover:text-lightHighlight dark:hover:text-darkHighlight"
              >
                {item.title}
              </Link>
              {index === routeHover || item.href === currentRoute ? (
                <div className="w-1 h-1 rounded-full bg-lightHighlight dark:bg-darkHighlight"></div>
              ) : (
                <div className="pb-1"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
