import { Link } from "react-router-dom";
import { navLinks } from "../utils/constants";

const Navbar = ({
  currentRoute,
  theme,
}: {
  currentRoute: string;
  theme: string | undefined;
}) => {
  return (
    <div className="z-20 fixed top-0 w-full drop-shadow-sm flex items-center justify-between px-8 font-textFont font-semibold backdrop-filter backdrop-blur-[7px] shadow-[10px_1px_15px_rgba(30,30,30,0.1)]">
      <div>
        <Link to="/">
          {theme === "dark" ? (
            <img
              src="/main-logos/no-bg-dark-logo.png"
              alt="Logo"
              width={100}
              height={100}
            />
          ) : (
            <img
              src="/main-logos/no-bg-light-logo.png"
              alt="Logo"
              width={100}
              height={100}
            />
          )}
        </Link>
      </div>
      <div className="flex items-center justify-evenly gap-6">
        {navLinks.map((item, index) => {
          return (
            <div
              key={index}
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
