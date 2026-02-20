import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <h1>Welcome to the clinic</h1>

            <nav>
                <Link to="/user">Go for user here</Link> |{" "}
                <Link to="/clinic">Go for clinic here</Link>
            </nav>

            <Routes>
                <Route path="/user" element={<h2>User login details here</h2>} />
                <Route path="/clinic" element={<h2>Clinic login here</h2>} />
            </Routes>
        </div>
    );
}

export default App;
