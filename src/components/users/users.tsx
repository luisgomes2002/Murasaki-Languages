import "./users.scss";

const Users = () => {
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
          {[...Array(13)].map((_, index) => (
            <tr key={index}>
              <td>231j2hfbndhbfys809sd</td>
              <td>Luis Gustavo</td>
              <td>luisgmgomes@gmail.com</td>
              <td>ADMIN</td>
              <td>
                <button className="view-btn">Ver</button>
                <button className="edit-btn">
                  <i className="fa-solid fa-pen"></i>
                </button>
              </td>
              <td>
                <button className="delete-btn">🗑️</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
