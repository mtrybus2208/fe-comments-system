import axios from 'axios';
import Cookies from 'js-cookie';
import { AuthActions, authTypes } from './types/auth';

const logoutAction = (): AuthActions => {
  return {
    type: authTypes.logoutActionType,
  };
};

const loginAction = (): AuthActions => {
  return {
    type: authTypes.loginActionType,
  };
};
