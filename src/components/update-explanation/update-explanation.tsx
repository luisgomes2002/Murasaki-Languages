import { EditorContent, useEditor } from "@tiptap/react";
import {
  CreateLessonArea,
  EditorContainer,
  MainButton,
} from "../create-lessons/create-lessons-styled";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "../text-bar/meu-bar";
import { useContext, useEffect, useState } from "react";
import {
  getExplanationIdService,
  updateExplanationService,
} from "../../services/explanation.service";
import { UserContext } from "../../context/user-context";
import { Notification } from "../notifications-box/notifications-box";
import { useNotification } from "../notifications-box/useNotification";
import { ExplanationProps } from "../../util/explanation-interface";

interface Props {
  explanationIdByModal: string;
}

const UpdateExplanation = ({ explanationIdByModal }: Props) => {
  const [phrase, setPhrase] = useState("");
  const [translation, setTranslation] = useState("");
  const [loading, setLoading] = useState(false);
  const userContext = useContext(UserContext);
  const [editorState, setEditorState] = useState<string>("");
  const { message, type, showNotification, hideNotification } =
    useNotification();

  useEffect(() => {
    getExplanationToUpdate();
  }, []);

  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    onUpdate: ({ editor }) => {
      setEditorState(editor.getHTML());
    },
  });

  const getExplanationToUpdate = async () => {
    try {
      const response = await getExplanationIdService(explanationIdByModal);

      setPhrase(response.data.phrase);
      setTranslation(response.data.translation);

      if (editor) editor.commands.setContent(response.data.explanation);
      else setEditorState(response.data.explanation);
    } catch (error: any) {
      showNotification(error.response?.data?.Message, "error");
    }
  };

  const updateExplanation = async (explanationToUpdateId: string) => {
    if (!phrase || !translation || !editorState) return;

    const explantionData: ExplanationProps = {
      phrase: phrase,
      translation: translation,
      explanation: editorState,
    };

    try {
      setLoading(true);

      if (!userContext?.user?.userId) {
        console.error("Usuário não está autenticado.");
        setLoading(false);
        return;
      }

      const response = await updateExplanationService(
        explantionData,
        explanationToUpdateId,
        userContext.user.userId,
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
    <CreateLessonArea>
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

      <MainButton
        type="button"
        onClick={() => updateExplanation(explanationIdByModal)}
        disabled={loading}
      >
        {loading ? <i className="fa-solid fa-c fa-spin" /> : "Update"}
      </MainButton>

      {message && (
        <Notification
          message={message}
          type={type}
          onClose={hideNotification}
        />
      )}
    </CreateLessonArea>
  );
};

export default UpdateExplanation;
