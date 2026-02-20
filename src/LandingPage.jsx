import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
    return (
        <div className="landing-container">
            <div className="landing-hero">
                <h1 className="landing-title">Welcome to HealthConnect</h1>
                <p className="landing-description">
                    HealthConnect helps individuals and clinics manage appointments, medical
                    records, and communication — all in one place.
                </p>
                <p className="landing-subtext">Choose how you would like to continue:</p>
            </div>

            <div className="role-section">
                <Link to="/person" className="role-card">
                    <div className="role-icon">👤</div>
                    <h2>Continue as Person</h2>
                    <p>Book appointments and manage your health easily.</p>
                    <span className="role-button">I'm a Person</span>
                </Link>

                <Link to="/clinic" className="role-card">
                    <div className="role-icon">🏥</div>
                    <h2>Continue as Clinic</h2>
                    <p>Manage patients and clinic operations efficiently.</p>
                    <span className="role-button">I'm a Clinic</span>
                </Link>
            </div>
        </div>
    );
}
