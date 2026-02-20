import "./user/App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./home_dashBoard/LandingPage";
import FirstTimeUser from "./user/first_time";
import PatientDashboard from "./user/dashboard/PatientDashboard";
import PatientLogin from "./user/PatientLogin";
import ClinicLogin from "./client/ClinicLogin";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/patient-signup" element={<FirstTimeUser />} />
                <Route path="/patient-login" element={<PatientLogin />} />
                <Route path="/clinic-login" element={<ClinicLogin />} />
                <Route path="/patient-dashboard" element={<PatientDashboard />} />
            </Routes>
        </div>
    );
}

export default App;
