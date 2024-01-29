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
                "text-lightHighlight dark:text-darkHighlight "
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
