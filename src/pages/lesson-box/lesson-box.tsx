import { useContext, useEffect, useMemo, useState } from "react";
import Footer from "../../components/footer/footer";
import { getLessonByIdService } from "../../services/lessons.service";
import { useParams } from "react-router-dom";
import {
  CompletedButton,
  ImgVideoBox,
  LessonBoxArea,
  Options,
  TextSection,
} from "./lesson-box-styled";
import {
  completeLessonService,
  getCompletedLessonService,
  removeLessonService,
} from "../../services/completed-lesson.service";
import { UserContext } from "../../context/user-context";
import LessonText from "../../components/lesson-text/lesson-text";
import LessonWorksheet from "../../components/lesson-worksheet/lesson-worksheet";
import { formatDate } from "../../util/format-date";
import { useNotification } from "../../components/notifications-box/useNotification";
import { Notification } from "../../components/notifications-box/notifications-box";
import TransparentHeader from "../../components/transparent-header/transparent-header";
import { CompleteLessonProps, Conversation } from "../../util/lesson-interface";

const LessonBox = () => {
  const { id } = useParams();
  const [lesson, setLesson] = useState<Conversation>();
  const [completedLesson, setCompletedLesson] = useState<string[]>([]);
  const [isCompleted, setIsCompleted] = useState(false);
  const userContext = useContext(UserContext);
  const [activeSection, setActiveSection] = useState("text");
  const { message, type, showNotification, hideNotification } =
    useNotification();

  const renderContent = () => {
    if (!lesson) return <p>Carregando...</p>;

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

    return lesson.links && lesson.links.length > 1 ? (
      <img src={lesson?.thumbLink} alt={lesson?.title} />
    ) : (
      <iframe
        width="1905"
        height="742"
        src={lesson.links[0]}
        title={lesson.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    );
  }, [lesson]);

  const getLesson = async (id: string) => {
    try {
      const response = await getLessonByIdService(id);
      setLesson(response.data);
      showNotification(response.data.Message, "success");
    } catch (error: any) {
      showNotification(error.response?.data?.Message, "error");
    }
  };

  const getUserCompletedLesson = async (userId: string) => {
    try {
      const response = await getCompletedLessonService(userId);
      const completedLessons: string[] =
        response.data[0]?.completedLessons || [];
      setCompletedLesson(completedLessons);
      showNotification(response.data.Message, "success");
    } catch (error: any) {
      showNotification(error.response?.data?.Message, "error");
    }
  };

  const completeThisLesson = async (data: CompleteLessonProps) => {
    try {
      const response = await completeLessonService(data);
      showNotification(response.data, "success");
    } catch (error: any) {
      showNotification(error.response?.data, "error");
    }
  };

  const removeThisLesson = async (data: CompleteLessonProps) => {
    try {
      const response = await removeLessonService(data);
      showNotification(response.data, "error");
    } catch (error: any) {
      showNotification(error.response?.data, "error");
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
      <TransparentHeader backgroundColor="#0a0520" />
      <LessonBoxArea>
        <ImgVideoBox>
          <h3>{lesson?.name}</h3>
          <p>{lesson?.createAt ? formatDate(lesson.createAt) : ""}</p>
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

      {message && (
        <Notification
          message={message}
          type={type}
          onClose={hideNotification}
        />
      )}
    </>
  );
};

export default LessonBox;
