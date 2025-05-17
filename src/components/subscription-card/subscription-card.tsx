import "./subscription-card.scss";

interface SubscriptionCardProps {
  title: string;
  value: number;
  description: string;
  advantages: string[];
  link: string;
  userEmail?: string;
}

const SubscriptionCard = ({
  title,
  value,
  description,
  advantages,
  link,
  userEmail,
}: SubscriptionCardProps) => {
  return (
    <div className="sub-card">
      <h1>{title}</h1>
      <div className="sub-card-value">
        <h1>R$</h1>
        <h2>{value.toFixed(2)}</h2>
        <h1>/mês</h1>
      </div>
      <h3>{description}</h3>

      <button
        onClick={() =>
          window.open(link + "?prefilled_email=" + userEmail, "_blank")
        }
      >
        Escolher
      </button>

      <hr />
      {advantages.map((advantage, index) => (
        <p key={index}>✅ {advantage}</p>
      ))}
    </div>
  );
};

export default SubscriptionCard;
