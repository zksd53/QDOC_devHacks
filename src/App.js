import "./user/App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./home_dashBoard/LandingPage";
import FirstTimeUser from "./user/first_time";
import PatientDashboard from "./user/dashboard/PatientDashboard";
import PatientLogin from "./user/PatientLogin";
import ClinicLogin from "./client/ClinicLogin";
import PatientSignup from "./user/PatientSignup";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/patient-signup" element={<PatientSignup />} />
                <Route path="/patient-signup/details" element={<FirstTimeUser />} />
                <Route path="/patient-login" element={<PatientLogin />} />
                <Route path="/clinic" element={<h2>Clinic login here</h2>} />
                <Route path="/clinic-login" element={<ClinicLogin />} />
                <Route path="/patient/dashboard" element={<PatientDashboard />} />
                <Route path="/patient-dashboard" element={<PatientDashboard />} />
                <Route path="/user/dashboard" element={<PatientDashboard />} />
            </Routes>
        </div>
    );
}

export default App;
