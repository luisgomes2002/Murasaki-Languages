import { useEffect, useState } from "react";
import Dashboardtitle from "../dashboard-title/dashboard-title";
import { Table, InfoTable, EditButton } from "../users/users-styled";
import { LessonsOptions } from "./lessons-styled";
import { getAllLessons } from "../../services/lessons.service";
import { Conversation } from "../../util/interfaces";
import { Link } from "react-router-dom";

const LessonsList = () => {
  const [lessons, setLessons] = useState<Conversation[]>([]);

  const fetchLessons = async () => {
    try {
      const response = await getAllLessons();
      setLessons(response.data ?? []);
    } catch (error) {
      console.error("Erro ao buscar aulas:", error);
    }
  };

  useEffect(() => {
    fetchLessons();
  }, []);

  return (
    <Table>
      <Dashboardtitle sectionTitle="Lista de Aulas" />
      {["PUBLIC", "PRIVATE"].map((nivel) => (
        <LessonsOptions key={nivel}>
          <input type="checkbox" id={`checkbox-${nivel.toLowerCase()}`} />
          <label
            htmlFor={`checkbox-${nivel.toLowerCase()}`}
            className="custom-checkbox"
          />
          <p>{nivel}</p>
        </LessonsOptions>
      ))}
      <button>New</button>
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
              <td>{lesson.japaneseLevels}</td>
              <td>{lesson.published ? "True" : "False"} </td>
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
  );
};

export default LessonsList;
