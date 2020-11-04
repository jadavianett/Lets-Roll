import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
// import Button from "../Button/Button.jsx";

function Navbar() {
  const [menuState, setMenuState] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setMenuState(!menuState);
  const closeMobileMenu = () => setMenuState(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* <Link to="/" className="navbar-logo" onClick={closeMobileMenu}> */}
        <span className="navbar-logo">
          Jude Clark
          {/* &nbsp; <i class="fas fa-laptop-code"></i> */}
          {/* </Link> */}
        </span>
        <div className="hamburger" onClick={handleClick}>
          <i className={menuState ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={menuState ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            {/* <Link to="/" className="nav-links" onClick={closeMobileMenu}> */}
            <span className="nav-links">About</span>
            {/* </Link> */}
          </li>
          <li className="nav-item">
            {/* <Link
              to="/portfolio"
              className="nav-links"
              onClick={closeMobileMenu}
            > */}
            <span className="nav-links">Portfolio</span>
            {/* </Link> */}
          </li>
          <li className="nav-item">
            {/* <Link to="/contact" className="nav-links" onClick={closeMobileMenu}> */}
            <span className="nav-links">Contact</span>
            {/* </Link> */}
          </li>

          <li>
            {/* <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
              {/* Don't need this button but mb social icons?
            </Link> */}
          </li>
        </ul>
        {/* {button && <Button buttonStyle="btn--outline">SIGN UP</Button>} */}
      </div>
    </nav>
  );
}

export default Navbar;
