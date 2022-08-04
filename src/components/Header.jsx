import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Header.css";
import hamburgerMenu from "../IMG/hamburger.svg";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="main-header">
      <Link to="/">
        <h1 className="title">Market</h1>
      </Link>
      <div className="nav-links-container">
        <NavLink className="nav-link" to="/stocks">
          Stocks
        </NavLink>
        <NavLink className="nav-link" to="/exchange">
          Exchange Rates
        </NavLink>
      </div>
      <div className="button-container">
        <button className="header-button login-button">LOGIN</button>
        <button className="header-button signup-button">SIGN UP!</button>
      </div>
      <div className="hamburger-button">
        <img
          onClick={() => {
            setIsOpen(true);
          }}
          src={hamburgerMenu}
          className="hambuger-img"
        />
        {isOpen && <MobileMenu onClose={() => setIsOpen(false)} />}
      </div>
    </header>
  );
};

export default Header;
