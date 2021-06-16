import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom';
const Navbar = () => {
  return (
    <div className="navbar navbar-expand-sm bg-white  fixed-top">
      <h4 className="mx-auto"><u>Aashu Mittal Technical </u></h4>
      <Link className="navbar-link mx-auto" to="/about">About</Link>
      <Link className="navbar-link mx-auto" to="/contact">Contact</Link>
      <div className="input-bar mx-auto">
      <input className="btn-group" placeholder="Search"  type="text"></input>
      </div>
      </div>
  );
};
export default Navbar;