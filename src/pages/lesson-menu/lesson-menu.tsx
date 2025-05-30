import { useState } from "react";
import UpdateLesson from "../../components/update-lesson/update-lesson";
import Worksheets from "../../components/worksheets/worksheets";
import { Link } from "react-router-dom";
import ExplanationCreateAndUpdate from "../../components/explanation/explanation";

const LessonMenu = () => {
  const [activeSection, setActiveSection] = useState("update");

  const renderContent = () => {
    switch (activeSection) {
      case "update":
        return <UpdateLesson />;
      case "explanation":
        return <ExplanationCreateAndUpdate />;
      case "worksheet":
        return <Worksheets />;

      default:
        return <UpdateLesson />;
    }
  };

  return (
    <div className="dashboard-area">
      <section className="side-bar">
        <div className="side-bar-title">
          <Link to="/">MURASAKI</Link>
        </div>
        <button
          onClick={() => setActiveSection("update")}
          className={activeSection === "update" ? "active" : ""}
        >
          <i className="fa-solid fa-pen"></i> Update
        </button>
        <button
          onClick={() => setActiveSection("explanation")}
          className={activeSection === "explanation" ? "active" : ""}
        >
          <i className="fa-solid fa-book-open"></i>Explanation
        </button>
        <button
          onClick={() => setActiveSection("worksheet")}
          className={activeSection === "worksheet" ? "active" : ""}
        >
          <i className="fa-solid fa-person-chalkboard"></i> Worksheet
        </button>
      </section>

      <section className="content-area">{renderContent()}</section>
    </div>
  );
};

export default LessonMenu;
