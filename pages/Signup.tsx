import React, { useState } from "react";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignup = () => {
    setLoading(true);
    setTimeout(() => {
      alert(`Welcome ${name}! Your account has been created.`);
      setLoading(false);
      setName("");
      setEmail("");
      setPassword("");
    }, 1000);
  };

  return (
    <div className="page-container">
      <div className="signup-container">
        <h1>💪 Create Account</h1>
        <p>Start your fitness journey today!</p>
        <input
          type="text"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          type="email"
          placeholder="Email address"
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
          placeholder="Create a password"
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
          className="signup-btn"
          onClick={handleSignup}
          disabled={loading}
          style={{
            opacity: loading ? 0.7 : 1,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Creating account..." : "Get Started"}
        </button>
      </div>
    </div>
  );
}

export default Signup;