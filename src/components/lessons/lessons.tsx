import { useEffect, useState } from "react";
import Dashboardtitle from "../dashboard-title/dashboard-title";
import { Table, InfoTable, EditButton } from "../users/users-styled";
import {
  CreateLesson,
  LessonsOptions,
  SelectAndCreateLesson,
} from "./lessons-styled";
import {
  getAllLessonsService,
  getLessonByVisibilityService,
} from "../../services/lessons.service";
import { Conversation } from "../../util/interfaces";
import { Link } from "react-router-dom";
import CreateLessonModal from "../create-lesson-modal/create-lesson-modal";

const LessonsList = () => {
  const [lessons, setLessons] = useState<Conversation[]>([]);
  const [selectedVisibility, setSelectedVisibility] = useState<string | null>(
    null,
  );
  const [showModal, setShowModal] = useState(false);

  const fetchLessons = async (visibility?: string) => {
    try {
      if (visibility) {
        const response = await getLessonByVisibilityService(visibility);
        setLessons(response.data ?? []);
      } else {
        const response = await getAllLessonsService();
        setLessons(response.data ?? []);
      }
    } catch (error) {
      console.error("Erro ao buscar aulas:", error);
    }
  };

  const handleCheckboxClick = (visibility: string) => {
    if (selectedVisibility === visibility) {
      setSelectedVisibility(null);
      fetchLessons();
    } else {
      setSelectedVisibility(visibility);
      fetchLessons(visibility);
    }
  };

  useEffect(() => {
    fetchLessons();
  }, []);

  return (
    <>
      <Table>
        <Dashboardtitle sectionTitle="Lista de Aulas" />
        <SelectAndCreateLesson>
          <div>
            {["PUBLIC", "PRIVATE"].map((nivel) => (
              <LessonsOptions key={nivel}>
                <input
                  type="checkbox"
                  id={`checkbox-${nivel.toLowerCase()}`}
                  checked={selectedVisibility === nivel}
                  onChange={() => handleCheckboxClick(nivel)}
                />
                <label
                  htmlFor={`checkbox-${nivel.toLowerCase()}`}
                  className="custom-checkbox"
                />
                <p>{nivel}</p>
              </LessonsOptions>
            ))}
          </div>
          <CreateLesson type="button" onClick={() => setShowModal(true)}>
            <i className="fa-solid fa-book-bookmark"></i> New
          </CreateLesson>
        </SelectAndCreateLesson>
        <InfoTable>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Language</th>
              <th>Level</th>
              <th>Published</th>
              <th>Visibility</th>
              <th>Update</th>
            </tr>
          </thead>
          <tbody>
            {lessons.map((lesson, index) => (
              <tr key={index}>
                <td>
                  <Link to={`/lesson/${lesson.id}`}>{lesson.id}</Link>
                </td>
                <td>{lesson.title}</td>
                <td>{lesson.languageType}</td>
                <td>{lesson.languagesLevels}</td>
                <td>{lesson.published ? "True" : "False"}</td>
                <td>{lesson.visibility}</td>
                <td>
                  <Link to={`/lesson/update/${lesson.id}`}>
                    <EditButton type="button">
                      <i className="fa-solid fa-pen"></i>
                    </EditButton>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </InfoTable>
      </Table>

      {showModal && (
        <CreateLessonModal
          onClose={() => {
            setShowModal(false);
            fetchLessons();
          }}
        />
      )}
    </>
  );
};

export default LessonsList;
