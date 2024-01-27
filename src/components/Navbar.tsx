import { Link } from "react-router-dom";
import { navLinks } from "../utils/constants";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-8 font-headingFont bg-lightBg text-lightText dark:bg-darkBg dark:text-darkText">
      <div>
        <Link to="/">Aish</Link>
      </div>
      <div className="flex items-center justify-evenly gap-6">
        {navLinks.map((item, index) => {
          return (
            <div key={index}>
              <Link to={item.href}>{item.title}</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
