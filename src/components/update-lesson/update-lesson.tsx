import { useParams } from "react-router-dom";
import {
  CreateLessonArea,
  Error,
  LabelOptions,
  LessonButton,
  LinksContainer,
  LinksList,
  MainButton,
} from "../create-lessons/create-lessons-styled";
import Footer from "../footer/footer";
import PurpleHeader from "../purple-header/purple-header";
import { getLessonById, updateLesson } from "../../services/lessons.service";
import { Conversation } from "../../util/interfaces";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

const UpdateLesson = () => {
  const { id } = useParams();
  const [lesson, setLesson] = useState<Conversation>();
  const [title, setTitle] = useState("");
  const [editorState, setEditorState] = useState<string>("");
  const [linksList, setLinksList] = useState<string[]>([]);
  const [linkInput, setLinkInput] = useState("");
  const [language, setLanguage] = useState("");
  const [level, setLevel] = useState("");
  const [thumb, setThumb] = useState("");
  const [anki, setAnki] = useState("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (id) getLessonToUpdate(id);
  }, [id]);

  const getLessonToUpdate = async (id: string) => {
    try {
      const response = await getLessonById(id);
      const lessonData = response.data;
      setLesson(lessonData);
      setTitle(lessonData.title || "");
      setEditorState(lessonData.text || "");
      setLinksList(lessonData.links || []);
      setLanguage(lessonData.languageType || "");
      setLevel(lessonData.japaneseLevels || "");
      setThumb(lessonData.thumbLink || "");
      setAnki(lessonData.ankiLink || "");
    } catch (error: any) {
      console.error(error);
      setError("Erro ao carregar aula.");
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

  const updateThisLesson = async () => {
    if (!lesson) return;

    const userId = Cookies.get("userId");
    if (!userId) {
      setError("Usuário não autenticado.");
      return;
    }

    const updateData = {
      id: lesson.id,
      title,
      text: editorState,
      links: linksList,
      name: lesson.name,
      languageType: language,
      japaneseLevels: level,
      ankiLink: anki,
      thumbLink: thumb,
    };

    try {
      setLoading(true);
      setError("");
      await updateLesson(updateData, userId);
      alert("Aula atualizada com sucesso!");
    } catch (error: any) {
      console.error(error.response);
      setError("Erro ao atualizar aula.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <PurpleHeader />
      <CreateLessonArea>
        <h1>Editar aula</h1>

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <LexicalEditor
          onChange={(state) => setEditorState(JSON.stringify(state))}
          initialEditorState={editorState}
        />

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
                  <option value="TOPIK I - Level 1">TOPIK I - Level 1</option>
                  <option value="TOPIK I - Level 2">TOPIK I - Level 2</option>
                  <option value="TOPIK II - Level 3">TOPIK II - Level 3</option>
                  <option value="TOPIK II - Level 4">TOPIK II - Level 4</option>
                  <option value="TOPIK II - Level 5">TOPIK II - Level 5</option>
                  <option value="TOPIK II - Level 6">TOPIK II - Level 6</option>
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

        <Error>
          <i className="fa-solid fa-circle-info"></i>
          {error}
        </Error>

        <MainButton type="button" onClick={updateThisLesson} disabled={loading}>
          {loading ? (
            <i className="fa-solid fa-spinner fa-spin" />
          ) : (
            "Atualizar"
          )}
        </MainButton>
      </CreateLessonArea>
      <Footer />
    </div>
  );
};

export default UpdateLesson;
