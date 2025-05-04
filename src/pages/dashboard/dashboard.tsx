import { useState } from "react";
import "./dashboard.scss";
import Users from "../../components/users/users";
import Overview from "../../components/overview/overview";
import PurpleHeader from "../../components/purple-header/purple-header";
import Backlog from "../../components/backlog/backlog";
import Reports from "../../components/reports/reports";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const renderContent = () => {
    switch (activeSection) {
      case "Overview":
        return <Overview />;
      case "Users":
        return <Users />;
      case "Lessons":
      // return <Lessons />;
      case "Plans":
      // return <Plans />;
      case "Reports":
        return <Reports />;
      case "Backlog":
        return <Backlog />;
      default:
        return <Overview />;
    }
  };

  return (
    <div>
      <PurpleHeader />
      <div className="dashboard-area">
        <section className="side-bar">
          <button onClick={() => setActiveSection("Overview")}>
            <i className="fa-solid fa-layer-group"></i> Overview
          </button>
          <button onClick={() => setActiveSection("Users")}>
            <i className="fa-solid fa-users"></i> Users
          </button>
          <button onClick={() => setActiveSection("Lessons")}>
            <i className="fa-solid fa-book"></i> Lessons
          </button>
          <button onClick={() => setActiveSection("Plans")}>
            <i className="fa-solid fa-dollar-sign"></i> Plans
          </button>
          <button onClick={() => setActiveSection("Reports")}>
            <i className="fa-solid fa-file"></i> Reports
          </button>
          <button onClick={() => setActiveSection("Backlog")}>
            <i className="fa-solid fa-file-lines"></i> Backlog
          </button>
        </section>

        <section className="content-area">{renderContent()}</section>
      </div>
    </div>
  );
};

export default Dashboard;
