import { Link } from "react-router-dom";
import "./transparent-header.scss";
import { useContext } from "react";
import { UserContext } from "../../context/user-context";

const TransparentHeader = () => {
  const userContext = useContext(UserContext);

  return (
    <nav className="nav">
      <Link to="">MURASAKI</Link>

      <div>
        <section>
          <Link to="">Sobre</Link>
          <Link to="">Aulas</Link>
          <Link to="/subscription">Planos</Link>
          <Link to="">Comunidade</Link>
        </section>

        {userContext?.user?.name ? (
          <>
            <Link to="/">{userContext.user.name}</Link>
            <button>
              <i className="fa-solid fa-caret-down"></i>
            </button>
            {/* <Link to="/sign-in">Sair</Link> */}
          </>
        ) : (
          <Link to="/sign-in" className="header-button-transparent">
            Entrar
          </Link>
        )}
      </div>
    </nav>
  );
};

export default TransparentHeader;
