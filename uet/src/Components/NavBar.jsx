import React from 'react';
import logo from '../assets/logo.jpg'; // Make sure the image exists

export default function NavBar() {
  return (
    <>
      <nav className="navbar-container">
        <div className="navbar-left">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <div className="navbar-brand">Unique Educational Trust</div>
        </div>
        <div className="navbar-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">About</a>
          <a href="#" className="nav-link">Contact</a>
        </div>
      </nav>

      <style>{`
        .navbar-container {
          color: #000000;
          padding: 1rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          display: flex;
          background-color: rgb(148, 255, 173);
          justify-content: space-between;
          align-items: center;
        }

        .navbar-left {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .navbar-logo {
          width: 40px;
          height: 40px;
          object-fit: contain;
        }

        .navbar-brand {
          font-size: 1.25rem;
          font-weight: bold;
          color: #000000;
        }

        .navbar-links {
          display: flex;
          gap: 4rem;
          margin-right: 4rem;
        }

        .nav-link {
          color: #000000;
          text-decoration: none;
          transition: color 0.3s ease;
          font-size: 1.1rem;
        }
          .navbar-container {
  position: sticky;
  top: 0;
  z-index: 9999;
  background-color: rgb(148, 255, 173);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: black;
}


        .nav-link:hover {
          color: #2e7d32; /* subtle dark green on hover */
        }
      `}</style>
    </>
  );
}
