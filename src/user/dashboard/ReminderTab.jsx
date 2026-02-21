import React from 'react';

function ReminderTab({ reminderSettings, onReminderUpdate }) {
    const [draft, setDraft] = React.useState({
        email: Boolean(reminderSettings?.email),
        windowDays: reminderSettings?.windowDays || 14
    });

    React.useEffect(() => {
        setDraft({
            email: Boolean(reminderSettings?.email),
            windowDays: reminderSettings?.windowDays || 14
        });
    }, [reminderSettings]);

    const saveSettings = () => {
        onReminderUpdate({
            ...reminderSettings,
            email: draft.email,
            windowDays: draft.windowDays
        });
    };

    return (
        <div className="dash-stack">
            <section className="dash-panel">
                <h2 className="dash-heading">Reminder Settings</h2>
                <div className="reminder-grid">
                    <label className="reminder-item">
                        <span>Email reminders</span>
                        <input
                            type="checkbox"
                            checked={Boolean(draft.email)}
                            onChange={() => setDraft((prev) => ({ ...prev, email: !prev.email }))}
                        />
                    </label>
                </div>
            </section>

            <section className="dash-panel">
                <h3 className="dash-section-title">Reminder Window</h3>
                <div className="reminder-window-row">
                    {[7, 14, 30].map((days) => (
                        <button
                            key={days}
                            type="button"
                            onClick={() => setDraft((prev) => ({ ...prev, windowDays: days }))}
                            className={`window-btn ${draft.windowDays === days ? 'window-btn-active' : ''}`}
                        >
                            {days} days before due date
                        </button>
                    ))}
                </div>
                <div className="profile-actions">
                    <button type="button" className="small-btn" onClick={saveSettings}>
                        Save Settings
                    </button>
                </div>
            </section>
        </div>
    );
}

export default ReminderTab;
