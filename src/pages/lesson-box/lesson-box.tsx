import { useContext, useEffect, useMemo, useState } from "react";
import Footer from "../../components/footer/footer";
import PurpleHeader from "../../components/purple-header/purple-header";
import { getLessonById } from "../../services/lessons.service";
import { useParams } from "react-router-dom";
import {
  CompletedButton,
  ImgVideoBox,
  LessonBoxArea,
  Options,
  TextSection,
} from "./lesson-box-styled";
import { CompleteLessonProps, Conversation } from "../../util/interfaces";
import {
  completeLesson,
  getCompletedLesson,
  removeLesson,
} from "../../services/completed-lesson.service";
import { UserContext } from "../../context/user-context";
import LessonText from "../../components/lesson-text/lesson-text";
import LessonWorksheet from "../../components/lesson-worksheet/lesson-worksheet";

const LessonBox = () => {
  const { id } = useParams();
  const [lesson, setLesson] = useState<Conversation>();
  const [completedLesson, setCompletedLesson] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const userContext = useContext(UserContext);
  const [activeSection, setActiveSection] = useState("text");

  const renderContent = () => {
    if (!lesson || !lesson.text || !lesson.explanations) return null;

    switch (activeSection) {
      case "text":
        return (
          <LessonText text={lesson?.text} explanation={lesson?.explanations} />
        );
      case "lesson":
        return (
          <LessonWorksheet
            worksheets={lesson.worksheets}
            anki={lesson.ankiLink}
          />
        );
      default:
        return (
          <LessonText text={lesson?.text} explanation={lesson?.explanations} />
        );
    }
  };

  const videoContent = useMemo(() => {
    if (!lesson) return null;

    return lesson.links && lesson.links.length > 0 ? (
      <iframe
        width="1905"
        height="742"
        src={lesson.links[0]}
        title={lesson.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    ) : (
      <img src={lesson?.thumbLink} alt={lesson?.title} />
    );
  }, [lesson]);

  const getLesson = async (id: string) => {
    try {
      const response = await getLessonById(id);
      setLesson(response.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const getUserCompletedLesson = async (userId: string) => {
    try {
      const response = await getCompletedLesson(userId);
      const completedLessons: string[] =
        response.data[0]?.completedLessons || [];
      setCompletedLesson(completedLessons);
    } catch (error: any) {
      console.log(error);
    }
  };

  const completeThisLesson = async (data: CompleteLessonProps) => {
    try {
      await completeLesson(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const removeThisLesson = async (data: CompleteLessonProps) => {
    try {
      await removeLesson(data);
    } catch (error: any) {
      console.log(error);
    }
  };

  const handleToggleComplete = async () => {
    if (!userContext?.user.userId || !id) return;

    const data: CompleteLessonProps = {
      userId: userContext.user.userId,
      lessonId: id,
    };

    if (isCompleted) {
      await removeThisLesson(data);
      setIsCompleted(false);
    } else {
      await completeThisLesson(data);
      setIsCompleted(true);
    }
  };

  useEffect(() => {
    if (id) getLesson(id);
    if (userContext?.user.userId)
      getUserCompletedLesson(userContext?.user.userId);
  }, [id, userContext?.user.userId]);

  useEffect(() => {
    if (completedLesson && id) {
      setIsCompleted(completedLesson.includes(id));
    }
  }, [completedLesson, id]);

  return (
    <>
      <PurpleHeader />
      <LessonBoxArea>
        <ImgVideoBox>
          <h1>{lesson?.title}</h1>
          {videoContent}
          <CompletedButton
            $isCompleted={isCompleted}
            onClick={handleToggleComplete}
          >
            <p>{isCompleted ? "Concluído" : "Concluir"}</p>
            <i className="fa-solid fa-check"></i>
          </CompletedButton>
        </ImgVideoBox>

        <TextSection>
          <Options $activeSection={activeSection}>
            <button onClick={() => setActiveSection("text")}>Texto</button>
            <button onClick={() => setActiveSection("lesson")}>
              Atividades
            </button>
          </Options>

          {renderContent()}
        </TextSection>
      </LessonBoxArea>
      <Footer />
    </>
  );
};

export default LessonBox;
