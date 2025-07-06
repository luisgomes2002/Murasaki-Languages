export interface SignInProps {
  email: string;
  password: string;
}

export interface SignUpProps {
  name: string;
  username: string;
  email: string;
  password: string;
  gender: string;
  birth: string;
}

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
  languagesLevels: string;
  createAt: string;
  updatedAt: string;
  published: boolean;
  visibility: string;
  ankiLink: string;
  thumbLink: string;
}

export interface UpdateUserInterface {
  name: string;
  gender: string;
  birth: string;
  username: string;
  email: string;
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

export interface WorksheetsProps {
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
  languagesLevels: string;
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

export interface UserInformations {
  id: string;
  name: string;
  gender: string;
  birth: string;
  username: string;
  email: string;
  icon: string;
  background: string;
  followersId: string[];
  followingId: string[];
  createdAt: string;
  updatedAt: string;
  about: string;
  userType: string;
  notificationsId: string[];
  postsId: string[];
  isEnabled: boolean;
  isBanned: boolean;
  subscription: string;
}

export interface MetricsDates {
  id: string;
  dateTimes: string[];
}

export interface Metrics {
  id: string;
  date: string;
  totalUsers: number;
  activeUsers: number;
  bannedUsers: number;
  deletedUsers: number;
  userAgeDistribution: {
    under18: number;
    "18-25": number;
    "25-29": number;
    "30-39": number;
    "40plus": number;
  };
  topLanguages: {
    EN: number;
    ES: number;
    JP: number;
  };
  topGender: {
    MALE: number;
    FEMALE: number;
    OTHER: number;
    NONE: number;
  };
}

export interface LanguagesCardProps {
  link: string;
  name: string;
  image: string;
  isActive: boolean;
}

export interface CreateLessonCollection {
  userId: string;
  collectionName: string;
}

export interface LessonCollection {
  id: string;
  languageName: string;
  lessonsId: string[];
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

export interface DeleteWorksheetPros {
  worksheetId: string;
  lessonId: string;
  userId: string;
}

export interface WorksheetsUpdateProps {
  worksheetId: string;
  userId: string;
}

export interface DeleteLessonProps {
  lessonId: string;
  userId: string;
  lessonName: string;
}

export interface LanguageCollectionsProps {
  id: string;
  languageName: string;
  status: boolean;
}

export interface UpdatePassword {
  password: string;
  email: string;
}
