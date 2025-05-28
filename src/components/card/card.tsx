import { Link } from "react-router-dom";
import {
  CardCategory,
  CardBtns,
  SpanCard,
  SpanBtns,
  InactiveOverlay,
} from "./card-styled";

interface CardProps {
  title: string;
  link: string;
  image: string;
  active: boolean;
}

const Card = ({ title, link, image, active }: CardProps) => {
  return (
    <CardCategory image={image} active={active}>
      {!active && <InactiveOverlay />}
      <CardBtns>
        {active ? (
          <Link to={link}>
            <SpanCard>
              <h3>{title}</h3>
            </SpanCard>
            <SpanBtns>MOSTRAR MAIS</SpanBtns>
          </Link>
        ) : (
          <div>
            <SpanCard>
              <h3>{title}</h3>
            </SpanCard>
          </div>
        )}
      </CardBtns>
    </CardCategory>
  );
};

export default Card;
