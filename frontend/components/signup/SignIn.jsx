import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";

export default function SignIn() {
  return (
    <div className="auth-page">

      <div className="auth-card">

        <h2 className="text-center text-white mb-4">Welcome Back</h2>
        <p className="text-center text-secondary mb-4 small">
          Sign in to continue managing your tasks
        </p>

        <form>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label text-light">Email</label>
            <input
              type="email"
              className="form-control auth-input"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-2">
            <label className="form-label text-light">Password</label>
            <input
              type="password"
              className="form-control auth-input"
              placeholder="Enter password"
            />
          </div>

          {/* Remember + Forgot */}
          {/* <div className="d-flex justify-content-between align-items-center mb-4 small">
            <div>
              <input type="checkbox" className="form-check-input me-2" />
              <span className="text-light">Remember me</span>
            </div>

            <Link to="#" className="auth-link">
              Forgot Password?
            </Link>
          </div> */}

          {/* Button */}
          <button className="btn btn-orange w-100 py-2
          mt-4">
            Sign In
          </button>

        </form>

        {/* Signup link */}
        <p className="text-center text-light mt-4 small">
          Don't have an account?{" "}
          <Link to="/signup" className="auth-link" >
            Sign Up
          </Link>
        </p>

      </div>

    </div>
  );
}
