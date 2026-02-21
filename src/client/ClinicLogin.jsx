import { useState } from "react";
import { Link } from "react-router-dom";
import "../user/PatientLogin.css";

export default function ClinicLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const isFormValid = email && password;
    return (
        <div className="login-container">
            <div className="login-card">
                <h1>Clinic Login</h1>
                <p className="login-subtext">Enter clinic credentials to continue.</p>

                <form className="login-form" onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor="clinic-email">Email</label>
                    <input
                        type="email"
                        id="clinic-email"
                        placeholder="clinic@example.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="clinic-password">Password</label>
                    <input
                        type="password"
                        id="clinic-password"
                        placeholder="••••••••"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {isFormValid ? (
                        <Link to="/clinic/dashboard" className="login-btn">
                            Continue
                        </Link>
                    ) : (
                        <div className="login-btn disabled">Continue</div>
                    )}
                </form>

                <p className="signup-prompt">
                    New clinic account?{" "}
                    <Link to="/clinic-signup" className="signup-link">
                        Set Up Profile
                    </Link>
                </p>
            </div>
        </div>
    );
}
