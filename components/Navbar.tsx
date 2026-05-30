import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const activeStyle = {
    background: "rgba(255, 255, 255, 0.3)",
  };

  return (
    <nav>
      <h2>💪 FitGuide</h2>

      <div>
        <NavLink to="/" end style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Login
        </NavLink>
        <span>|</span>
        <NavLink to="/signup" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Signup
        </NavLink>
        <span>|</span>
        <NavLink to="/dashboard" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Dashboard
        </NavLink>
        <span>|</span>
        <NavLink to="/workout" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
          Workouts
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;