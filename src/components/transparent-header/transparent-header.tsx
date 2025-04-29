import { Link } from "react-router-dom";
import "./transparent-header.scss";

const TransparentHeader = () => {
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

        <button className="header-button">Entrar</button>
      </div>
    </nav>
  );
};

export default TransparentHeader;
