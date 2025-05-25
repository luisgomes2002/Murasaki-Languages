import { TitleSearch } from "./dashboard-title-styled";

type DashboardTitleProps = {
  sectionTitle: string;
};

const Dashboardtitle = ({ sectionTitle }: DashboardTitleProps) => {
  return (
    <TitleSearch>
      <h1 className="title">{sectionTitle}</h1>
      <input type="text" placeholder="Pesquisar" />
    </TitleSearch>
  );
};

export default Dashboardtitle;
