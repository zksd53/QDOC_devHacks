export default function FirstTimeClient() {
  return (
    <main className="page">
      <form className="form-card">
        <h1>Client First-Time Setup</h1>

        <div className="form-grid">
          <label htmlFor="client-first-name">First name:</label>
          <input type="text" id="client-first-name" name="firstName" />

          <label htmlFor="client-last-name">Last name:</label>
          <input type="text" id="client-last-name" name="lastName" />

          <label htmlFor="client-dob">DOB:</label>
          <input type="date" id="client-dob" name="dob" />

          <label htmlFor="client-chronic-conditions">Chronic conditions:</label>
          <textarea
            id="client-chronic-conditions"
            name="chronicConditions"
            rows="4"
            placeholder="List any ongoing health conditions"
          />

          <label htmlFor="client-vaccination-history">Vaccination history:</label>
          <textarea
            id="client-vaccination-history"
            name="vaccinationHistory"
            rows="4"
            placeholder="Enter recent vaccines or dates"
          />

          <div className="form-actions">
            <button type="submit">Save Profile</button>
          </div>
        </div>
      </form>
    </main>
  );
}
