import { combineReducers } from 'redux';
import { sharedRootReducer } from './shared/index';

const rootReducer = combineReducers({
  ...sharedRootReducer,
});

export default rootReducer;
