import { useContext, useEffect, useState } from "react";
import {
  deleteExplanationService,
  getExplanationIdService,
} from "../../services/explanation.service";
import {
  ExplanationCardCreate,
  ExplanationIndex,
  ExplanationUpdateArea,
} from "../explanation/explanation-styled";
import UpdateExplanationModal from "../update-explanation-modal/update-explanation-modal";
import { Conversation, Explanation } from "../../util/interfaces";
import { useParams } from "react-router-dom";
import { getLessonByIdService } from "../../services/lessons.service";
import { UserContext } from "../../context/user-context";
import { Notification } from "../notifications-box/notifications-box";
import { useNotification } from "../notifications-box/useNotification";

const UpdateExplanationSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedExplanationId, setSelectedExplanationId] =
    useState<string>("");
  const [explations, setExplations] = useState<Explanation[]>([]);
  const [lesson, setLesson] = useState<Conversation>();
  const { id } = useParams();
  const userContext = useContext(UserContext);
  const { message, type, showNotification, hideNotification } =
    useNotification();

  const getLessonById = async (id: string) => {
    try {
      const resposne = await getLessonByIdService(id);
      setLesson(resposne.data);
    } catch (error: any) {
      showNotification(error.response?.data?.Message, "error");
    }
  };

  const getExplanationById = async (ids: string[]) => {
    try {
      const response = await Promise.all(
        ids.map((id) => getExplanationIdService(id)),
      );

      const allExplanations = response.map((res) => res.data);
      setExplations(allExplanations.flat());
    } catch (error: any) {
      showNotification(error.response?.data?.Message, "error");
    }
  };

  useEffect(() => {
    if (lesson?.explanations?.length) getExplanationById(lesson.explanations);
  }, [lesson]);

  useEffect(() => {
    if (id) getLessonById(id);
  }, [id]);

  return (
    <ExplanationUpdateArea>
      <h1>Update Explanations</h1>

      {explations.map((explanation, index) => (
        <ExplanationCardCreate key={index}>
          <ExplanationIndex>
            <p>Explanation {1 + index}:</p>

            <div>
              <button
                onClick={() => {
                  setSelectedExplanationId(explanation.id);
                  setShowModal(true);
                }}
              >
                <i className="fa-solid fa-pen"></i>
              </button>
              <button
                onClick={async () => {
                  if (!id || !userContext?.user.userId) {
                    showNotification("Missing user or lesson ID", "error");
                    return;
                  }

                  await deleteExplanationService({
                    explanationId: explanation.id,
                    lessonId: id,
                    userId: userContext?.user.userId,
                  });
                }}
              >
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </ExplanationIndex>
          <h1>{explanation.phrase}</h1>
          <h2>{explanation.translation}</h2>
          <h3 dangerouslySetInnerHTML={{ __html: explanation.explanation }} />
        </ExplanationCardCreate>
      ))}

      {showModal && (
        <UpdateExplanationModal
          explanationIdByModal={selectedExplanationId}
          onClose={() => {
            setShowModal(false);
            setSelectedExplanationId("");
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
    </ExplanationUpdateArea>
  );
};

export default UpdateExplanationSection;
