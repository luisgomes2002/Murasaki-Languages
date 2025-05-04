import UserCard from "../user-card/user-card";
import "./users.scss";

const Users = () => {
  return (
    <div>
      <h1 className="user-title">Tabela de Usuários</h1>
      <input type="text" placeholder="Pesquisar" />

      <section>
        <UserCard
          id="231j2hfbndhbfys809sd"
          name="Luis Gustavo"
          email="luisgmgomes@gmail.com"
          role="ADMIN"
        />

        <UserCard
          id="231j2hfbndhbfys809sd"
          name="Luis Gustavo"
          email="luisgmgomes@gmail.com"
          role="ADMIN"
        />

        <UserCard
          id="231j2hfbndhbfys809sd"
          name="Luis Gustavo"
          email="luisgmgomes@gmail.com"
          role="ADMIN"
        />

        <UserCard
          id="231j2hfbndhbfys809sd"
          name="Luis Gustavo de Melo Gomes"
          email="luisgmgomes@gmail.com"
          role="ADMIN"
        />

        <UserCard
          id="231j2hfbndhbfys809sd"
          name="Luis Gustavo"
          email="luisgmgomes@gmail.com"
          role="ADMIN"
        />

        <UserCard
          id="231j2hfbndhbfys809sd"
          name="Luis Gustavo"
          email="luisgmgomes@gmail.com"
          role="ADMIN"
        />

        <UserCard
          id="231j2hfbndhbfys809sd"
          name="Luis Gustavo"
          email="luisgmgomes@gmail.com"
          role="ADMIN"
        />
      </section>
    </div>
  );
};

export default Users;
