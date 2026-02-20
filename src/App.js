import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/user" element={<h2>User login details here</h2>} />
                <Route path="/clinic" element={<h2>Clinic login here</h2>} />
            </Routes>
        </div>
    );
}

export default App;
