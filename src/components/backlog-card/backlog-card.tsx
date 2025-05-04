import "./backlog-card.scss";

interface BacklogProps {
  userId: string;
  date: string;
  description: string;
}

const BacklogCard = (log: BacklogProps) => {
  return (
    <div className="log-card">
      <h1>{log.userId}</h1>
      <h2>{log.date}</h2>
      <p>{log.description}</p>
    </div>
  );
};

export default BacklogCard;
