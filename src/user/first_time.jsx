import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FirstTimeUser() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [conditionInput, setConditionInput] = useState("");
  const [conditions, setConditions] = useState([]);
  const [vaccinations, setVaccinations] = useState([
    { vaccineName: "", dateTaken: "" },
  ]);

  const addCondition = () => {
    const value = conditionInput.trim();
    if (!value) return;
    if (conditions.includes(value)) return;
    setConditions((prev) => [...prev, value]);
    setConditionInput("");
  };

  const removeCondition = (value) => {
    setConditions((prev) => prev.filter((item) => item !== value));
  };

  const updateVaccination = (index, field, value) => {
    setVaccinations((prev) =>
      prev.map((item, i) => (i === index ? { ...item, [field]: value } : item))
    );
  };

  const addVaccinationRow = () => {
    setVaccinations((prev) => [
      ...prev,
      { vaccineName: "", dateTaken: "" },
    ]);
  };

  const removeVaccinationRow = (index) => {
    setVaccinations((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const hasValidVaccination = vaccinations.some(
      (item) => item.vaccineName.trim() && item.dateTaken
    );

    if (!name.trim() || !dob || !hasValidVaccination) {
      return;
    }

    sessionStorage.setItem(
      "patient_profile",
      JSON.stringify({ name, dob, conditions, vaccinations })
    );
    navigate("/user/dashboard");
  };

  return (
    <main className="page">
      <form className="form-card" onSubmit={handleSubmit}>
        <h1>Patient First-Time Setup</h1>

        <div className="form-grid">
          <label htmlFor="patient-name">Name:</label>
          <input
            type="text"
            id="patient-name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="patient-dob">DOB:</label>
          <input
            type="date"
            id="patient-dob"
            name="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />

          <label htmlFor="patient-condition-input">Chronic Conditions:</label>
          <div className="list-input-wrap">
            <div className="list-input-row">
              <input
                type="text"
                id="patient-condition-input"
                value={conditionInput}
                onChange={(e) => setConditionInput(e.target.value)}
                placeholder="Type condition and click Add"
              />
              <button type="button" className="small-btn" onClick={addCondition}>
                Add
              </button>
            </div>
            <div className="tag-list">
              {conditions.map((item) => (
                <span key={item} className="tag-chip">
                  {item}
                  <button
                    type="button"
                    className="tag-remove"
                    onClick={() => removeCondition(item)}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          <label>Vaccination History:</label>
          <div className="vax-history">
            {vaccinations.map((vaccine, index) => (
              <div key={index} className="vax-row">
                <input
                  type="text"
                  placeholder="Vaccine name"
                  value={vaccine.vaccineName}
                  onChange={(e) =>
                    updateVaccination(index, "vaccineName", e.target.value)
                  }
                />
                <input
                  type="date"
                  value={vaccine.dateTaken}
                  onChange={(e) =>
                    updateVaccination(index, "dateTaken", e.target.value)
                  }
                />
                <button
                  type="button"
                  className="small-btn danger-btn"
                  onClick={() => removeVaccinationRow(index)}
                  disabled={vaccinations.length === 1}
                >
                  Remove
                </button>
              </div>
            ))}
            <button type="button" className="small-btn" onClick={addVaccinationRow}>
              Add Vaccine
            </button>
          </div>

          <div className="form-actions">
            <button type="submit">Save Profile</button>
          </div>
        </div>
      </form>
    </main>
  );
}
