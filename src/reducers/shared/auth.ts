import { AuthActions, authTypes } from '../../actions/shared/types/auth';
import { AuthState } from './types/auth';

const INITIAL_STATE: AuthState = {
  user: null,
  access: null,
  isPending: false,
};

export default (state = INITIAL_STATE, action: AuthActions): AuthState => {
  switch (action.type) {
    case authTypes.loginActionType:
      return {
        ...state,
        isPending: true,
      };
    default:
      return state;
  }
};
