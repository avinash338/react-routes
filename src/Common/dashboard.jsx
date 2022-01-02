import React from "react";
import Header from "./header";
import Sidebar from "./sidebar";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Sidebar role={localStorage.getItem("role")} />
    </div>
  );
};

export default Dashboard;
