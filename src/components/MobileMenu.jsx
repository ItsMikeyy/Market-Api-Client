import { createPortal } from "react-dom";
import "./MobileMenu.css";
import closeImg from "../IMG/close.svg";
import { Link } from "react-router-dom";

const MobileMenu = (props) => {
  return createPortal(
    <div className="mobile-overlay">
      <img
        className="close-button"
        src={closeImg}
        onClick={props.onClose}
      ></img>
      <div className="content">
        <Link to="/">
          <h1>Markets</h1>
        </Link>
        <div>
          <Link to="/stocks">
            <h3>Stocks</h3>
          </Link>
          <Link to="/exchange">
            <h3>Exchange Rates</h3>
          </Link>
          <h3>Login</h3>
          <h3>Signup</h3>
        </div>
      </div>
    </div>,
    document.getElementById("overlay")
  );
};

export default MobileMenu;
