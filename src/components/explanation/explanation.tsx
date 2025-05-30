import { useEffect, useState } from "react";
import { getExplanationIdService } from "../../services/explanation.service";
import { ExplanationUpdateArea } from "./explanation-styled";
import { useParams } from "react-router-dom";
import { getLessonByIdService } from "../../services/lessons.service";
import { Conversation, Explanation } from "../../util/interfaces";

const ExplanationCreateAndUpdate = () => {
  const { id } = useParams();
  const [explations, setExplations] = useState<Explanation[]>([]);
  const [lesson, setLesson] = useState<Conversation>();

  const getLessonById = async (id: string) => {
    try {
      const resposne = await getLessonByIdService(id);
      setLesson(resposne.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const getExplanationById = async (ids: string[]) => {
    try {
      const response = await Promise.all(
        ids.map((id) => getExplanationIdService(id)),
      );

      const allExplanations = response.map((res) => res.data);
      setExplations(allExplanations.flat());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (id) getLessonById(id);
  }, [id]);

  useEffect(() => {
    if (lesson?.explanations?.length) getExplanationById(lesson.explanations);
  }, [lesson]);

  return (
    <ExplanationUpdateArea>
      <input type="text" placeholder="phrase" />
      <input type="text" placeholder="translation" />
      <input type="text" placeholder="explanation" />

      {explations.map((explanation, index) => (
        <>
          <p key={index}></p>
          <h1>{explanation.phrase}</h1>
        </>
      ))}
    </ExplanationUpdateArea>
  );
};

export default ExplanationCreateAndUpdate;
