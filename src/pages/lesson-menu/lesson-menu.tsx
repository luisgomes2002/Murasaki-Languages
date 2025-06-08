import { useState } from "react";
import UpdateLesson from "../../components/update-lesson/update-lesson";
import CreateWorksheets from "../../components/worksheets/create-worksheets";
import { Link } from "react-router-dom";
import CreateExplanation from "../../components/explanation/explanation";
import UpdateExplanationSection from "../../components/update-explanation-section/update-explanation-section";
import BackButton from "../../components/back-button/back-button";

const LessonMenu = () => {
  const [activeSection, setActiveSection] = useState("update");

  const renderContent = () => {
    switch (activeSection) {
      case "update-lesson":
        return <UpdateLesson />;
      case "create-explanation":
        return <CreateExplanation />;
      case "update-explanation":
        return <UpdateExplanationSection />;
      case "create-worksheet":
        return <CreateWorksheets />;
      case "update-worksheet":
        return <CreateWorksheets />;

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
          onClick={() => setActiveSection("update-lesson")}
          className={activeSection === "update-lesson" ? "active" : ""}
        >
          <i className="fa-solid fa-pen"></i> Update Lesson
        </button>
        <button
          onClick={() => setActiveSection("create-explanation")}
          className={activeSection === "create-explanation" ? "active" : ""}
        >
          <i className="fa-solid fa-book-open"></i>Create Explanation
        </button>
        <button
          onClick={() => setActiveSection("update-explanation")}
          className={activeSection === "update-explanation" ? "active" : ""}
        >
          <i className="fa-solid fa-book-open"></i>Update Explanation
        </button>
        <button
          onClick={() => setActiveSection("create-worksheet")}
          className={activeSection === "create-worksheet" ? "active" : ""}
        >
          <i className="fa-solid fa-person-chalkboard"></i>Create Worksheet
        </button>
        <button
          onClick={() => setActiveSection("update-worksheet")}
          className={activeSection === "update-worksheet" ? "active" : ""}
        >
          <i className="fa-solid fa-person-chalkboard"></i>Update Worksheet
        </button>

        <BackButton url="/dashboard" />
      </section>

      <section className="content-area">{renderContent()}</section>
    </div>
  );
};

export default LessonMenu;
