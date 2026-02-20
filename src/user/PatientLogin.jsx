import "./Login.css";
import Login from "./Login";

export default function PatientLogin() {
    return (
        <Login
            userType={"Patient"}
            successLink={"patient-dashboard"}
            signupLink={"patient-signup"}
        />
    );
}
