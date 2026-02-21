import { useEffect } from 'react';
import './user/App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import LandingPage from './home_dashBoard/LandingPage';
import FirstTimeUser from './user/first_time';
import FirstTimeClient from './client/first_time';
import PatientDashboard from './user/dashboard/PatientDashboard';
import PatientLogin from './user/PatientLogin';
import ClinicLogin from './client/ClinicLogin';
import PatientSignup from './user/signup';
import ClinicSignup from './client/signup';

function FirstTimeAccessGate({ storageKey, fallbackPath, children }) {
    const allowed = sessionStorage.getItem(storageKey) === 'true';

    useEffect(() => {
        if (allowed) {
            sessionStorage.removeItem(storageKey);
        }
    }, [allowed, storageKey]);

    if (!allowed) {
        return <Navigate to={fallbackPath} replace />;
    }

    return children;
}

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route
                    path="/patient"
                    element={
                        <FirstTimeAccessGate storageKey="allow_patient_first_time" fallbackPath="/patient-login">
                            <FirstTimeUser />
                        </FirstTimeAccessGate>
                    }
                />
                <Route
                    path="/patient-first-time"
                    element={
                        <FirstTimeAccessGate storageKey="allow_patient_first_time" fallbackPath="/patient-login">
                            <FirstTimeUser />
                        </FirstTimeAccessGate>
                    }
                />
                <Route path="/patient-signup" element={<PatientSignup />} />
                <Route path="/patient-login" element={<PatientLogin />} />
                <Route path="/clinic" element={<ClinicLogin />} />
                <Route path="/clinic-login" element={<ClinicLogin />} />
                <Route path="/clinic-signup" element={<ClinicSignup />} />
                <Route
                    path="/clinic-first-time"
                    element={
                        <FirstTimeAccessGate storageKey="allow_clinic_first_time" fallbackPath="/clinic-login">
                            <FirstTimeClient />
                        </FirstTimeAccessGate>
                    }
                />
                <Route path="/patient/dashboard" element={<PatientDashboard />} />
                <Route path="/user/dashboard" element={<PatientDashboard />} />
                <Route path="/dashboard" element={<PatientDashboard />} />
            </Routes>
        </div>
    );
}

export default App;
