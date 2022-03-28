import React from "react";
import Logo from "Assets/img/main/simon_logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
