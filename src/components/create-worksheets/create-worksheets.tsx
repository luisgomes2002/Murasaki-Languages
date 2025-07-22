import { useContext, useState } from "react";
import { LessonsCreateAndUpdateArea } from "../explanation/explanation-styled";
import { useNotification } from "../notifications-box/useNotification";
import { Notification } from "../notifications-box/notifications-box";
import { createWorksheetsService } from "../../services/worksheet.service";
import { useParams } from "react-router-dom";
import { UserContext } from "../../context/user-context";
import {
  EditorContainer,
  LessonButton,
  LinksContainer,
  LinksList,
  MainButton,
} from "../create-lessons/create-lessons-styled";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "../text-bar/meu-bar";
import { WorksheetsProps } from "../../util/worksheet-interface";

const CreateWorksheets = () => {
  const { id } = useParams();
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [optionsInput, setOptionsInput] = useState("");
  const userContext = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const { message, type, showNotification, hideNotification } =
    useNotification();

  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
  });

  const createWorkSheets = async (lessonId: string, userId: string) => {
    try {
      setLoading(true);

      if (!editor) {
        showNotification("Digie uma explicação", "error");
        return;
      }

      const workSheetData: WorksheetsProps = {
        question: question,
        options: options,
        answer: answer,
        explanation: editor.getHTML(),
      };

      const response = await createWorksheetsService(
        lessonId,
        userId,
        workSheetData,
      );
      showNotification(response.data.Message, "success");

      setQuestion("");
      setOptions([]);
      setAnswer("");
      editor?.commands.clearContent();
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
    <LessonsCreateAndUpdateArea>
      <h1>Create Worksheets</h1>

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

      {message && (
        <Notification
          message={message}
          type={type}
          onClose={hideNotification}
        />
      )}

      <MainButton
        type="button"
        onClick={() => {
          if (!id) {
            showNotification("Id não encontrado", "error");
            return;
          }

          if (!userContext?.user.userId) {
            showNotification("Usuário não autenticado", "error");
            return;
          }

          createWorkSheets(id, userContext?.user.userId);
        }}
        disabled={loading}
      >
        {loading ? <i className="fa-solid fa-c fa-spin" /> : "Criar"}
      </MainButton>
    </LessonsCreateAndUpdateArea>
  );
};

export default CreateWorksheets;
