import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducer';

export function configureStore(initialState = {}) {
  return createStore(rootReducer, initialState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));
}
