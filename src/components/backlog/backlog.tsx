import { useEffect, useState } from "react";
import "./backlog.scss";
import { getAllBacklog } from "../../services/backlog.service";

interface BacklogProps {
  id: string;
  user: string;
  description: string;
  createdAt: string;
}

const Backlog = () => {
  const [data, setData] = useState<BacklogProps[]>([]);

  const getBacklog = async () => {
    const response = await getAllBacklog();
    console.log(response.data);
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
              <td>{backlog.user}</td>
              <td>{backlog.createdAt}</td>
              <td>{backlog.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Backlog;
