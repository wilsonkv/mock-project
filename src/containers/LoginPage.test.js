import React from 'react';
import { shallow, mount } from 'enzyme';

import { LoginPage } from './LoginPage';

describe('Container: LoginPage', () => {
  const wrapper = shallow(<LoginPage dispatch={() => {}} />);

  it('renders a login form', () => {
    expect(wrapper.find('#email').exists()).toBe(true);
    expect(wrapper.find('#password').exists()).toBe(true);
  });
});
