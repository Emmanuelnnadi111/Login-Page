import { navigate } from "../registeration/navigate";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  return (
    <div className="first-row flex justify-between">
      <div className="pages flex space-x-5">
        {navigate.map((link, index) => (
          <a
            key={index}
            className={
              location.pathname === link.href
                ? "border-b-2 border-b-activeBorderColor pb-4"
                : ""
            }
          >
            <NavLink to={link.href}>{link.name}</NavLink>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
