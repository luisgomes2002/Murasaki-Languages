import { Link } from "react-router-dom";
import "./purple-header.scss";

const PurpleHeader = () => {
  return (
    <nav className="purple-nav">
      <Link to="/">MURASAKI</Link>

      <div>
        <section>
          <Link to="">Sobre</Link>
          <Link to="">Aulas</Link>
          <Link to="/subscription">Planos</Link>
          <Link to="">Comunidade</Link>
        </section>

        <button className="purple-header-button">Entrar</button>
      </div>
    </nav>
  );
};

export default PurpleHeader;
