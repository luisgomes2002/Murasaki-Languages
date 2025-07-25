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
