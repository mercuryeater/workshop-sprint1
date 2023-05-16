import "./Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <NavLink to="/" className="header__links">
          <h1 className="header__left__title">Store</h1>
        </NavLink>
      </div>
      <div className="header__links">
        {/* <NavLink to="/" className="header__links">
          Home
        </NavLink> */}
        <NavLink to="/about" className="header__links">
          About
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
