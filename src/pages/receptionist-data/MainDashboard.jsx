import React from 'react';
import './main.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import PatientsData from './PatientsData';
// import AnalyticChart from '../AnalyticChart';
// import BarChart from './BarChart';
// import DashboardData from './DashboardData';

function MainDashboard() {
  return (
    <div className="flex flex-row">
      {/* sidebar  */}
      <div className="bg-backgroundGray">
        <Sidebar />
      </div>
      {/* main + navbar */}
      <div className=" w-full bg-backgroundGray">
        <Navbar />
        {/* <DashboardData /> */}
        <PatientsData />
      </div>
    </div>
  );
}

export default MainDashboard;