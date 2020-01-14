import React from 'react';
import ReactDOM from 'react-dom';
import { MathCard } from './MathCard';
import { shallow } from 'enzyme';

describe('MathCard', () => {
  let wrapper;
  let mockCurrentProblemSet = 'simplify';
  let mockIncreaseCorrect = jest.fn();
  let mockIncreaseIncorrect = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<MathCard
      currentProblemSet={mockCurrentProblemSet}
      increaseCorrect={mockIncreaseCorrect}
      increaseIncorrect={mockIncreaseIncorrect}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
