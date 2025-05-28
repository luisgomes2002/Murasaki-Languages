import { formatDate } from "../../util/format-date";
import {
  LessonCardWrapper,
  ImgLessonCard,
  TagLessonCard,
  InfoLessonCard,
} from "./lesson-card-styled";

interface LessonCardPros {
  id: string;
  thumbLink: string;
  title: string;
  level: string;
  createAt: string;
  visibility: string;
}

const LessonCard = (data: LessonCardPros) => {
  return (
    <LessonCardWrapper to={`/lesson/${data.id}`}>
      <ImgLessonCard>
        <img src={data.thumbLink} alt="banner" />
      </ImgLessonCard>
      <InfoLessonCard>
        <TagLessonCard>
          {data.visibility === "PRIVATE" ? "ASSINANTE" : "GRÁTIS"}
        </TagLessonCard>
        <h1>{data.title}</h1>
        <h2>Dificuldade: {data.level}</h2>
        <h3>{formatDate(data.createAt)}</h3>
      </InfoLessonCard>
    </LessonCardWrapper>
  );
};

export default LessonCard;
