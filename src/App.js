import "./user/App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import LandingPage from "./home_dashBoard/LandingPage";
import FirstTimeUser from "./user/first_time";
import PatientDashboard from "./user/dashboard/PatientDashboard";
import PatientLogin from "./user/PatientLogin";

function App() {
    return (
        <div className="App">
            {!isDashboard && (
                <>
                    <h1>Welcome to the clinic</h1>
                    <nav>
                        <Link to="/user">Go for user here</Link> |{" "}
                        <Link to="/clinic">Go for clinic here</Link> |{" "}
                        <Link to="/user/dashboard">Patient Dashboard</Link>
                    </nav>
                </>
            )}

            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/patient-signup" element={<FirstTimeUser />} />
                <Route path="/patient-login" element={<PatientLogin />} />
                <Route path="/clinic" element={<h2>Clinic login here</h2>} />
                <Route path="/patient/dashboard" element={<PatientDashboard />} />
            </Routes>
        </div>
    );
}

export default App;
