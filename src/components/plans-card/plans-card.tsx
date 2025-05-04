import { useNavigate } from "react-router-dom";
import "./plans-card.scss";

interface PlansProps {
  id: string;
  title: string;
  description: string;
  value: number;
  advantages: string[];
}

const PlansCard = (plans: PlansProps) => {
  const navigate = useNavigate();

  return (
    <div className="plans-card-dashboard">
      <div>
        <h1>{plans.title}</h1>
        <button onClick={() => navigate(`/subscription-update/${plans.id}`)}>
          <i className="fa-solid fa-pen"></i>
        </button>
      </div>

      <h2>{plans.value}</h2>
      <h3>{plans.description}</h3>
      {plans.advantages.map((advantage, index) => (
        <p key={index}>{advantage}</p>
      ))}
    </div>
  );
};

export default PlansCard;
