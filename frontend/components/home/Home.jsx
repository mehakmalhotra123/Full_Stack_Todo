import React from "react";
import { Link } from "react-router-dom";
import {
  HiPlusCircle,
  HiCheckCircle,
  HiClock,
  HiLightningBolt,
} from "react-icons/hi";

import "./Home.css";

export default function Home() {
  return (
    <div className="home-dark">

      <div className="container py-5">

        {/* Hero Section */}
        <div className="text-center hero-section">

          <h1 className="display-4 fw-bold mb-3 text-white">
            Organize Your Day,
            <span className="text-warning"> Stay Productive</span>
          </h1>

          <p className="lead text-light mb-4">
            Manage tasks, track progress and achieve your goals faster.
            Your personal productivity partner.
          </p>

          {/* CTA */}
          <Link to="/add">
            <button className="btn btn-orange btn-lg px-4 hero-btn">
              <HiPlusCircle className="me-2" />
              Add New Todo
            </button>
          </Link>
        </div>


        {/* Features Section */}
        <div className="row text-center mt-5 g-4">

          <div className="col-md-4">
            <div className="feature-card">
              <HiCheckCircle size={45} className="text-success mb-3" />
              <h5>Easy Task Management</h5>
              <p>
                Add, edit and delete tasks quickly with a clean interface.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card">
              <HiClock size={45} className="text-info mb-3" />
              <h5>Stay Organized</h5>
              <p>
                Track deadlines and finish everything on time without stress.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="feature-card">
              <HiLightningBolt size={45} className="text-warning mb-3" />
              <h5>Boost Productivity</h5>
              <p>
                Focus on what matters and accomplish more every day.
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
