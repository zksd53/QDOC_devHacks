import React from 'react';
import HomeTab from './HomeTab';
import ProfileTab from './ProfileTab';
import VaccinationTab from './VaccinationTab';
import '../../App.css';

function PatientDashboard() {
    const [activeTab, setActiveTab] = React.useState('home');

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <div className="dashboard-content">
                    <h1 className="dashboard-title">Patient Dashboard</h1>
                    
                    {/* Tab Navigation Buttons */}
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
                    </div>
                </div>
            </div>

            {/* Tab Content Area */}
            <div className="dashboard-content tab-content-area">
                {activeTab === 'home' && <HomeTab />}
                {activeTab === 'profile' && <ProfileTab />}
                {activeTab === 'vaccination' && <VaccinationTab />}
            </div>
        </div>
    );
}

export default PatientDashboard;

