import { useEffect, useState } from "react";
import { InfoBox } from "../lesson-text/lesson-text-styled";
import {
  AnkiBox,
  QuestionFeedback,
  WorksheetBox,
} from "./lesson-worksheet-styled";
import { getWorksheetIdService } from "../../services/worksheet.service";
import { LessonWorksheetProps } from "../../util/interfaces/lesson-interface";
import { Worksheets } from "../../util/interfaces/worksheet-interface";

const LessonWorksheet = ({ worksheets, anki }: LessonWorksheetProps) => {
  const [detailedWorksheets, setDetailedWorksheets] = useState<Worksheets[]>(
    [],
  );

  const getWorksheet = async (ids: string[]) => {
    try {
      const responses = await Promise.all(
        ids.map((id) => getWorksheetIdService(id)),
      );
      const allWorksheet = responses.map((res) => res.data);
      setDetailedWorksheets(allWorksheet);
    } catch (error) {
      console.error("Erro ao buscar worksheet: ", error);
    }
  };

  useEffect(() => {
    if (worksheets.length > 0) getWorksheet(worksheets);
  }, [worksheets, anki]);

  return (
    <div>
      <AnkiBox>
        <div>
          <i className="fa-solid fa-folder"></i>
          <h1>Baixar Anki</h1>
        </div>
        <a href={anki} download>
          <button>
            <h1>Download</h1>
            <i className="fa-solid fa-file-arrow-down"></i>
          </button>
        </a>
      </AnkiBox>
      {detailedWorksheets.map((item, index) => (
        <WorksheetBox key={item.id}>
          <InfoBox>
            <h1>Atividade {index + 1}:</h1>
            <span>
              <i className="fa-solid fa-chevron-up"></i>
              {/* <i className="fa-solid fa-chevron-down"></i>  */}
            </span>
          </InfoBox>
          <div>
            <h2>{item.question}</h2>
            <section>
              {item.options.map((option, idx) => (
                <button key={idx}>
                  <span>
                    <p>{String.fromCharCode(65 + idx)}</p>
                  </span>
                  <h4>{option}</h4>
                </button>
              ))}
            </section>
            <QuestionFeedback>
              <p>{item.explanation}</p>
            </QuestionFeedback>
          </div>
        </WorksheetBox>
      ))}
    </div>
  );
};

export default LessonWorksheet;
