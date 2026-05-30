import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);


  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeStyle = {
    background: "rgba(163, 255, 18, 0.16)",
    border: "1px solid rgba(163, 255, 18, 0.28)",
  } as React.CSSProperties;

  return (
    <nav className={scrolled ? "navbar navbar--scrolled" : "navbar"}>
      <div className="navbar-inner">
        <div className="navbar-left">
          <NavLink to="/" className="navbar-brand" aria-label="FitGuide Home">
            <span className="navbar-brand-icon" aria-hidden>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 2.5C18.2 2.5 22.5 4.4 22.5 4.4V13.2C22.5 18.1 18.9 21.8 13 23.5C7.1 21.8 3.5 18.1 3.5 13.2V4.4C3.5 4.4 7.8 2.5 13 2.5Z"
                  stroke="rgba(163,255,18,0.95)"
                  strokeWidth="1.6"
                />
                <path
                  d="M7.5 13.2H10.1L11.4 10.4L13 16.1L14.3 13.2H18.5"
                  stroke="rgba(163,255,18,0.95)"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 7.6C12.2 7.6 11.5 8.3 11.5 9.1C11.5 9.9 12.2 10.6 13 10.6C13.8 10.6 14.5 9.9 14.5 9.1C14.5 8.3 13.8 7.6 13 7.6Z"
                  fill="rgba(163,255,18,0.25)"
                />
              </svg>
            </span>

            <span className="navbar-brand-text">
              <span className="navbar-brand-name">FitGuide</span>
              <span className="navbar-brand-subtitle">AI-Powered Fitness Coach</span>
            </span>
          </NavLink>
        </div>

        <div className="navbar-right">
          <div className="navbar-links" role="navigation" aria-label="Main">
            <NavLink to="/" end className="nav-link" style={({ isActive }) => (isActive ? activeStyle : undefined)}>
              Home
            </NavLink>
            <NavLink to="/" className="nav-link" onClick={(e) => {
              // For SPA landing scroll; ignore router navigation.
              if (typeof window !== "undefined") {
                e.preventDefault();
                document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
              }
            }}>
              Features
            </NavLink>
            <a
              href="#how-it-works"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              How It Works
            </a>
            <a
              href="#about"
              className="nav-link"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About Us
            </a>
          </div>

          <div className="navbar-cta">
            <NavLink to="/signup" className="cta-button" aria-label="Get Started Free">
              Get Started Free
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}


export default Navbar;

