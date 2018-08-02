import { combineReducers } from 'redux';
import messageReducer from './message';

export default combineReducers({
  messages: messageReducer
});
