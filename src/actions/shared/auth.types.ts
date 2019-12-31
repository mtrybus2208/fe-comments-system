export enum AuthTypes {
  LOGOUT_USER = 'LOGOUT_USER',
  LOGIN_USER = 'LOGIN_USER',
}

export interface LogoutAction {
  type: typeof AuthTypes.LOGOUT_USER;
}

export interface LoginAction {
  type: typeof AuthTypes.LOGIN_USER;
}

export type AuthActions = LogoutAction | LoginAction;
