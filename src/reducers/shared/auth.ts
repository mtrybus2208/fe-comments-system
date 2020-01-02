import { AuthActions, AuthTypes } from '../../actions/shared/auth.types';
import { AuthState } from './auth.types';

const INITIAL_STATE: AuthState = {
  user: null,
  access: null,
  isPending: false,
};

export default (state = INITIAL_STATE, action: AuthActions): AuthState => {
  switch (action.type) {
    case AuthTypes.LOGIN_USER:
      return {
        ...state,
        isPending: true,
      };
    default:
      return state;
  }
};
