export interface CompleteLessonProps {
  userId: string;
  lessonId: string;
}

export interface CreateLesson {
  title: string;
  text: string;
  links: string[];
  languageType: string;
  languagesLevels: string;
  ankiLink: string;
  thumbLink: string;
}

export interface LessonUpdate {
  id: string;
  title: string;
  text: string | object;
  links: string[];
  name: string;
  languageType: string;
  languagesLevels: string;
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

export interface DeleteLessonProps {
  lessonId: string;
  userId: string;
  lessonName: string;
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
  languagesLevels: string;
  createAt: string;
  updatedAt: string;
  published: boolean;
  visibility: string;
  ankiLink: string;
  thumbLink: string;
}

export interface PublishedLesson {
  id: string;
  title: string;
  text: string;
  links: string[];
  name: string;
  languageType: string;
  languagesLevels: string;
  createAt: string;
  published: boolean;
  visibility: string;
  ankiLink: string;
  thumbLink: string;
}
