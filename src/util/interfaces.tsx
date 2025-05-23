export interface CompleteLessonProps {
  userId: string;
  lessonId: string;
}

export interface Conversation {
  id: string;
  title: string;
  text: string;
  explanations: string[];
  worksheets: string[];
  links: string[];
  name: string;
  languageType: string;
  japaneseLevels: string;
  createAt: string;
  updatedAt: string;
  published: boolean;
  visibility: string;
  ankiLink: string;
  thumbLink: string;
}

export interface Explanation {
  id: string;
  phrase: string;
  translation: string;
  explanation: string;
}

export interface Worksheets {
  id: string;
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export interface Plan {
  id: string;
  title: string;
  description: string;
  value: number;
  advantages: string[];
  link: string;
}

export interface BacklogProps {
  id: string;
  user: string;
  description: string;
  createdAt: string;
}

export interface PublishedLesson {
  id: string;
  title: string;
  text: string;
  links: string[];
  name: string;
  languageType: string;
  japaneseLevels: string;
  createAt: string;
  published: boolean;
  visibility: string;
  ankiLink: string;
  thumbLink: string;
}

export interface LessonTextProps {
  text: string;
  explanation: string[];
}

export interface LessonWorksheetProps {
  worksheets: string[];
  anki: string;
}
