import React from 'react';
import { mount } from 'enzyme';
import AddContact from '../AddContact';
import Root from 'Root';

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <AddContact />
    </Root>
  );
});

afterEach(() => {
  wrapped.unmount();
});

it('has inputs and submit', () => {

  expect(wrapped.find('input').length).toEqual(3);
  expect(wrapped.find('button').length).toEqual(1);
  expect(wrapped.find('textarea').length).toEqual(1);

})

it('the input', () => {

  wrapped.find('textarea').simulate('change', {
    target: {value: 'London'}
  });

  wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('London');
});
