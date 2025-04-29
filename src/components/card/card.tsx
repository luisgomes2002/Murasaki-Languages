import { Link } from "react-router-dom";
import "./card.scss";

const Card = () => {
  return (
    <div className="card">
      <div className="card-btns">
        <Link to="/lesson">
          <span className="span-card">
            <h3>COMUNIDADE</h3>
          </span>
          <span className="span-btns">MOSTRAR MAIS</span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
