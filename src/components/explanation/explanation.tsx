import { useContext, useEffect, useState } from "react";
import {
  createExplanationService,
  deleteExplanationService,
  getExplanationIdService,
} from "../../services/explanation.service";
import {
  ExplanationCardCreate,
  ExplanationIndex,
  ExplanationUpdateArea,
} from "./explanation-styled";
import { useParams } from "react-router-dom";
import { getLessonByIdService } from "../../services/lessons.service";
import {
  Conversation,
  Explanation,
  ExplanationProps,
} from "../../util/interfaces";
import {
  EditorContainer,
  Error,
  MainButton,
} from "../create-lessons/create-lessons-styled";
import { EditorContent, useEditor } from "@tiptap/react";
import MenuBar from "../text-bar/meu-bar";
import StarterKit from "@tiptap/starter-kit";
import { UserContext } from "../../context/user-context";
import UpdateExplanationModal from "../update-explanation-modal/update-explanation-modal";

const ExplanationCreateAndUpdate = () => {
  const { id } = useParams();
  const userContext = useContext(UserContext);
  const [explations, setExplations] = useState<Explanation[]>([]);
  const [lesson, setLesson] = useState<Conversation>();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [phrase, setPhrase] = useState("");
  const [translation, setTranslation] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedExplanationId, setSelectedExplanationId] =
    useState<string>("");

  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
  });

  const getLessonById = async (id: string) => {
    try {
      const resposne = await getLessonByIdService(id);
      setLesson(resposne.data);
    } catch (error: any) {
      setError(error.response?.data?.Message);
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

  const createExplanation = async (
    explanation: ExplanationProps,
    lessonId: string,
    userId: string,
  ) => {
    try {
      setLoading(true);
      await createExplanationService(explanation, lessonId, userId);
      await getLessonById(lessonId);
      setPhrase("");
      setTranslation("");
      editor?.commands.clearContent();
      setError("");
    } catch (error: any) {
      setError(error.response?.data?.Message || "Erro ao criar explicação.");
    } finally {
      setLoading(false);
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
      <h1>Create Explanations</h1>

      <input
        type="text"
        placeholder="phrase"
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
      />
      <input
        type="text"
        placeholder="translation"
        value={translation}
        onChange={(e) => setTranslation(e.target.value)}
      />

      <EditorContainer>
        <EditorContent editor={editor} />
        <MenuBar editor={editor} />
      </EditorContainer>

      {error && (
        <Error>
          <i className="fa-solid fa-circle-info"></i>
          {error}
        </Error>
      )}

      <MainButton
        type="button"
        onClick={() => {
          if (!editor) {
            setError("Editor, aula ou usuário não encontrados.");
            return;
          }

          const explanationData: ExplanationProps = {
            phrase,
            translation,
            explanation: editor.getHTML(),
          };

          createExplanation(explanationData, id, userContext?.user.userId);
        }}
        disabled={loading}
      >
        {loading ? <i className="fa-solid fa-spinner fa-spin" /> : "Criar"}
      </MainButton>

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
    </ExplanationUpdateArea>
  );
};

export default ExplanationCreateAndUpdate;
