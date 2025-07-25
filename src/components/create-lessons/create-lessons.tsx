import { useContext, useState } from "react";
import {
  LessonButton,
  CreateLessonArea,
  LabelOptions,
  LinksContainer,
  LinksList,
  MainButton,
  EditorContainer,
} from "./create-lessons-styled";
import { createLessonService } from "../../services/lessons.service";
import { UserContext } from "../../context/user-context";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import MenuBar from "../../components/text-bar/meu-bar";
import { useNotification } from "../notifications-box/useNotification";
import { Notification } from "../notifications-box/notifications-box";
import { CreateLesson } from "../../util/interfaces/lesson-interface";

const CreateLessons = () => {
  const [linkInput, setLinkInput] = useState("");
  const [linksList, setLinksList] = useState<string[]>([]);
  const [title, setTitle] = useState("");
  const [thumb, setThumb] = useState("");
  const [anki, setAnki] = useState("");
  const [language, setLanguage] = useState("");
  const [level, setLevel] = useState("");
  const userContext = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const { message, type, showNotification, hideNotification } =
    useNotification();

  const editor = useEditor({
    extensions: [StarterKit],
    content: "",
  });

  const createLessonFuncion = async () => {
    try {
      setLoading(true);

      const editorText = editor ? editor.getHTML() : "";

      const lessonData: CreateLesson = {
        title,
        text: editorText,
        links: linksList,
        languageType: language,
        languagesLevels: level,
        ankiLink: anki,
        thumbLink: thumb,
      };

      if (!userContext?.user?.userId) {
        console.error("Usuário não está autenticado.");
        setLoading(false);
        return;
      }

      const response = await createLessonService(
        lessonData,
        userContext?.user.userId,
      );
      showNotification(response.data.Message, "success");

      setTitle("");
      editor?.commands.clearContent();
      setLinksList([]);
      setLanguage("");
      setLevel("");
      setAnki("");
      setThumb("");
    } catch (error: any) {
      showNotification(error.response?.data?.Message, "error");
    } finally {
      setLoading(false);
    }
  };

  const addLink = () => {
    if (linkInput.trim() === "") return;
    setLinksList((prev) => [...prev, linkInput.trim()]);
    setLinkInput("");
  };

  const removeLink = (indexToRemove: number) => {
    setLinksList((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <CreateLessonArea>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <EditorContainer>
        <EditorContent editor={editor} />
        <MenuBar editor={editor} />
      </EditorContainer>

      <LinksContainer>
        <input
          type="text"
          placeholder="Links"
          value={linkInput}
          onChange={(e) => setLinkInput(e.target.value)}
          style={{ flex: 1, marginRight: "10px" }}
        />
        <LessonButton type="button" onClick={addLink}>
          <i className="fa-solid fa-plus"></i>
        </LessonButton>
      </LinksContainer>

      <LinksList>
        {linksList.map((link, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: "10px",
            }}
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
            <LessonButton type="button" onClick={() => removeLink(index)}>
              <i className="fa-solid fa-trash"></i>
            </LessonButton>
          </li>
        ))}
      </LinksList>
      <LabelOptions>
        <div>
          <label>Language:</label>
          <select
            value={language}
            onChange={(e) => {
              setLanguage(e.target.value);
              setLevel("");
            }}
          >
            <option value="">Select</option>
            <option value="JP">Japonês</option>
            <option value="EN">Inglês</option>
            <option value="KO">Coreano</option>
          </select>
        </div>

        <div>
          <label>Level:</label>
          <select value={level} onChange={(e) => setLevel(e.target.value)}>
            <option value="">Select</option>
            {language === "JP" && (
              <>
                <option value="N5">N5</option>
                <option value="N4">N4</option>
                <option value="N3">N3</option>
                <option value="N2">N2</option>
                <option value="N1">N1</option>
              </>
            )}
            {language === "EN" && (
              <>
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="B1">B1</option>
                <option value="B2">B2</option>
                <option value="C1">C1</option>
                <option value="C2">C2</option>
              </>
            )}
            {language === "KO" && (
              <>
                <option value="TOPIK_I_LEVEL_1">TOPIK I - Level 1</option>
                <option value="TOPIK_I_LEVEL_2">TOPIK I - Level 2</option>
                <option value="TOPIK_II_LEVEL_3 ">TOPIK II - Level 3</option>
                <option value="TOPIK_II_LEVEL_4">TOPIK II - Level 4</option>
                <option value="TOPIK_II_LEVEL_5">TOPIK II - Level 5</option>
                <option value="TOPIK_II_LEVEL_6">TOPIK II - Level 6</option>
              </>
            )}
          </select>
        </div>
      </LabelOptions>

      <input
        type="text"
        placeholder="Thumb"
        value={thumb}
        onChange={(e) => setThumb(e.target.value)}
      />

      <input
        type="text"
        placeholder="Anki"
        value={anki}
        onChange={(e) => setAnki(e.target.value)}
      />

      {message && (
        <Notification
          message={message}
          type={type}
          onClose={hideNotification}
        />
      )}

      <MainButton
        type="button"
        onClick={createLessonFuncion}
        disabled={loading}
      >
        {loading ? <i className="fa-solid fa-c fa-spin" /> : "Criar"}
      </MainButton>
    </CreateLessonArea>
  );
};

export default CreateLessons;
