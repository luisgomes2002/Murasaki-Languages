import "./user-card.scss";

interface userProps {
  id: string;
  name: string;
  email: string;
  role: string;
}

const UserCard = (user: userProps) => {
  const UpdadeRole = () => {};

  const DeleteUser = () => {};

  return (
    <div className="user-card">
      <div>
        <p>#{user.id}</p>
        <h1>{user.name}</h1>
      </div>
      <h2>{user.email}</h2>
      <select id="role" name="role">
        <option value="ADMIN">ADMIN</option>
        <option value="MOD">MOD</option>
        <option value="COMMUM">COMMUM</option>
      </select>

      <button>Status: Normal</button>

      <button className="close-button">
        <i className="fa-solid fa-xmark"></i>
      </button>
    </div>
  );
};

export default UserCard;
