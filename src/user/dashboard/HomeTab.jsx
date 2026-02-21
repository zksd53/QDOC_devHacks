import React from 'react';
import { buildVaccineInsights, formatDate } from './patientUtils';

function HomeTab({ patientProfile, reminderSettings }) {
    const windowDays = reminderSettings?.windowDays || 14;
    const insights = buildVaccineInsights(patientProfile, windowDays);

    return (
        <div className="dash-stack">
            <section className="dash-grid-5">
                <article className="dash-metric-card">
                    <p className="dash-metric-label">Total Vaccines Completed</p>
                    <p className="dash-metric-value">{insights.summary.completedCount}</p>
                </article>
                <article className="dash-metric-card">
                    <p className="dash-metric-label">Due Soon Count</p>
                    <p className="dash-metric-value">{insights.summary.dueSoonCount}</p>
                </article>
                <article className="dash-metric-card">
                    <p className="dash-metric-label">Overdue Count</p>
                    <p className="dash-metric-value">{insights.summary.overdueCount}</p>
                </article>
                <article className="dash-metric-card">
                    <p className="dash-metric-label">Next Scheduled Vaccine</p>
                    <p className="dash-metric-value-small">{insights.summary.nextScheduledName}</p>
                    <p className="dash-muted-small">{formatDate(insights.summary.nextScheduledDate)}</p>
                </article>
            </section>

            <section className="dash-panel">
                <h2 className="dash-heading">Overview</h2>
                <p className="dash-subtext">
                    Keep your profile and vaccination records updated to improve eligibility accuracy and reminders.
                </p>
            </section>
        </div>
    );
}

export default HomeTab;
