import { useEffect, useState } from "react";
import { getAllUsersService } from "../../services/user.service";
import { Link } from "react-router-dom";
import Dashboardtitle from "../dashboard-title/dashboard-title";
import { InfoTable, EditButton, DeleteButton, Table } from "./users-styled";

interface UserProps {
  id: string;
  name: string;
  email: string;
  userType: string;
}

const Users = () => {
  const [data, setData] = useState<UserProps[]>([]);

  const getUsers = async () => {
    const response = await getAllUsersService();
    setData(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

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
    </Table>
  );
};

export default Users;
