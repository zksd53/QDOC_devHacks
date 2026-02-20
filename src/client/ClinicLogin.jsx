import "../user/Login.css";
import Login from "../user/login";

export default function ClinicLogin() {
    return (
        <Login userType={"Clinic"} successLink={"clinic-dashboard"} signupLink={"clinic-signup"} />
    );
}
