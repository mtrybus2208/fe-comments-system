import { createStore, applyMiddleware } from 'redux';
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/index';

const enhancers = composeWithDevTools(
  // persistState("auth"),
  applyMiddleware(thunk),
);

const defaultState = {};

const store = createStore(rootReducer, defaultState, enhancers);

export default store;
