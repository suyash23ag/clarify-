import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar sticky-top navbar-expand-lg shadow-lg p-3 mb-5 rounded"
      style={{
        background: 'linear-gradient(90deg, #000000, #333333)',
        boxShadow: '0 4px 12px rgba(255, 255, 255, 0.1)',
        borderBottom: '2px solid #444'
      }}>
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center text-white fw-bold" to="/" style={{ fontSize: '24px', textDecoration: 'none' }}>
          <img
            src="/linkin-park-seeklogo.png"
            alt="Logo"
            style={{
              width: '40px',
              height: '40px',
              marginRight: '10px',
              filter: 'drop-shadow(0px 2px 4px rgba(255, 255, 255, 0.2))'
            }}
          />
          <span style={{
            background: 'linear-gradient(90deg, #e0e0e0, #f8f8f8)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            fontWeight: 'bold',
            fontSize: '26px',
            textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
            transition: 'color 0.3s ease'
          }}>
            CLARIFY AI
          </span>
        </Link>
        <button
          className="navbar-toggler border-0 text-white"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '5px'
          }}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/" style={{ fontSize: '18px' }}>
              <i className="bi bi-house-door"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/about" style={{ fontSize: '18px' }}>
              <i className="bi bi-info-circle"></i> About Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
