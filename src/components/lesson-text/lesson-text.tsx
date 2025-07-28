import { useEffect, useState } from "react";
import { getExplanationIdService } from "../../services/explanation.service";
import {
  ExplanationContent,
  ExplanationsBox,
  InfoBox,
  LessonTextDecoration,
} from "./lesson-text-styled";
import { LessonTextProps } from "../../util/interfaces/lesson-interface";
import { Explanation } from "../../util/interfaces/explanation-interface";

const LessonText = ({ text, explanation }: LessonTextProps) => {
  const [detailedExplanations, setDetailedExplanations] = useState<
    Explanation[]
  >([]);
  const [openIndexes, setOpenIndexes] = useState<boolean[]>([]);

  const getExplanation = async (ids: string[]) => {
    try {
      const responses = await Promise.all(
        ids.map((id) => getExplanationIdService(id)),
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

  useEffect(() => {
    // Inicializa todos como abertos
    setOpenIndexes(Array(detailedExplanations.length).fill(true));
  }, [detailedExplanations]);

  const toggleExplanation = (index: number) => {
    setOpenIndexes((prev) =>
      prev.map((open, i) => (i === index ? !open : open)),
    );
  };

  return (
    <ExplanationsBox>
      <LessonTextDecoration>
        {text && <div dangerouslySetInnerHTML={{ __html: text }} />}
      </LessonTextDecoration>

      {detailedExplanations.map((item, index) => (
        <div key={item.id}>
          <InfoBox>
            <h1>Frase {index + 1}:</h1>
            <span onClick={() => toggleExplanation(index)}>
              <i
                className={`fa-solid ${
                  openIndexes[index] ? "fa-chevron-up" : "fa-chevron-down"
                }`}
              ></i>
            </span>
          </InfoBox>

          <ExplanationContent isOpen={openIndexes[index]}>
            <h1>{item.phrase}</h1>
            <h2>{item.translation}</h2>
            <p dangerouslySetInnerHTML={{ __html: item.explanation }} />
          </ExplanationContent>
        </div>
      ))}
    </ExplanationsBox>
  );
};

export default LessonText;
