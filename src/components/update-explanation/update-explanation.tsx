import { EditorContent, useEditor } from "@tiptap/react";
import {
  CreateLessonArea,
  EditorContainer,
  Error,
  MainButton,
} from "../create-lessons/create-lessons-styled";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "../text-bar/meu-bar";
import { useContext, useEffect, useState } from "react";
import { ExplanationProps } from "../../util/interfaces";
import {
  getExplanationIdService,
  updateExplanationService,
} from "../../services/explanation.service";
import { UserContext } from "../../context/user-context";

interface Props {
  explanationIdByModal: string;
}

const UpdateExplanation = ({ explanationIdByModal }: Props) => {
  const [phrase, setPhrase] = useState("");
  const [translation, setTranslation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");
  const userContext = useContext(UserContext);
  const [editorState, setEditorState] = useState<string>("");

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
      setError(error.response?.data?.Message);
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
      setError("");

      if (!userContext?.user?.userId) {
        console.error("Usuário não está autenticado.");
        setLoading(false);
        return;
      }

      await updateExplanationService(
        explantionData,
        explanationToUpdateId,
        userContext.user.userId,
      );
      alert("Aula atualizada com sucesso!");
      setPhrase("");
      setTranslation("");
      editor?.commands.clearContent();
    } catch (error: any) {
      setError(error.response?.data?.Message);
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

      {error && (
        <Error>
          <i className="fa-solid fa-circle-info"></i>
          {error}
        </Error>
      )}

      <MainButton
        type="button"
        onClick={() => updateExplanation(explanationIdByModal)}
        disabled={loading}
      >
        {loading ? <i className="fa-solid fa-c fa-spin" /> : "Update"}
      </MainButton>
    </CreateLessonArea>
  );
};

export default UpdateExplanation;
