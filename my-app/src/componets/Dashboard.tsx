import React from 'react';
import { useState } from 'react';
import NavBar from './NavBar';
import DashboardTaskView from './DashboardTaskView';



export default function Dashboard() {


  return (
    <div className="dashboard-container">
        <DashboardTaskView />
    </div>
  );
}

