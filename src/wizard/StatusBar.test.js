import React from 'react';
import { shallow } from 'enzyme';
import StatusBar from './StatusBar';

describe('StatusBar component', () => {
  it('should render with initial values', () => {
    shallow(
      <StatusBar
        step={1} count={5}
      />
    );
  });

  it('should have 5 li elements', () => {
    const wrapper = shallow(
      <StatusBar
        step={1} count={5}
      />
    );

    expect(wrapper.find('li').length).toEqual(5);
  });

  it('should have 4 li elements', () => {
    const wrapper = shallow(
      <StatusBar
        step={1} count={4}
      />
    );

    expect(wrapper.find('li').length).toEqual(4);
  });

  it('should have active li element', () => {
    const wrapper = shallow(
      <StatusBar
        step={1} count={5}
      />
    );

    expect(wrapper.find('li.active').length).toEqual(1);
  });

  it('should have final li element', () => {
    const wrapper = shallow(
      <StatusBar
        step={1} count={5}
      />
    );

    expect(wrapper.find('li.final').length).toEqual(1);
  });
});
