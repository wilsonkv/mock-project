import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';

describe('Component: Header', () => {
  const wrapper = shallow(<Header />);

  it('renders a Toolbar', () => {
    expect(wrapper.find('.logo').exists()).toBe(true);
    expect(wrapper.find('.header__links').exists()).toBe(true);
  });
});
