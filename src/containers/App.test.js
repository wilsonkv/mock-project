import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';

describe('Container: App', () => {
  const wrapper = shallow(<App user={{ name: 'Example' }} />);

  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('renders a Header and two Routes', () => {
    expect(wrapper.find('Connect(withRouter(Header))').exists()).toBe(true);
  });

  it('renders Routes', () => {
    expect(wrapper.find('Route').length).not.toEqual(0);
  });
});
