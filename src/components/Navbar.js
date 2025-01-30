import React from 'react';

export default function Navbar({ title, aboutText, mode, toggleMode }) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">{aboutText}</a>
            </li>
          </ul>
        </div>
        {/* ✅ Fix: Apply text color dynamically based on mode */}
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="darkModeSwitch"
            onChange={() => toggleMode(mode === 'light' ? 'dark' : 'light')}
            checked={mode === 'dark'}
          />
          <label 
            className={`form-check-label ${mode === 'dark' ? 'text-light' : 'text-dark'}`} 
            htmlFor="darkModeSwitch"
          >
            {mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
          </label>
        </div>
      </div>
    </nav>
  );
}
