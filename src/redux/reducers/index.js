import { combineReducers } from 'redux';
import home from './home';
import about from './about';

const reduxState = combineReducers({
  home,
  about
});

export default reduxState;
