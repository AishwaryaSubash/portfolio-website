import { Link } from "react-router-dom";
import { navLinks } from "../utils/constants";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between m-4 p-4 ">
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
