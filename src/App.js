import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import LandingPage from "./LandingPage";
import PatientDashboard from "./user/dashboard/PatientDashboard";

function App() {
    const location = useLocation();
    const isDashboard = location.pathname === "/user/dashboard";

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
                <Route path="/user" element={<h2>User login details here</h2>} />
                <Route path="/clinic" element={<h2>Clinic login here</h2>} />
                <Route path="/user/dashboard" element={<PatientDashboard />} />
            </Routes>
        </div>
    );
}

export default App;
