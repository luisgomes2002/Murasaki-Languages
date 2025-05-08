import { useEffect, useState } from "react";
import "./users.scss";
import { getAllUsers } from "../../services/user.service";
import { Link } from "react-router-dom";

interface UserProps {
  id: string;
  name: string;
  email: string;
  userType: string;
}

const Users = () => {
  const [data, setData] = useState<UserProps[]>([]);

  const getUsers = async () => {
    const response = await getAllUsers();
    setData(response.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="users-area">
      <div className="header">
        <h1 className="title">Lista de Usuários</h1>
        <input type="text" placeholder="Pesquisar por nome ou email" />
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Função</th>
            <th>Ações</th>
            <th>Excluir</th>
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
                <button className="edit-btn">
                  <i className="fa-solid fa-pen"></i>
                </button>
              </td>
              <td>
                <button className="delete-btn">
                  <i className="fa-solid fa-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
