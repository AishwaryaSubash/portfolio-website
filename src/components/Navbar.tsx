import { Link } from "react-router-dom";
import { navLinks } from "../utils/constants";

const Navbar = ({ currentRoute }: { currentRoute: string }) => {
  return (
    <div className="flex items-center justify-between p-8 font-headingFont bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <div>
        <Link to="/">Aish</Link>
      </div>
      <div className="flex items-center justify-evenly gap-6">
        {navLinks.map((item, index) => {
          return (
            <div
              key={index}
              className={`flex flex-col justify-between items-center ${
                item.href === currentRoute &&
                "text-orange-700 dark:text-lime-300"
              }`}
            >
              <Link
                to={item.href}
                className="hover:text-orange-700 dark:hover:text-lime-300"
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
