import React from 'react';
import { MathCard, mapStateToProps, mapDispatchToProps } from './MathCard';
import { shallow } from 'enzyme';
import { increaseCorrect, increaseIncorrect} from '../../actions';

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

  describe('mapStateToProps', () => {
    it('should return an object with game information', () => {

      const mockState = {
        currentProblemSet: 'simplify',
        timer: {
          startTime: 30,
          isOver: true
        },
        gameStats: {
          numberCorrect: 3,
          numberIncorrect: 2
        }
      };

      const expected = {
        currentProblemSet: 'simplify'
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a increaseCorrect action when increaseCorrect is called', () => {

      const mockDispatch = jest.fn();
      const actionToDispatch = increaseCorrect();

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.increaseCorrect();

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

   it('calls dispatch with a increaseIncorrect action when increaseIncorrect is called', () => {

     const mockDispatch = jest.fn();
     const actionToDispatch = increaseIncorrect();

     const mappedProps = mapDispatchToProps(mockDispatch);
     mappedProps.increaseIncorrect();

     expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
   });
 });

});
