import ReportsCard from "../reports-card/reports-card";
import "./reports.scss";

const Reports = () => {
  return (
    <div>
      <h1 className="user-title">Reports</h1>
      <input type="text" placeholder="Pesquisar" />
      <section className="report-section">
        <ReportsCard
          userId="fpijd98ufhasdf98f90sd8af9"
          objectId="iodjng8u9dfshgf8d7hdf98"
          date="04/05/2025"
          reportType="LESSON"
          text="A aula esta com erro na traducao da plalavra 公共交通機関"
        />
        <ReportsCard
          userId="fpijd98ufhasdf98f90sd8af9"
          objectId="iodjng8u9dfshgf8d7hdf98"
          date="04/05/2025"
          reportType="LESSON"
          text="A aula esta com erro na traducao da plalavra 公共交通機関"
        />
        <ReportsCard
          userId="fpijd98ufhasdf98f90sd8af9"
          objectId="iodjng8u9dfshgf8d7hdf98"
          date="04/05/2025"
          reportType="LESSON"
          text="A aula esta com erro na traducao da plalavra 公共交通機関"
        />
        <ReportsCard
          userId="fpijd98ufhasdf98f90sd8af9"
          objectId="iodjng8u9dfshgf8d7hdf98"
          date="04/05/2025"
          reportType="LESSON"
          text="A aula esta com erro na traducao da plalavra 公共交通機関"
        />
        <ReportsCard
          userId="fpijd98ufhasdf98f90sd8af9"
          objectId="iodjng8u9dfshgf8d7hdf98"
          date="04/05/2025"
          reportType="LESSON"
          text="A aula esta com erro na traducao da plalavra 公共交通機関"
        />
      </section>
    </div>
  );
};

export default Reports;
