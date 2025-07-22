export interface CreateLessonCollection {
  userId: string;
  collectionName: string;
}

export interface LessonCollection {
  id: string;
  languageName: string;
  lessonsId: string[];
}

export interface LanguageCollectionsProps {
  id: string;
  languageName: string;
  status: boolean;
}
