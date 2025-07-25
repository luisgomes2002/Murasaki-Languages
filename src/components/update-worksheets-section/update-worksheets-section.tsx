import { useContext, useEffect, useState } from "react";
import {
  ExplanationAndWorksheetsCardCreate,
  ExplanationIndex,
  LessonsCreateAndUpdateArea,
} from "../explanation/explanation-styled";
import { useNotification } from "../notifications-box/useNotification";
import { useParams } from "react-router-dom";
import { getLessonByIdService } from "../../services/lessons.service";
import {
  deleteWorksheetsService,
  getWorksheetIdService,
} from "../../services/worksheet.service";
import { Notification } from "../notifications-box/notifications-box";
import { UserContext } from "../../context/user-context";
import UpdateWorksheetsModal from "../update-worksheets-modal/update-worksheets-modal";
import DeletePopup from "../delete-popup/delete-popup";
import { Conversation } from "../../util/interfaces/lesson-interface";
import { Worksheets } from "../../util/interfaces/worksheet-interface";

const UpdateWorksheetsSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [deleteWorksheetsId, setDeleteWorksheetsId] = useState<string | null>(
    null,
  );
  const [worksheets, setWorksheets] = useState<Worksheets[]>([]);
  const [selectedWorksheetsId, setSelectedWorksheetsId] = useState<string>("");
  const [lesson, setLesson] = useState<Conversation>();
  const { message, type, showNotification, hideNotification } =
    useNotification();
  const { id } = useParams();
  const userContext = useContext(UserContext);

  const getLessonById = async (id: string) => {
    try {
      const resposne = await getLessonByIdService(id);

      setLesson(resposne.data);
    } catch (error: any) {
      showNotification(error.response?.data?.Message, "error");
    }
  };

  const getWorksheetsById = async (ids: string[]) => {
    try {
      const response = await Promise.all(
        ids.map((id) => getWorksheetIdService(id)),
      );

      const allworksheets = response.map((res) => res.data);
      setWorksheets(allworksheets.flat());
    } catch (error: any) {
      showNotification(error.response?.data?.Message, "error");
    }
  };

  const handleDeleteWorksheet = async () => {
    if (!deleteWorksheetsId || !id || !userContext?.user.userId) {
      showNotification("Missing user or lesson ID", "error");
      return;
    }

    try {
      const response = await deleteWorksheetsService({
        worksheetId: deleteWorksheetsId,
        lessonId: id,
        userId: userContext?.user.userId,
      });
      setWorksheets((prev) =>
        prev.filter((exp) => exp.id !== deleteWorksheetsId),
      );
      showNotification(response.data.Message, "success");
    } catch (error: any) {
      showNotification(error.response?.data?.Message, "error");
    } finally {
      setDeleteWorksheetsId(null);
    }
  };

  useEffect(() => {
    if (lesson?.worksheets?.length) getWorksheetsById(lesson.worksheets);
  }, [lesson]);

  useEffect(() => {
    if (id) getLessonById(id);
  }, [id]);

  return (
    <LessonsCreateAndUpdateArea>
      <h1>Update Worksheets</h1>

      {worksheets.map((worksheets, index) => (
        <ExplanationAndWorksheetsCardCreate>
          <ExplanationIndex>
            <p>Worksheet {1 + index}:</p>

            <div>
              <button
                onClick={() => {
                  setSelectedWorksheetsId(worksheets.id);
                  setShowModal(true);
                }}
              >
                <i className="fa-solid fa-pen"></i>
              </button>
              <button
                onClick={() => {
                  setDeleteWorksheetsId(worksheets.id);
                }}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </ExplanationIndex>
          <h2>Question: {worksheets.question}</h2>
          <h2>Options: {worksheets.options}</h2>
          <h2>Answer: {worksheets.answer}</h2>
          <h2 dangerouslySetInnerHTML={{ __html: worksheets.explanation }} />
        </ExplanationAndWorksheetsCardCreate>
      ))}

      {deleteWorksheetsId && (
        <DeletePopup
          title="Confirmar exclusão"
          description="Tem certeza que deseja excluir esse worksheet? Essa ação não poderá ser desfeita."
          onConfirm={handleDeleteWorksheet}
          onCancel={() => setDeleteWorksheetsId(null)}
          confirmText="Excluir"
          cancelText="Cancelar"
        />
      )}

      {showModal && (
        <UpdateWorksheetsModal
          worksheetIdByModal={selectedWorksheetsId}
          onClose={() => {
            setShowModal(false);
            setSelectedWorksheetsId("");
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
    </LessonsCreateAndUpdateArea>
  );
};

export default UpdateWorksheetsSection;
