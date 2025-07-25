export interface CreateLessonCollection {
  userId: string;
  collectionName: string;
  status: boolean;
}

export interface LanguageCollectionsProps {
  id: string;
  languageName: string;
  status: boolean;
}
