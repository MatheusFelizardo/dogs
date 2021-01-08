import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Dogs } from "../Assets/dogs.svg";
const Header = () => {
  return (
    <div className="Page_Header">
      <nav className="Header Container">
        <Link className="Header_Logo" to="/" aria-label="Dogs - Home">
          <Dogs />
        </Link>
        <Link className="Header_Login" to="/login">
          Login / Criar conta
        </Link>
      </nav>
    </div>
  );
};

export default Header;
