import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { NavLink } from "react-router-dom";





function Welcome() {
  useEffect(() => {
    const prefersReduced = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (prefersReduced) return;

    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) e.target.classList.add("is-visible");
        }
      },
      { threshold: 0.18 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <main className="landing" id="top">

        <div className="landing-bg" aria-hidden>
          <div className="particles" />
          <div className="energy-streaks" />
          <div className="radial" />
        </div>

        <section className="hero" aria-label="FitGuide Hero">
          <div className="hero-inner">
            <div className="hero-left">
              <div className="hero-mark">
                <div className="hero-logo-glow" aria-hidden />
                <div className="hero-energy-ring" aria-hidden>
                  <svg width="220" height="220" viewBox="0 0 220 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="g" x1="20" y1="20" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#A3FF12" stopOpacity="0" />
                        <stop offset="0.35" stopColor="#A3FF12" stopOpacity="0.75" />
                        <stop offset="1" stopColor="#A3FF12" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <circle cx="110" cy="110" r="68" stroke="rgba(163,255,18,0.35)" strokeWidth="2" />
                    <path
                      d="M110 42C152 42 176 70 176 110C176 152 148 176 110 176C72 176 44 152 44 110C44 74 62 54 90 46"
                      stroke="url(#g)"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="hero-logo" aria-label="FitGuide">
                  <svg width="66" height="66" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                </div>
              </div>

              <h1 className="hero-title">FitGuide</h1>
              <p className="hero-subtitle">AI-Powered Fitness Coach</p>

              <p className="hero-description">
                Analyze your body, generate personalized workouts, and track progress in real time—powered by smart coaching.
              </p>

              <div className="hero-badges">
                <span className="badge">Glass-safe UI</span>
                <span className="badge">Neon-grade insights</span>
                <span className="badge">Fast & responsive</span>
              </div>
            </div>

            <div className="hero-right">
              <div className="auth-card" role="region" aria-label="Login / Sign up">
                <button
                  className="google-btn"
                  type="button"
                  onClick={() => alert("Continue with Google (demo)")}
                  aria-label="Continue with Google"
                >
                  <span className="google-icon" aria-hidden>
                    G
                  </span>
                  Continue with Google
                </button>

                <div className="auth-or" aria-hidden>
                  OR
                </div>

                <div className="auth-fields">
                  <input
                    className="auth-input"
                    type="email"
                    placeholder="Email"
                    autoComplete="email"
                  />
                  <div className="auth-password-wrap">
                    <input
                      className="auth-input"
                      type="password"
                      placeholder="Password"
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      aria-label="Show password"
                      onClick={(e) => {
                        const wrap = (e.currentTarget as HTMLButtonElement).closest(
                          ".auth-password-wrap"
                        );
                        const input = wrap?.querySelector(
                          "input[type='password']"
                        ) as HTMLInputElement | null;
                        if (!input) return;
                        const isHidden = input.type === "password";
                        input.type = isHidden ? "text" : "password";
                      }}
                    >
                      <span aria-hidden>👁️</span>
                    </button>
                  </div>

                  <a href="#" className="forgot" onClick={(e) => e.preventDefault()}>
                    Forgot Password?
                  </a>

                  <button className="login-btn" type="button" onClick={() => alert("Login (demo)")}>Login</button>

                  <p className="signup-prompt">
                    New to FitGuide?{" "}
                    <NavLink to="/signup" className="signup-link">
                      Sign up
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="why" aria-label="Why Choose FitGuide">
          <div className="section-head" id="features">
            <h2>Why Choose FitGuide</h2>
            <p>Premium coaching experiences designed for real results.</p>
          </div>

          <div className="feature-grid">
            <article className="feature-card reveal" tabIndex={0}>
              <div className="feature-icon" aria-hidden>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8 6 6 10 6 14C6 18 9 22 12 22C15 22 18 18 18 14C18 10 16 6 12 2Z" stroke="#A3FF12" strokeWidth="1.8"/>
                  <path d="M9 14H15" stroke="#A3FF12" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>AI Body Analysis</h3>
              <p>Understand your form, mobility, and recovery signals—then turn them into action.</p>
            </article>

            <article className="feature-card reveal" tabIndex={0}>
              <div className="feature-icon" aria-hidden>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 4H17V8H7V4Z" stroke="#A3FF12" strokeWidth="1.8"/>
                  <path d="M5 8H19L17 20H7L5 8Z" stroke="#A3FF12" strokeWidth="1.8"/>
                  <path d="M9 12H15" stroke="#A3FF12" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Personalized Workouts</h3>
              <p>Workout plans that adapt to your goals, schedule, and performance trends.</p>
            </article>

            <article className="feature-card reveal" tabIndex={0}>
              <div className="feature-icon" aria-hidden>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 19V5" stroke="#A3FF12" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M8 15V9" stroke="#A3FF12" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M12 17V7" stroke="#A3FF12" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M16 13V11" stroke="#A3FF12" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M20 19V5" stroke="#A3FF12" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Progress Tracking</h3>
              <p>Track streaks, performance, and momentum with clarity and confidence.</p>
            </article>

            <article className="feature-card reveal" tabIndex={0}>
              <div className="feature-icon" aria-hidden>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C9 6 8 9 8 12C8 16 10 22 12 22C14 22 16 16 16 12C16 9 15 6 12 2Z" stroke="#A3FF12" strokeWidth="1.8"/>
                  <path d="M9 12H15" stroke="#A3FF12" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M12 9V15" stroke="#A3FF12" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Nutrition Guidance</h3>
              <p>Calorie-aware plans and macro guidance aligned with your training rhythm.</p>
            </article>
          </div>
        </section>

        <section className="sr-only" id="how-it-works" aria-hidden />
        <section className="sr-only" id="about" aria-hidden />
      </main>
    </>
  );
}


export default Welcome;

