import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  url: string;
}

const BackButton = ({ url }: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate(`${url}`)}>
      <i className="fa-solid fa-arrow-left"></i>Back
    </button>
  );
};

export default BackButton;
