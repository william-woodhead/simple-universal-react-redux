import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import reduxState from '../redux/reducers';

const loggerMiddleware = createLogger();

export default function createReduxStore({ preloadedState, server } = {}) {
  let enhancer;

  if (process.env.NODE_ENV !== 'production' && !server) {
    enhancer = applyMiddleware(thunkMiddleware, loggerMiddleware);
  } else {
    enhancer = applyMiddleware(thunkMiddleware);
  }

  return createStore(reduxState, preloadedState, enhancer);
}
