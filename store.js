import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { reducer, initialState } from './redux-base/reducer';

export default (state = initialState) => (
  createStore(reducer, state, composeWithDevTools(applyMiddleware(thunkMiddleware)))
);
