import React from "react";
import { Link } from "react-router-dom";
import { HiClipboardDocumentList } from "react-icons/hi2";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-dark py-4 text-white">
      <div className="container">

        <div className="row text-center text-md-start align-items-center">

          {/* Logo */}
          <div className="col-md-4 mb-3 mb-md-0">
            <h5 className="fw-bold m-0">
              <HiClipboardDocumentList className="me-2 text-warning" />
              TODO App
            </h5>
            <small className="text-secondary">
              Stay organized. Stay productive.
            </small>
          </div>

          {/* Links */}
          <div className="col-md-4 text-center mb-3 mb-md-0">
            <Link to="/" className="footer-link">Home</Link>
            <Link to="/" className="footer-link">Add Todo</Link>
            
          </div>

          {/* Copyright */}
          <div className="col-md-4 text-md-end text-center">
            <small className="text-secondary">
              © {new Date().getFullYear()} All rights reserved
            </small>
          </div>

        </div>

      </div>
    </footer>
  );
}
