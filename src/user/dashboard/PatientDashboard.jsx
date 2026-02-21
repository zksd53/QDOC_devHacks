import React from 'react';
import HomeTab from './HomeTab';
import ProfileTab from './ProfileTab';
import VaccinationTab from './VaccinationTab';
import ReminderTab from './ReminderTab';
import '../App.css';

function PatientDashboard() {
    const [activeTab, setActiveTab] = React.useState('home');
    const [patientProfile, setPatientProfile] = React.useState({
        name: '',
        dob: '',
        conditions: [],
        pregnancyStatus: false,
        immunocompromisedStatus: false,
        vaccinations: []
    });
    const [reminderSettings, setReminderSettings] = React.useState({
        email: true,
        sms: false,
        inApp: true,
        windowDays: 14
    });

    React.useEffect(() => {
        const rawProfile = sessionStorage.getItem('patient_profile');
        if (rawProfile) {
            try {
                const parsed = JSON.parse(rawProfile);
                setPatientProfile((prev) => ({
                    ...prev,
                    ...parsed,
                    conditions: Array.isArray(parsed?.conditions) ? parsed.conditions : [],
                    vaccinations: Array.isArray(parsed?.vaccinations) ? parsed.vaccinations : []
                }));
            } catch {
                setPatientProfile((prev) => prev);
            }
        }

        const rawReminder = sessionStorage.getItem('patient_reminders');
        if (rawReminder) {
            try {
                const parsed = JSON.parse(rawReminder);
                setReminderSettings((prev) => ({ ...prev, ...parsed }));
            } catch {
                setReminderSettings((prev) => prev);
            }
        }
    }, []);

    const handleProfileUpdate = (nextProfile) => {
        setPatientProfile(nextProfile);
        sessionStorage.setItem('patient_profile', JSON.stringify(nextProfile));
    };

    const handleReminderUpdate = (nextReminder) => {
        setReminderSettings(nextReminder);
        sessionStorage.setItem('patient_reminders', JSON.stringify(nextReminder));
    };

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div className="dashboard-content">
                    <h1 className="dashboard-title">Patient Dashboard</h1>
                    <div className="tab-navigation">
                        <button
                            onClick={() => setActiveTab('home')}
                            className={`tab-button ${
                                activeTab === 'home'
                                    ? 'tab-button-active'
                                    : 'tab-button-inactive'
                            }`}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => setActiveTab('profile')}
                            className={`tab-button ${
                                activeTab === 'profile'
                                    ? 'tab-button-active'
                                    : 'tab-button-inactive'
                            }`}
                        >
                            Profile
                        </button>
                        <button
                            onClick={() => setActiveTab('vaccination')}
                            className={`tab-button ${
                                activeTab === 'vaccination'
                                    ? 'tab-button-active'
                                    : 'tab-button-inactive'
                            }`}
                        >
                            Vaccination
                        </button>
                        <button
                            onClick={() => setActiveTab('reminders')}
                            className={`tab-button ${
                                activeTab === 'reminders'
                                    ? 'tab-button-active'
                                    : 'tab-button-inactive'
                            }`}
                        >
                            Reminders
                        </button>
                    </div>
                </div>
            </div>

            <div className="dashboard-content tab-content-area">
                {activeTab === 'home' && (
                    <HomeTab
                        patientProfile={patientProfile}
                        reminderSettings={reminderSettings}
                    />
                )}
                {activeTab === 'profile' && (
                    <ProfileTab
                        patientProfile={patientProfile}
                        onProfileUpdate={handleProfileUpdate}
                    />
                )}
                {activeTab === 'vaccination' && (
                    <VaccinationTab
                        patientProfile={patientProfile}
                        reminderSettings={reminderSettings}
                    />
                )}
                {activeTab === 'reminders' && (
                    <ReminderTab
                        reminderSettings={reminderSettings}
                        onReminderUpdate={handleReminderUpdate}
                    />
                )}
            </div>
        </div>
    );
}

export default PatientDashboard;
