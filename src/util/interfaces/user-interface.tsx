export interface UpdateUserInterface {
  name: string;
  gender: string;
  birth: string;
  username: string;
  email: string;
}

export interface UpdatePassword {
  password: string;
  email: string;
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
