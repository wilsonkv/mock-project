import React from 'react';
import { shallow } from 'enzyme';

import { HomePage } from './HomePage';

describe('Container: HomePage', () => {
  it('renders a null state', () => {
    const wrapper = shallow(
      <HomePage dispatch={() => {}} />
    );

    expect(wrapper.find('#home-page__null-state').exists()).toBe(true);
  });
});
