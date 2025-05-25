import { useState } from "react";
import "./dashboard.scss";
import Users from "../../components/users/users";
import Overview from "../../components/overview/overview";
import Backlog from "../../components/backlog/backlog";
import Reports from "../../components/reports/reports";
import Plans from "../../components/plans/plans";
import { Link } from "react-router-dom";
import LessonsList from "../../components/lessons/lessons";

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState("overview");

  const renderContent = () => {
    switch (activeSection) {
      case "Overview":
        return <Overview />;
      case "Users":
        return <Users />;
      case "Lessons":
        return <LessonsList />;
      case "Plans":
        return <Plans />;
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
      <div className="dashboard-area">
        <section className="side-bar">
          <div className="side-bar-title">
            <Link to="/">MURASAKI</Link>
          </div>
          <button
            onClick={() => setActiveSection("Overview")}
            className={activeSection === "Overview" ? "active" : ""}
          >
            <i className="fa-solid fa-layer-group"></i> Overview
          </button>
          <button
            onClick={() => setActiveSection("Users")}
            className={activeSection === "Users" ? "active" : ""}
          >
            <i className="fa-solid fa-users"></i> Users
          </button>
          <button
            onClick={() => setActiveSection("Lessons")}
            className={activeSection === "Lessons" ? "active" : ""}
          >
            <i className="fa-solid fa-book"></i> Lessons
          </button>
          <button
            onClick={() => setActiveSection("Plans")}
            className={activeSection === "Plans" ? "active" : ""}
          >
            <i className="fa-solid fa-dollar-sign"></i> Plans
          </button>
          <button
            onClick={() => setActiveSection("Reports")}
            className={activeSection === "Reports" ? "active" : ""}
          >
            <i className="fa-solid fa-file"></i> Reports
          </button>
          <button
            onClick={() => setActiveSection("Backlog")}
            className={activeSection === "Backlog" ? "active" : ""}
          >
            <i className="fa-solid fa-file-lines"></i> Backlog
          </button>
        </section>

        <section className="content-area">{renderContent()}</section>
      </div>
    </div>
  );
};

export default Dashboard;
