import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
    return (
        <div className="landing-container">
            <div className="landing-hero">
                <h1 className="landing-title">Welcome to VaxShield</h1>
                <p className="landing-description">
                    VaxShield helps individuals keep track of their immunization records and clinics
                    manage appointments, medical records, and communication — all in one place.
                </p>
                <p className="landing-subtext">Choose how you would like to continue:</p>
            </div>

            <div className="role-section">
                <Link to="/patient-login" className="role-card">
                    <div className="role-icon">👤</div>
                    <h2>Continue as Patient</h2>
                    <p>Check immunization records.</p>
                    <span className="role-button">I'm a Patient</span>
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
