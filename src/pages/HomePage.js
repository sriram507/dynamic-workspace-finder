import React, { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { workspaces } from "../data/workspaces";
import "../styles/HomePage.css"; // Import the CSS file

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWorkspaces = workspaces.filter((workspace) =>
    workspace.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="header bg-dark text-white py-3 sticky-top">
        <div className="container d-flex justify-content-between align-items-center">
          <h1 className="logo">Workspace Finder</h1>
          <nav>
            <Link to="/" className="nav-link text-white mx-3">
              Home
            </Link>
            <Link to="/about" className="nav-link text-white mx-3">
              About
            </Link>
            <Link to="/contact" className="nav-link text-white mx-3">
              Contact
            </Link>
            <Link to="/explore" className="btn btn-primary btn-sm mx-3">
              Explore Workspaces
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        className="hero-section text-center text-white d-flex align-items-center justify-content-center"
        style={{
          background: 'url("/public/assets/images/tech-hub.jpg") center/cover no-repeat',
          height: "75vh",
          animation: "fadeIn 2s ease-out"
        }}
      >
        <div>
          <h2 className="display-4 mb-3 animated fadeIn">Find Your Perfect Workspace</h2>
          <p className="lead mb-4 animated fadeIn">
            Explore coworking spaces, cafes, and meeting rooms tailored to your needs.
          </p>
          <Link to="/explore" className="btn btn-light btn-lg animated fadeIn hover-zoom">
            Get Started
          </Link>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section py-5 bg-light">
        <div className="container text-center">
          <h3 className="mb-4">Start Your Search</h3>
          <SearchBar onSearch={setSearchTerm} />
        </div>
      </section>

      {/* Featured Workspaces Section */}
      <section className="featured py-5">
        <div className="container">
          <h3 className="text-center mb-5">Featured Workspaces</h3>
          <div className="row">
            {filteredWorkspaces.length > 0 ? (
              filteredWorkspaces.slice(0, 3).map((workspace) => (
                <div key={workspace.id} className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm hover-card">
                    <div className="card-body">
                      <h5 className="card-title">{workspace.name}</h5>
                      <p className="card-text">Location: {workspace.location}</p>
                      <p className="card-text">Rating: {workspace.rating} ★</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center">No workspaces found matching your search.</p>
            )}
          </div>
          <div className="text-center mt-4">
            <Link to="/explore" className="btn btn-outline-primary">View More Workspaces</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us py-5 bg-light">
        <div className="container text-center">
          <h3 className="mb-4">Why Choose Workspace Finder?</h3>
          <div className="row">
            <div className="col-md-4">
              <i className="fas fa-th-large fa-3x mb-3"></i>
              <h5>Wide Selection</h5>
              <p>Find the perfect space among hundreds of options tailored to your needs.</p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-users fa-3x mb-3"></i>
              <h5>User Reviews</h5>
              <p>Check authentic reviews to make an informed decision.</p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-calendar-check fa-3x mb-3"></i>
              <h5>Easy Booking</h5>
              <p>Book your ideal workspace with just a few clicks, hassle-free.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer bg-dark text-white py-4">
        <div className="container text-center">
          <p>&copy; {new Date().getFullYear()} Workspace Finder. All rights reserved.</p>
          <div>
            <Link to="/privacy" className="text-white mx-2">Privacy Policy</Link>
            <Link to="/terms" className="text-white mx-2">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
