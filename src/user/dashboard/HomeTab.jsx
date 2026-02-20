import React from 'react';

function HomeTab({ setActiveTab }) {
    // Mock patient data - will be replaced with real data from backend later
    const patientData = {
        name: "Jane Doe",
        dob: "1985-04-15",
        chronicConditions: ["diabetes_type_2", "asthma"],
        pregnancyStatus: false
    };

    // Mock vaccination history - will be replaced with real data from backend later
    const vaccinationHistory = [
        {
            id: 1,
            vaccine: "COVID-19",
            date: "2023-10-01",
            dose: 3,
            status: "Completed"
        },
        {
            id: 2,
            vaccine: "Tdap",
            date: "2015-06-10",
            dose: 1,
            status: "Completed"
        },
        {
            id: 3,
            vaccine: "Influenza",
            date: "2023-11-15",
            dose: 1,
            status: "Completed"
        },
        {
            id: 4,
            vaccine: "HPV",
            date: "2022-03-20",
            dose: 2,
            status: "Completed"
        }
    ];

    // Mock due/overdue vaccines - will be replaced with real eligibility logic later
    const dueVaccines = [
        {
            id: 1,
            vaccine: "COVID-19",
            status: "Due Soon",
            dueDate: "2024-04-01",
            daysUntil: 15
        },
        {
            id: 2,
            vaccine: "Tetanus",
            status: "Overdue",
            dueDate: "2023-06-10",
            daysOverdue: 280
        },
        {
            id: 3,
            vaccine: "Influenza",
            status: "Due",
            dueDate: "2024-11-15",
            daysUntil: 240
        }
    ];

    // Get recent history (last 3)
    const recentHistory = vaccinationHistory.slice(0, 3);
    
    // Calculate quick stats
    const totalVaccinations = vaccinationHistory.length;
    const overdueCount = dueVaccines.filter(v => v.status === "Overdue").length;
    const dueSoonCount = dueVaccines.filter(v => v.status === "Due Soon").length;
    const lastVaccination = vaccinationHistory.length > 0 ? vaccinationHistory[0] : null;

    // Format date helper
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
    };

    return (
        <div className="home-tab">
            {/* Welcome Section */}
            <div className="home-welcome-card">
                <h2 className="home-welcome-title">Welcome back, {patientData.name}!</h2>
                <p className="home-welcome-text">Here's an overview of your vaccination status</p>
            </div>

            {/* Quick Stats */}
            <div className="home-stats-grid">
                <div className="home-stat-card">
                    <div className="home-stat-value">{totalVaccinations}</div>
                    <div className="home-stat-label">Total Vaccinations</div>
                </div>
                <div className="home-stat-card">
                    <div className="home-stat-value">{overdueCount}</div>
                    <div className="home-stat-label">Overdue</div>
                </div>
                <div className="home-stat-card">
                    <div className="home-stat-value">{dueSoonCount}</div>
                    <div className="home-stat-label">Due Soon</div>
                </div>
                {lastVaccination && (
                    <div className="home-stat-card">
                        <div className="home-stat-value-small">{formatDate(lastVaccination.date)}</div>
                        <div className="home-stat-label">Last Vaccination</div>
                    </div>
                )}
            </div>

            {/* Due/Overdue Vaccines Section */}
            <div className="home-section-card">
                <h3 className="home-section-title">Due & Overdue Vaccines</h3>
                {dueVaccines.length > 0 ? (
                    <div className="home-vaccine-list">
                        {dueVaccines.map((vaccine) => (
                            <div 
                                key={vaccine.id} 
                                className={`home-vaccine-item home-vaccine-${vaccine.status.toLowerCase().replace(' ', '-')}`}
                            >
                                <div className="home-vaccine-info">
                                    <div className="home-vaccine-name">{vaccine.vaccine}</div>
                                    <div className="home-vaccine-date">
                                        {vaccine.status === "Overdue" 
                                            ? `${vaccine.daysOverdue} days overdue` 
                                            : `Due ${formatDate(vaccine.dueDate)}`}
                                    </div>
                                </div>
                                <div className={`home-vaccine-status home-status-${vaccine.status.toLowerCase().replace(' ', '-')}`}>
                                    {vaccine.status}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="home-empty-message">No vaccines due at this time.</p>
                )}
            </div>

            {/* Recent Vaccination History Preview */}
            <div className="home-section-card">
                <div className="home-section-header">
                    <h3 className="home-section-title">Recent Vaccination History</h3>
                    <button 
                        className="home-view-all-button"
                        onClick={() => setActiveTab('vaccination')}
                    >
                        View All
                    </button>
                </div>
                {recentHistory.length > 0 ? (
                    <div className="home-history-list">
                        {recentHistory.map((vaccination) => (
                            <div 
                                key={vaccination.id}
                                className="home-history-item"
                                onClick={() => setActiveTab('vaccination')}
                            >
                                <div className="home-history-info">
                                    <div className="home-history-vaccine">{vaccination.vaccine}</div>
                                    <div className="home-history-details">
                                        Dose {vaccination.dose} • {formatDate(vaccination.date)}
                                    </div>
                                </div>
                                <div className="home-history-status">{vaccination.status}</div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="home-empty-message">No vaccination history available.</p>
                )}
            </div>
        </div>
    );
}

export default HomeTab;

