import { Link } from "react-router-dom";
import { CardCategory, CardBtns, SpanCard, SpanBtns } from "./card-styled";

interface CardProps {
  title: string;
  link: string;
  image: string;
}

const Card = ({ title, link, image }: CardProps) => {
  return (
    <CardCategory image={image}>
      <CardBtns>
        <Link to={link}>
          <SpanCard>
            <h3>{title}</h3>
          </SpanCard>
          <SpanBtns>MOSTRAR MAIS</SpanBtns>
        </Link>
      </CardBtns>
    </CardCategory>
  );
};

export default Card;
