import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      alert(`Logging in with ${email}`);
      setLoading(false);
      setEmail("");
      setPassword("");
    }, 1000);
  };

  return (
    <div className="page-container">
      <div className="login-container">
        <h1>🔒 FitGuide Login</h1>
        <p>Welcome back! Continue your fitness journey.</p>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "8px",
            border: "2px solid #667eea",
            fontSize: "14px",
            outline: "none",
          }}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "25px",
            borderRadius: "8px",
            border: "2px solid #667eea",
            fontSize: "14px",
            outline: "none",
          }}
        />
        <button
          className="login-btn"
          onClick={handleLogin}
          disabled={loading}
          style={{
            opacity: loading ? 0.7 : 1,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </div>
    </div>
  );
}

export default Login;