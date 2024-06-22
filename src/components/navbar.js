import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./styles.css";

const Navbar = ({isLogged}) => {
  return (
    <>
      <nav>
       <Link to="/">
          Git Explorer
        </Link>
        <div className="link-cont">
          <Link to="/">Repo</Link>
          <Link to="/users">Users</Link>
          <Link to="/authProfile">Profile</Link>
          <Link to="/search">Search</Link>
          {!isLogged && <Link to="/login">Log In</Link>}
        </div>
      </nav>
      <Outlet/>
    </>
  );
};

export default Navbar;
