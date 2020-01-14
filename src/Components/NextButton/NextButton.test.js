import React from 'react';
import ReactDOM from 'react-dom';
import { NextButton } from './NextButton';
import { shallow } from 'enzyme';

describe('NextButton', () => {
  let wrapper;
  let mockNextLink = '/';
  let mockUpdateTimer = jest.fn();
  let mockGameStats = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<NextButton
      nextLink={mockNextLink}
      updateTimer={mockUpdateTimer}
      resetGameStats={mockGameStats}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
