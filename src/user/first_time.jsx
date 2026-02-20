export default function FirstTimeUser() {
  return (
    <main className="page">
      <form className="form-card">
        <h1>User First-Time Setup</h1>

        <div className="form-grid">
          <label htmlFor="user-first-name">First name:</label>
          <input type="text" id="user-first-name" name="firstName" />

          <label htmlFor="user-last-name">Last name:</label>
          <input type="text" id="user-last-name" name="lastName" />

          <label htmlFor="user-role">Role:</label>
          <input type="text" id="user-role" name="role" placeholder="e.g. Provider, Admin" />

          <label htmlFor="user-license">License number:</label>
          <input type="text" id="user-license" name="licenseNumber" />

          <label htmlFor="user-specialty">Specialty:</label>
          <input type="text" id="user-specialty" name="specialty" />

          <div className="form-actions">
            <button type="submit">Save Profile</button>
          </div>
        </div>
      </form>
    </main>
  );
}
