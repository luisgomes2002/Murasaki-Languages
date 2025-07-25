import { useContext, useEffect, useState } from "react";
import Dashboardtitle from "../dashboard-title/dashboard-title";
import {
  Table,
  InfoTable,
  EditButton,
  DeleteButton,
} from "../users/users-styled";
import {
  CreateLesson,
  LessonsOptions,
  SelectAndCreateLesson,
} from "./lessons-styled";
import {
  deleteLessonService,
  getAllLessonsService,
  getLessonByVisibilityService,
} from "../../services/lessons.service";
import { Link } from "react-router-dom";
import CreateLessonModal from "../create-lesson-modal/create-lesson-modal";
import DeletePopup from "../delete-popup/delete-popup";
import { UserContext } from "../../context/user-context";
import { useNotification } from "../notifications-box/useNotification";
import { Notification } from "../notifications-box/notifications-box";
import {
  Conversation,
  DeleteLessonProps,
} from "../../util/interfaces/lesson-interface";

const LessonsList = () => {
  const [lessons, setLessons] = useState<Conversation[]>([]);
  const [selectedVisibility, setSelectedVisibility] = useState<string | null>(
    null,
  );
  const [deleteLesson, setDeleteLesson] = useState<DeleteLessonProps | null>(
    null,
  );
  const [showModal, setShowModal] = useState(false);
  const userContext = useContext(UserContext);
  const { message, type, showNotification, hideNotification } =
    useNotification();

  const fetchLessons = async (visibility?: string) => {
    try {
      if (visibility) {
        const response = await getLessonByVisibilityService(visibility);
        setLessons(response.data ?? []);
      } else {
        const response = await getAllLessonsService();
        setLessons(response.data ?? []);
      }
    } catch (error) {
      console.error("Erro ao buscar aulas:", error);
    }
  };

  const handleCheckboxClick = (visibility: string) => {
    if (selectedVisibility === visibility) {
      setSelectedVisibility(null);
      fetchLessons();
    } else {
      setSelectedVisibility(visibility);
      fetchLessons(visibility);
    }
  };

  const handleDeleteLesson = async () => {
    if (!deleteLesson || !userContext?.user.userId) {
      showNotification("Missing user or lesson ID", "error");
      return;
    }

    try {
      await deleteLessonService({
        lessonId: deleteLesson.lessonId,
        userId: userContext?.user.userId,
        lessonName: deleteLesson.lessonName,
      });
      showNotification("Atividade deletada", "success");
    } catch (error: any) {
      showNotification(error.response?.data?.Message, "error");
    } finally {
      setDeleteLesson(null);
      // await fetchLessons(); -- NÃO ATUALIZA POR CAUSA DO CACHE --
    }
  };

  useEffect(() => {
    fetchLessons();
  }, []);

  return (
    <>
      <Table>
        <Dashboardtitle sectionTitle="Lista de Aulas" />
        <SelectAndCreateLesson>
          <div>
            {["PUBLIC", "PRIVATE"].map((nivel) => (
              <LessonsOptions key={nivel}>
                <input
                  type="checkbox"
                  id={`checkbox-${nivel.toLowerCase()}`}
                  checked={selectedVisibility === nivel}
                  onChange={() => handleCheckboxClick(nivel)}
                />
                <label
                  htmlFor={`checkbox-${nivel.toLowerCase()}`}
                  className="custom-checkbox"
                />
                <p>{nivel}</p>
              </LessonsOptions>
            ))}
          </div>
          <CreateLesson type="button" onClick={() => setShowModal(true)}>
            <i className="fa-solid fa-book-bookmark"></i> New
          </CreateLesson>
        </SelectAndCreateLesson>
        <InfoTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Language</th>
              <th>Level</th>
              <th>Published</th>
              <th>Visibility</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {lessons.map((lesson, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/lesson/${lesson.id}`}>{lesson.id}</Link>
                </td>
                <td>{lesson.title}</td>
                <td>{lesson.languageType}</td>
                <td>{lesson.languagesLevels}</td>
                <td>{lesson.published ? "True" : "False"}</td>
                <td>{lesson.visibility}</td>
                <td>
                  <Link to={`/lesson/update/${lesson.id}`}>
                    <EditButton type="button">
                      <i className="fa-solid fa-pen"></i>
                    </EditButton>
                  </Link>
                </td>
                <td>
                  <DeleteButton
                    type="button"
                    onClick={() => {
                      setDeleteLesson({
                        lessonId: lesson.id,
                        userId: userContext?.user.userId,
                        lessonName: lesson.title,
                      });
                    }}
                  >
                    <i className="fa-solid fa-trash"></i>
                  </DeleteButton>
                </td>
              </tr>
            ))}
          </tbody>
        </InfoTable>
      </Table>

      {deleteLesson && (
        <DeletePopup
          title="Confirmar exclusão"
          description="Tem certeza que deseja excluir esse atividade? Essa ação não poderá ser desfeita."
          onConfirm={handleDeleteLesson}
          onCancel={() => setDeleteLesson(null)}
          confirmText="Excluir"
          cancelText="Cancelar"
        />
      )}

      {showModal && (
        <CreateLessonModal
          onClose={() => {
            setShowModal(false);
            fetchLessons();
          }}
        />
      )}

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

export default LessonsList;
