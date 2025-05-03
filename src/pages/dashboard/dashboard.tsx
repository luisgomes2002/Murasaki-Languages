import WhiteHeader from "../../components/white-header/white-header";
import "./dashboard.scss";

const Dashboard = () => {
  return (
    <div>
      <WhiteHeader />
      <div className="dashboard-area">
        <section className="side-bar">
          <button>Overview</button>
          <button>
            <i className="fa-solid fa-users"></i>Users
          </button>
          <button>Lessons</button>
          <button>
            <i className="fa-solid fa-coins"></i>Plans
          </button>
          <button>
            <i className="fa-solid fa-file"></i>Reports
          </button>
          <button>Backlog</button>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
