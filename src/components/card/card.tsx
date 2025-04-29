import { Link } from "react-router-dom";
import "./card.scss";

interface CardPros {
  title: string;
  link: string;
  image: string;
}

const Card = ({ title, link, image }: CardPros) => {
  return (
    <div
      className="card"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.253) 0%, #000000 700%), url(${image})`,
      }}
    >
      <div className="card-btns">
        <Link to={link}>
          <span className="span-card">
            <h3>{title}</h3>
          </span>
          <span className="span-btns">MOSTRAR MAIS</span>
        </Link>
      </div>
    </div>
  );
};

export default Card;
