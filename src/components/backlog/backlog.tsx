import { useEffect, useState } from "react";
import { getAllBacklogService } from "../../services/backlog.service";
import { Link } from "react-router-dom";
import Dashboardtitle from "../dashboard-title/dashboard-title";
import { BacklogProps } from "../../util/interfaces/backlog-interface";
import Pagination from "../pagination/pagination";
import { InfoTable, Table } from "../users/users-styled";

const Backlog = () => {
  const [data, setData] = useState<BacklogProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 15;

  const fetchData = async (page: number) => {
    try {
      const response = await getAllBacklogService(page - 1, pageSize);
      setData(response.data.content);
      setTotalPages(response.data.totalPages);
    } catch (error) {
      console.error("Erro ao buscar backlogs:", error);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  return (
    <Table>
      <Dashboardtitle sectionTitle="Backlog" />
      <InfoTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>Descrição</th>
          </tr>
        </thead>
        <tbody>
          {data.map((backlog, index) => (
            <tr key={index}>
              <td>
                <Link to={`/profile/${backlog.user}`}>{backlog.user}</Link>
              </td>
              <td>{new Date(backlog.createdAt).toLocaleDateString("pt-BR")}</td>
              <td>{backlog.description}</td>
            </tr>
          ))}
        </tbody>
      </InfoTable>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </Table>
  );
};

export default Backlog;
