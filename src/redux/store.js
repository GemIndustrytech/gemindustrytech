import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const middleware = applyMiddleware(thunk);
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enHanceCreateStore = composeEnhancers(
  middleware,
)(createStore)
const theStore = enHanceCreateStore(rootReducer);;

export const store = theStore;