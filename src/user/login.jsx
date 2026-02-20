import { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login({ userType, successLink, signupLink }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Enable login only if both fields are filled
    const isFormValid = email && password;

    return (
        <div className="login-container">
            <div className="login-card">
                <h1>{userType} Login</h1>
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
                    <input
                        type="password"
                        id="password"
                        placeholder="••••••••"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {isFormValid ? (
                        <Link to={`${successLink}`} className="login-btn">
                            Log In
                        </Link>
                    ) : (
                        <button className="login-btn" disabled={!isFormValid}>
                            Log In
                        </button>
                    )}
                </form>

                <p className="signup-prompt">
                    Don’t have an account?{" "}
                    <Link to={`/${signupLink}`} className="signup-link">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
}
