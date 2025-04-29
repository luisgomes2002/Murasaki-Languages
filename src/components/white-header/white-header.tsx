import { Link } from "react-router-dom";
import "./white-header.scss";

const WhiteHeader = () => {
  return (
    <nav className="white-nav">
      <Link to="/">MURASAKI</Link>

      <div>
        <section>
          <Link to="">Sobre</Link>
          <Link to="">Aulas</Link>
          <Link to="/subscription">Planos</Link>
          <Link to="">Comunidade</Link>
        </section>

        <button className="white-header-button">Entrar</button>
      </div>
    </nav>
  );
};

export default WhiteHeader;
