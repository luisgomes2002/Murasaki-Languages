import "./backlog.scss";

const Backlog = () => {
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
          {[...Array(13)].map((_, index) => (
            <tr key={index}>
              <td>jidnaifh9d78shfhad7sdaf89s</td>
              <td>04/05/2025</td>
              <td>Criou uma conta: Luis</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Backlog;
