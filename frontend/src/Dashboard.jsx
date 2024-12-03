import React from 'react';
import Sidebar from './components/SideBar';
import Header from './components/Header';
import DashboardHeader from './DashboardHeader';
import DashboardCard from './DashboardCard';

const Dashboard = () => {
  return (
    <div className="h-screen flex ">
      {/* Sidebar */}
      <Sidebar />

      <div className="flex flex-1 flex-col bg-[#f7fbff] overflow-auto">
        {/* Header */}
        <Header />
        {/* dashboard header */}
        <DashboardHeader />

        {/* Cards Section */}
        <DashboardCard />
      </div>
    </div>
  );
};

export default Dashboard;
