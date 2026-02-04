import React from "react";
import { Link } from "react-router-dom";
import { HiClipboardDocumentList } from "react-icons/hi2";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar sticky-top">
      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand fw-bold logo" to="/">
          <HiClipboardDocumentList className="me-2 text-warning" />
          TODO
        </Link>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="nav">
          <ul className="navbar-nav ms-auto align-items-lg-center">

            <li className="nav-item mx-2">
              <Link className="nav-link nav-custom" to="/">Home</Link>
            </li>


            <li className="nav-item mx-2">
              <Link className="nav-link nav-custom" to="/add">Todos</Link>
            </li>

            <li className="nav-item mx-2 my-1">
              <Link className="btn btn-orange"  to="/signup" >Sign Up</Link>
            </li>

            <li className="nav-item mx-2 my-1">
              <Link className="btn btn-orange" to = "/signin">Sign In</Link>
            </li>

            <li className="nav-item mx-2 my-1">
              <Link className="btn btn-outline-warning">Log Out</Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
