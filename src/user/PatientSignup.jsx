import { useState } from "react";

export default function PatientSignup() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: "",
        gender: "",
        birth: "",
        phone: "",
        email: "",
        password: "",
    });

    // Update state when inputs change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Handle form submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(formData);
        try {
            const response = await fetch("https://devhacks-backend.vercel.app/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                console.log("Signup successful!", data);
                alert("Account created successfully!");
                // You could redirect the user here, e.g., navigate("/login")
            } else {
                console.error("Signup failed:", data.message || data);
                alert("Signup failed: " + (data.message || "Unknown error"));
            }
        } catch (error) {
            console.error("Network error:", error);
            alert("Network error, please try again.");
        }
    };

    return (
        <main className="page">
            <form className="form-card" onSubmit={handleSubmit}>
                <h1>Let's Setup Your Account</h1>
                <div className="form-grid">
                    <label htmlFor="user-first-name">First name:</label>
                    <input
                        type="text"
                        id="user-first-name"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="user-last-name">Last name:</label>
                    <input
                        type="text"
                        id="user-last-name"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="user-address">Address:</label>
                    <input
                        type="text"
                        id="user-address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                    />

                    <label htmlFor="user-gender">Gender:</label>
                    <input
                        type="text"
                        id="user-gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                    />

                    <label htmlFor="user-birth">Birth:</label>
                    <input
                        type="text"
                        id="user-birth"
                        name="birth"
                        value={formData.birth}
                        onChange={handleChange}
                    />

                    <label htmlFor="user-phone">Phone:</label>
                    <input
                        type="text"
                        id="user-phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />

                    <label htmlFor="user-email">Email:</label>
                    <input
                        type="email"
                        id="user-email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />

                    <label htmlFor="user-password">Password:</label>
                    <input
                        type="password"
                        id="user-password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />

                    <div className="form-actions">
                        <button type="submit">Save Profile</button>
                    </div>
                </div>
            </form>
        </main>
    );
}
