import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import FirstTimeClient from "./client/first_time";

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
        <Route path="/clinic" element={<FirstTimeClient />} />
      </Routes>
    </div>
  );
}

export default App;