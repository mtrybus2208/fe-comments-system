import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from './reducers/index';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth'],
};
const pReducer = persistReducer(persistConfig, rootReducer);
const enhancers = composeWithDevTools(applyMiddleware(thunk));
const defaultState = {};

const store = createStore(pReducer, defaultState, enhancers);
export const persistor = persistStore(store);

export default store;
