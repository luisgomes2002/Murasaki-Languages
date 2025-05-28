import { useEffect, useState } from "react";
import Footer from "../../components/footer/footer";
import LessonCard from "../../components/lesson-card/lesson-card";
import TransparentHeader from "../../components/transparent-header/transparent-header";
import {
  getAllJapaneseLessonsByPublishedTrue,
  getAllPublishedTrueLesson,
  getJapaneseLessonByLevel,
  getJapanesePublicLesson,
  getPublicJapaneseLessonByLevel,
  getPublicLesson,
} from "../../services/lessons.service";
import {
  LessonsBackground,
  LessonsArea,
  SideBar,
  Options,
  Lessons,
  Text,
  Card,
} from "./lesson-page-styled";
import { PublishedLesson } from "../../util/interfaces";
import { useParams } from "react-router-dom";

const LessonsPage = () => {
  const { name } = useParams();
  const [published, setPublished] = useState<PublishedLesson[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [onlyFree, setOnlyFree] = useState<boolean>(false);

  const handleLevelChange = (level: string) => {
    setSelectedLevels((prevLevels) =>
      prevLevels.includes(level)
        ? prevLevels.filter((l) => l !== level)
        : [...prevLevels, level],
    );
  };

  const handleFreeToggle = () => {
    setOnlyFree((prev) => !prev);
  };

  useEffect(() => {
    const fetchLessons = async () => {
      try {
        let allLessons: PublishedLesson[] = [];

        if (selectedLevels.length === 0 && !onlyFree) {
          const res = await getAllJapaneseLessonsByPublishedTrue();
          allLessons = res.data;
        } else if (selectedLevels.length === 0 && onlyFree) {
          const res = await getPublicLesson();
          allLessons = res.data;
        } else {
          const promises = selectedLevels.map((level) =>
            onlyFree
              ? getPublicJapaneseLessonByLevel(level)
              : getJapaneseLessonByLevel(level),
          );

          const responses = await Promise.all(promises);
          allLessons = responses.flatMap((r) => r.data);
        }

        setPublished(allLessons);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLessons();
  }, [selectedLevels, onlyFree]);

  useEffect(() => {
    if (name === "Japonês") {
      getAllJapaneseLessonsByPublishedTrue()
        .then((res) => setPublished(res.data))
        .catch((err) => console.error(err));
    }
  }, [name]);

  return (
    <>
      <TransparentHeader />
      <LessonsBackground />
      <LessonsArea>
        <SideBar>
          <input type="text" placeholder="Pesquisar pelo título" />

          <section>
            <h1>Níveis de dificuldade</h1>
            {["N5", "N4", "N3", "N2", "N1"].map((nivel) => (
              <Options key={nivel}>
                <input
                  type="checkbox"
                  id={`level-${nivel}`}
                  checked={selectedLevels.includes(nivel)}
                  onChange={() => handleLevelChange(nivel)}
                />
                <label htmlFor={`level-${nivel}`} className="custom-checkbox" />
                <p>{nivel}</p>
              </Options>
            ))}
          </section>

          <section>
            <h1>Acesso</h1>
            <Options>
              <input
                type="checkbox"
                id="checkbox-gratis"
                checked={onlyFree}
                onChange={handleFreeToggle}
              />
              <label htmlFor="checkbox-gratis" className="custom-checkbox" />
              <p>GRÁTIS</p>
            </Options>
          </section>
        </SideBar>

        <Lessons>
          <Text>
            <h1>Aprenda {name} com Facilidade</h1>
            <p>
              Nesta seção, você terá acesso a aulas de {name}, exercícios
              interativos, flashcards do Anki para download e um relatório de
              desempenho personalizado para acompanhar sua evolução nos estudos
              de forma prática e eficiente.
            </p>
          </Text>
          <Card>
            {published.map((lesson, index) => (
              <LessonCard
                key={index}
                id={lesson.id}
                createAt={lesson.createAt}
                level={lesson.japaneseLevels}
                thumbLink={lesson.thumbLink}
                title={lesson.title}
                visibility={lesson.visibility}
              />
            ))}
          </Card>
        </Lessons>
      </LessonsArea>
      <Footer />
    </>
  );
};

export default LessonsPage;
