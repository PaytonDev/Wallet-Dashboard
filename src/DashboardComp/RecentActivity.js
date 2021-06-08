import React from 'react';
import { RecentActivityTable } from "./RecentActivityTable"
import "./RecentActivity.css"

const RecentActivity = () => {
    return (
        <div className="RecentActivity">
            <header className="RecentActivity-header">
                <p>Recent Activity</p>
            </header>
            <RecentActivityTable className="RecentActivity-table"/>
        </div>
    )
}

export default RecentActivity;