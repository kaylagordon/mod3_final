import React from 'react';
import ReactDOM from 'react-dom';
import { GameForm } from './GameForm';
import { shallow } from 'enzyme';

describe('GameForm', () => {
  let wrapper;
  let mockCurrentProblemSet = 'simplify';
  let mockStartTime = 30;
  let mockUpdateProblemSet = jest.fn();
  let mockUpdateTimer = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<GameForm
      currentProblemSet={mockCurrentProblemSet}
      currentTimer={mockStartTime}
      updateProblemSet={mockUpdateProblemSet}
      updateTimer={mockUpdateTimer}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
