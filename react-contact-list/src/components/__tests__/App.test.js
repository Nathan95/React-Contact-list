import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import { shallow } from 'enzyme';
import AddContact from 'components/AddContact';
import ContactList from 'components/ContactList';
import Root from 'Root';


let wrapped;

beforeEach(() => {
    wrapped = shallow( <Root><App /></Root>);
});

it('shows add contact', () => {

  expect(wrapped.find(AddContact).length).toEqual(1);

});

it('shows a contact list', () => {

  expect(wrapped.find(ContactList).length).toEqual(1);

});
