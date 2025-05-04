import { Link } from "react-router-dom";
import "./reports-card.scss";

interface ReportProps {
  userId: string;
  objectId: string;
  date: string;
  reportType: string;
  text: string;
}

const ReportsCard = (report: ReportProps) => {
  return (
    <div className="report-card">
      <h1>User ID: {report.userId}</h1>
      <Link to={`/lesson/${report.objectId}`}>
        Object ID: {report.objectId}
      </Link>
      <h2>{report.date}</h2>
      <h3>{report.reportType} </h3>
      <p>{report.text}</p>
      <button>Pending</button>
    </div>
  );
};

export default ReportsCard;
