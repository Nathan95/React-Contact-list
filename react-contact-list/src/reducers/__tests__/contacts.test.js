import reducer_contacts from '../reducer_contacts';
import { CREATE_CONTACT } from 'actions/types';

it('handles actions of type CREATE_CONTACT', () => {
  //passing a fake action to test reducer
  const action = {
  type: CREATE_CONTACT,
  payload: 'New contact'
};

  const newState = reducer_contacts([], action);

  expect(newState).toEqual(['New contact']);
});

  it('handles action with unknown type', () => {
  const newState = reducer_contacts([], { type: 'LKAFDSJLKAFD' });

  expect(newState).toEqual([]);
});
