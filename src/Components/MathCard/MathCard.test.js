import React from 'react';
import { MathCard, mapStateToProps, mapDispatchToProps } from './MathCard';
import { shallow, mount } from 'enzyme';
import { increaseCorrect, increaseIncorrect} from '../../actions';
import { getAnswer } from '../../apiCalls/apiCalls';

jest.mock('../../apiCalls/apiCalls');

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

  it('should update answer in state', () => {
    const mockEvent = {
      target: {
        value: 73
      }
    }

    wrapper.instance().updateAnswer(mockEvent);

    expect(wrapper.state('answer')).toEqual(73)

  })

  it('should invoke increaseCorrect when answer is correct', async () => {

    wrapper = mount(<MathCard
      currentProblemSet={mockCurrentProblemSet}
      increaseCorrect={mockIncreaseCorrect}
      increaseIncorrect={mockIncreaseIncorrect}
    />);

    wrapper.setState({
      answer: '2x-x'
    });

    const mockData = {
      result: '2 x - x'
    };

    getAnswer.mockImplementation(() => {
      return Promise.resolve(mockData);
    });

    await wrapper.instance().checkAnswer();

    expect(mockIncreaseCorrect).toHaveBeenCalled();
  })

  it('should invoke increaseIncorrect when answer is correct', async () => {

    wrapper = mount(<MathCard
      currentProblemSet={mockCurrentProblemSet}
      increaseCorrect={mockIncreaseCorrect}
      increaseIncorrect={mockIncreaseIncorrect}
    />);

    wrapper.setState({
      answer: '2-x'
    });

    const mockData = {
      result: '2 x - x'
    };

    getAnswer.mockImplementation(() => {
      return Promise.resolve(mockData);
    });

    await wrapper.instance().checkAnswer();

    expect(mockIncreaseIncorrect).toHaveBeenCalled();
  })

  it('should make a new card', () => {
    wrapper.setState({
      expression: '2+2',
      answer: '4',
      evaluatedTo: 'correct'
    })

    wrapper.instance().getNewCard();

    expect(wrapper.state('answer')).toEqual('')
  })

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
