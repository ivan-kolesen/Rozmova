import { combineReducers } from 'redux';
import user from './user';
import messages from './messages';
import websocket from './websocket';

export default combineReducers({
  user,
  messages,
  websocket
})