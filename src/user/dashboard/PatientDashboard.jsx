import React from 'react';
import HomeTab from './HomeTab';
import ProfileTab from './ProfileTab';
import VaccinationTab from './VaccinationTab';

function PatientDashboard() {
    const [activeTab, setActiveTab] = React.useState('home');

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-2xl font-bold text-gray-900 py-4">Patient Dashboard</h1>
                    
                    {/* Tab Navigation Buttons */}
                    <div className="flex space-x-1 border-b border-gray-200">
                        <button
                            onClick={() => setActiveTab('home')}
                            className={`px-6 py-3 text-sm font-medium transition-colors ${
                                activeTab === 'home'
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300'
                            }`}
                        >
                            Home
                        </button>
                        <button
                            onClick={() => setActiveTab('profile')}
                            className={`px-6 py-3 text-sm font-medium transition-colors ${
                                activeTab === 'profile'
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300'
                            }`}
                        >
                            Profile
                        </button>
                        <button
                            onClick={() => setActiveTab('vaccination')}
                            className={`px-6 py-3 text-sm font-medium transition-colors ${
                                activeTab === 'vaccination'
                                    ? 'text-blue-600 border-b-2 border-blue-600'
                                    : 'text-gray-500 hover:text-gray-700 hover:border-b-2 hover:border-gray-300'
                            }`}
                        >
                            Vaccination
                        </button>
                    </div>
                </div>
            </div>

            {/* Tab Content Area */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {activeTab === 'home' && <HomeTab />}
                {activeTab === 'profile' && <ProfileTab />}
                {activeTab === 'vaccination' && <VaccinationTab />}
            </div>
        </div>
    );
}

export default PatientDashboard;

