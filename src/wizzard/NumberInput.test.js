import React from 'react';
import { shallow } from 'enzyme';
import NumberInput from './NumberInput';

describe('NumberInput component', () => {
  it('should render with initial values', () => {
    shallow(
      <NumberInput
        onNext={() => {}}
        min={1}
        max={5}
        prefix="%"
      />
    );
  });

  it('should throw message when no value entered', () => {
    const wrapper = shallow(
      <NumberInput
        onNext={()=>{}}
        min={1}
        max={5}
        prefix="%"
      />
    );

    const nextButton = wrapper.find('button.NumberInput__next');
    nextButton.simulate('click');
    const msgTxt = wrapper.find('.NumberInput__message').text();
    expect(msgTxt).toContain('Enter');
  });
});
