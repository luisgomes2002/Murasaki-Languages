import { useEffect, useState } from "react";
import Footer from "../../components/footer/footer";
import LessonCard from "../../components/lesson-card/lesson-card";
import TransparentHeader from "../../components/transparent-header/transparent-header";
import { getAllPublishedLesson } from "../../services/lessons.service";
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

const LessonsPage = () => {
  const [published, setPublished] = useState<PublishedLesson[]>([]);

  const publishedLesson = async () => {
    try {
      const response = await getAllPublishedLesson();
      setPublished(response.data);
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    publishedLesson();
  }, []);

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
                <input type="checkbox" id={`checkbox-${nivel.toLowerCase()}`} />
                <label
                  htmlFor={`checkbox-${nivel.toLowerCase()}`}
                  className="custom-checkbox"
                />
                <p>{nivel}</p>
              </Options>
            ))}
          </section>

          <section>
            <h1>Acesso</h1>

            {["Público"].map((nivel) => (
              <Options key={nivel}>
                <input type="checkbox" id={`checkbox-${nivel.toLowerCase()}`} />
                <label
                  htmlFor={`checkbox-${nivel.toLowerCase()}`}
                  className="custom-checkbox"
                />
                <p>{nivel}</p>
              </Options>
            ))}
          </section>
        </SideBar>

        <Lessons>
          <Text>
            <h1>Aprenda Japonês com Facilidade</h1>
            <p>
              Nesta seção, você terá acesso a aulas de japonês, exercícios
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
                text={lesson.text}
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
