import { useEffect, useState } from "react";
import { getAllUsersService } from "../../services/user.service";
import { Link } from "react-router-dom";
import Dashboardtitle from "../dashboard-title/dashboard-title";
import { InfoTable, EditButton, Table } from "./users-styled";
import Pagination from "../pagination/pagination";
import { Notification } from "../notifications-box/notifications-box";
import { useNotification } from "../notifications-box/useNotification";

interface UserProps {
  id: string;
  name: string;
  email: string;
  userType: string;
}

const Users = () => {
  const [data, setData] = useState<UserProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const pageSize = 15;
  const { message, type, showNotification, hideNotification } =
    useNotification();

  const getUsers = async (page: number) => {
    try {
      const response = await getAllUsersService(page - 1, pageSize);
      setData(response.data.content);
      setTotalPages(response.data.totalPages);
      showNotification(response.data.Message, "success");
    } catch (error: any) {
      showNotification(error.response?.data?.Message, "error");
    }
  };

  useEffect(() => {
    getUsers(currentPage);
  }, [currentPage]);

  return (
    <Table>
      <Dashboardtitle sectionTitle="Lista de Usuários" />
      <InfoTable>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Função</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={index}>
              <td>
                <Link to={`/profile/${user.id}`}>{user.id}</Link>
              </td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.userType}</td>
              <td>
                <EditButton>
                  <i className="fa-solid fa-pen"></i>
                </EditButton>
              </td>
            </tr>
          ))}
        </tbody>
      </InfoTable>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={(page) => setCurrentPage(page)}
      />

      {message && (
        <Notification
          message={message}
          type={type}
          onClose={hideNotification}
        />
      )}
    </Table>
  );
};

export default Users;
