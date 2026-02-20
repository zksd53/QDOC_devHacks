import "./user/App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./home_dashBoard/LandingPage";
import FirstTimeUser from "./user/first_time";
import PatientDashboard from "./user/dashboard/PatientDashboard";
import PatientLogin from "./user/PatientLogin";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/patient-signup" element={<FirstTimeUser />} />
                <Route path="/patient-login" element={<PatientLogin />} />
                <Route path="/clinic" element={<h2>Clinic login here</h2>} />
                <Route path="/patient/dashboard" element={<PatientDashboard />} />
                <Route path="/user/dashboard" element={<PatientDashboard />} />
            </Routes>
        </div>
    );
}

export default App;
