export interface Explanation {
  id: string;
  phrase: string;
  translation: string;
  explanation: string;
}

export interface ExplanationProps {
  phrase: string;
  translation: string;
  explanation: string;
}

export interface DeleteExplanationProps {
  explanationId: string;
  lessonId: string;
  userId: string;
}
