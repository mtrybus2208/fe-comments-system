import axios, { AxiosResponse, AxiosError } from 'axios';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { AuthActions, AuthTypes } from './auth.types';
import { AnyAction } from 'redux';
import Cookies from 'js-cookie';
import { LoginFormValues } from '../../pages/Login/Login.types';
import { User } from '../../reducers/shared/auth.types';
import { ErrorDetails } from '../../types/shared/http.types';

const { REACT_APP_API: API, REACT_APP_HOST: HOST } = process.env;

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

export const loginSuccessAction = (user: User): AuthActions => {
  return {
    type: AuthTypes.LOGIN_USER_SUCCESS,
    payload: {
      user,
    },
  };
};

export const loginFailureAction = (msg: string): AuthActions => {
  return {
    type: AuthTypes.LOGIN_USER_FAILURE,
    payload: {
      msg,
    },
  };
};

export const login = (
  credentials: LoginFormValues,
): ThunkAction<Promise<void>, {}, {}, AnyAction> => {
  return async (dispatch: ThunkDispatch<{}, {}, AnyAction>): Promise<void> => {
    dispatch(loginAction());
    try {
      const res: AxiosResponse<User> = await axios({
        method: 'post',
        url: `${API}/login`,
        data: credentials,
      });
      console.log({ res });
      dispatch(loginSuccessAction(res.data));
    } catch (err) {
      const { msg }: ErrorDetails = err.response.data;
      dispatch(loginFailureAction(msg));
    }
  };
};
