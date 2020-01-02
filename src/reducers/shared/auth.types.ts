export type UserTypes = 'admin' | 'base';

export interface User {
  userType: UserTypes;
  password: string;
  name: string;
  email: string;
  page?: string;
  accessToken?: string;
}

export interface AuthState {
  user: User;
  access: boolean;
  isPending: boolean;
}
