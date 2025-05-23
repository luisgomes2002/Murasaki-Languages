import { useEffect, useState } from "react";
import "./backlog.scss";
import { getAllBacklog } from "../../services/backlog.service";
import { Link } from "react-router-dom";
import { BacklogProps } from "../../util/interfaces";

const Backlog = () => {
  const [data, setData] = useState<BacklogProps[]>([]);

  const getBacklog = async () => {
    const response = await getAllBacklog();
    setData(response.data);
  };

  useEffect(() => {
    getBacklog();
  }, []);

  return (
    <div className="backlog-area">
      <div className="header">
        <h1 className="title">Backlog</h1>
        <input type="text" placeholder="Pesquisar por data" />
      </div>

      <table className="backlog-table">
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
      </table>
    </div>
  );
};

export default Backlog;
