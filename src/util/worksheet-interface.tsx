export interface Worksheets {
  id: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface WorksheetsProps {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface WorksheetsUpdateProps {
  worksheetId: string;
  userId: string;
}

export interface DeleteWorksheetPros {
  worksheetId: string;
  lessonId: string;
  userId: string;
}
