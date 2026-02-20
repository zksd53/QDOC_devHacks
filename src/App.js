import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import FirstTimeUser from "./user/first_time";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/patient" element={<FirstTimeUser />} />
                <Route path="/clinic" element={<h2>Clinic login here</h2>} />
            </Routes>
        </div>
    );
}

export default App;
