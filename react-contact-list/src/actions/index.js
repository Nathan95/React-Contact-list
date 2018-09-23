import {SIGNED_IN, CREATE_CONTACT, SET_COMPLETED} from '../constants'

export function logUser(email) {
  const action = {
    type: SIGNED_IN,
    email
  }
  return action;
}

export function createContact(contacts){
  const action = {
    type: CREATE_CONTACT,
    contacts
  }
  return action;
}

export function setCompleted(completeGoals) {
  const action ={
    type: SET_COMPLETED,
    completeGoals
  }
  return action;
}
