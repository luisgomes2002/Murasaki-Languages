import { LanguagesCardProps } from "../../util/interfaces";
import { LanguagesCardArea } from "./languages-card-styled";

const LanguagesCard = (data: LanguagesCardProps) => {
  return (
    <LanguagesCardArea
      to={data.isActive ? data.link : "#"}
      image={data.image}
      isActive={data.isActive}
    >
      <h1>{data.name}</h1>
    </LanguagesCardArea>
  );
};

export default LanguagesCard;
