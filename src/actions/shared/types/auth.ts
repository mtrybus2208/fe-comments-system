export const authTypes = {
  logoutActionType: 'LOGOUT_USER',
  loginActionType: 'LOGIN_USER',
};

export interface LogoutAction {
  type: typeof authTypes.logoutActionType;
}

export interface LoginAction {
  type: typeof authTypes.loginActionType;
}

export type AuthActions = LogoutAction | LoginAction;
