import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function Signup() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <h2 className="text-center text-white mb-4">Create Account</h2>

        <form>

          <div className="mb-3">
            <label className="form-label text-light">UserName</label>
            <input
              type="text"
              className="form-control auth-input"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-light">Email</label>
            <input
              type="email"
              className="form-control auth-input"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-3">
            <label className="form-label text-light">Password</label>
            <input
              type="password"
              className="form-control auth-input"
              placeholder="Enter password"
            />
          </div>

          <div className="mb-4">
            <label className="form-label text-light">Confirm Password</label>
            <input
              type="password"
              className="form-control auth-input"
              placeholder="Confirm password"
            />
          </div>

          <button className="btn btn-orange w-100 py-2">
            Sign Up
          </button>

        </form>

        <p className="text-center text-light mt-4 small">
          Already have an account?{" "}
          <Link to="/signin" className="auth-link">Sign In</Link>
        </p>

      </div>

    </div>
  );
}
