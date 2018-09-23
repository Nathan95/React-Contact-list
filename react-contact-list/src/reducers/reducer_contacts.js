import {CREATE_CONTACT} from '../constants';

export default (state = [], action) => {
  switch(action.type) {
    case CREATE_CONTACT:
      const {contacts} = action;
      return contacts;
    default:
      return state;
  }
}
