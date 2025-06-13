import { useContext, useState } from "react";
import {
  CreateLessonArea,
  EditorContainer,
  LessonButton,
  LinksContainer,
  LinksList,
  MainButton,
} from "../create-lessons/create-lessons-styled";
import { useNotification } from "../notifications-box/useNotification";
import { UserContext } from "../../context/user-context";
import { updateWorksheetsSection } from "../../services/worksheet.service";
import { Notification } from "../notifications-box/notifications-box";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "../text-bar/meu-bar";

interface Props {
  worksheetsIdByModal: string;
}

const UpdateWorksheet = ({ worksheetsIdByModal }: Props) => {
  const { message, type, showNotification, hideNotification } =
    useNotification();
  const [loading, setLoading] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [optionsInput, setOptionsInput] = useState("");
  const [editorState, setEditorState] = useState<string>("");
  const userContext = useContext(UserContext);

  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
    onUpdate: ({ editor }) => {
      setEditorState(editor.getHTML());
    },
  });

  const getWorksheetToUpdate = async () => {};

  const UpdateWorksheets = async (worksheetToUpdateId: string) => {
    try {
      setLoading(true);

      if (!userContext?.user?.userId) {
        console.error("Usuário não está autenticado.");
        setLoading(false);
        return;
      }

      const response = await updateWorksheetsSection({
        worksheetId: worksheetToUpdateId,
        userId: userContext.user.userId,
      });

      showNotification(response.data.Message, "success");
    } catch (error: any) {
      showNotification(error.response?.data?.Message, "error");
    } finally {
      setLoading(false);
    }
  };

  const addOptions = () => {
    if (optionsInput.trim() === "") return;
    setOptions((prev) => [...prev, optionsInput.trim()]);
    setOptionsInput("");
  };

  const removeOptions = (indexToRemove: number) => {
    setOptions((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <CreateLessonArea>
      <input
        type="text"
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <LinksContainer>
        <input
          type="text"
          placeholder="Options"
          value={optionsInput}
          onChange={(e) => setOptionsInput(e.target.value)}
        />
        <LessonButton type="button" onClick={addOptions}>
          <i className="fa-solid fa-plus"></i>
        </LessonButton>
      </LinksContainer>

      <LinksList>
        {options.map((option, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
            }}
          >
            <a href={option} target="_blank" rel="noopener noreferrer">
              {option}
            </a>
            <LessonButton type="button" onClick={() => removeOptions(index)}>
              <i className="fa-solid fa-trash"></i>
            </LessonButton>
          </li>
        ))}
      </LinksList>

      <input
        type="text"
        placeholder="Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <EditorContainer>
        <EditorContent editor={editor} />
        <MenuBar editor={editor} />
      </EditorContainer>

      <MainButton
        type="button"
        onClick={() => UpdateWorksheets(worksheetsIdByModal)}
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

export default UpdateWorksheet;
