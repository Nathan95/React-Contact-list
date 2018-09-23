import {combineReducers} from 'redux';
import user from './reducer_user';
import contacts from './reducer_contacts';

export default combineReducers({
  user,
  contacts,
})
