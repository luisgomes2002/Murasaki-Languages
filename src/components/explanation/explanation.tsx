import { useContext, useState } from "react";
import { createExplanationService } from "../../services/explanation.service";
import { LessonsCreateAndUpdateArea } from "./explanation-styled";
import { useParams } from "react-router-dom";
import {
  EditorContainer,
  MainButton,
} from "../create-lessons/create-lessons-styled";
import { EditorContent, useEditor } from "@tiptap/react";
import MenuBar from "../text-bar/meu-bar";
import StarterKit from "@tiptap/starter-kit";
import { UserContext } from "../../context/user-context";
import { useNotification } from "../notifications-box/useNotification";
import { Notification } from "../notifications-box/notifications-box";
import { ExplanationProps } from "../../util/interfaces/explanation-interface";

const CreateExplanation = () => {
  const userContext = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [phrase, setPhrase] = useState("");
  const [translation, setTranslation] = useState("");
  const { id } = useParams();
  const { message, type, showNotification, hideNotification } =
    useNotification();

  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
  });

  const createExplanation = async (
    explanation: ExplanationProps,
    lessonId: string,
    userId: string,
  ) => {
    try {
      setLoading(true);
      const response = await createExplanationService(
        explanation,
        lessonId,
        userId,
      );

      showNotification(response.data.Message, "success");
      setPhrase("");
      setTranslation("");
      editor?.commands.clearContent();
    } catch (error: any) {
      showNotification(error.response?.data?.Message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LessonsCreateAndUpdateArea>
      <h1>Create Explanations</h1>

      <input
        type="text"
        placeholder="Phrase"
        value={phrase}
        onChange={(e) => setPhrase(e.target.value)}
      />
      <input
        type="text"
        placeholder="Translation"
        value={translation}
        onChange={(e) => setTranslation(e.target.value)}
      />

      <EditorContainer>
        <EditorContent editor={editor} />
        <MenuBar editor={editor} />
      </EditorContainer>

      <MainButton
        type="button"
        onClick={() => {
          if (!editor) {
            showNotification("Digie uma explicação", "error");
            return;
          }

          if (!id) {
            showNotification("Id não encontrado", "error");
            return;
          }

          if (!userContext?.user.userId) {
            showNotification("Usuário não autenticado", "error");
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

export default CreateExplanation;
