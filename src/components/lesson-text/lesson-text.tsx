import { useEffect, useState } from "react";
import { getExplanationId } from "../../services/explanation.service";
import { Explanation, LessonTextProps } from "../../util/interfaces";
import {
  ExplanationsBox,
  InfoBox,
  LessonTextDecoration,
} from "./lesson-text-styled";

const LessonText = ({ text, explanation }: LessonTextProps) => {
  const [detailedExplanations, setDetailedExplanations] = useState<
    Explanation[]
  >([]);

  const getExplanation = async (ids: string[]) => {
    try {
      const responses = await Promise.all(
        ids.map((id) => getExplanationId(id)),
      );

      const allExplanations = responses.map((res) => res.data);
      setDetailedExplanations(allExplanations.flat());
    } catch (error) {
      console.error("Erro ao buscar explicações: ", error);
    }
  };

  useEffect(() => {
    getExplanation(explanation);
  }, [explanation]);

  return (
    <ExplanationsBox>
      <LessonTextDecoration>
        {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
      </LessonTextDecoration>

      {detailedExplanations.map((item, index) => (
        <div key={item.id}>
          <InfoBox>
            <h1>Frase {index + 1}:</h1>
            <span>
              <i className="fa-solid fa-chevron-up"></i>
            </span>
          </InfoBox>

          <h1>{item.phrase}</h1>
          <h2>{item.translation}</h2>
          <p>{item.explanation}</p>
        </div>
      ))}
    </ExplanationsBox>
  );
};

export default LessonText;
