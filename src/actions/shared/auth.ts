import axios from 'axios';
import Cookies from 'js-cookie';
import { AuthActions, AuthTypes } from './auth.types';

export const logoutAction = (): AuthActions => {
  return {
    type: AuthTypes.LOGOUT_USER,
  };
};

export const loginAction = (): AuthActions => {
  return {
    type: AuthTypes.LOGIN_USER,
  };
};
