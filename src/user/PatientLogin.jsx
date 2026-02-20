import { useState } from "react";
import { Link } from "react-router-dom";
import "./PatientLogin.css";

export default function PatientLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const isFormValid = email && password;

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Patient Login</h1>
                <p className="login-subtext">Enter your email and password to continue.</p>

                <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="you@example.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password">Password</label>
                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            placeholder="••••••••"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                            className="toggle-password"
                            onClick={() => setShowPassword((prev) => !prev)}
                        >
                            {showPassword ? "🙈" : "👁️"}
                        </span>
                    </div>

                    {isFormValid ? (
                        <Link to="/patient/dashboard" className="login-btn">
                            Log In
                        </Link>
                    ) : (
                        <div className="login-btn disabled">Log In</div>
                    )}
                </form>

                <p className="signup-prompt">
                    Don’t have an account?{" "}
                    <Link to="/patient-signup" className="signup-link">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}
