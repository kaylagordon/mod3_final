import React from 'react';
import { Header, mapStateToProps, mapDispatchToProps } from './Header';
import { shallow } from 'enzyme';
import { updateTimer } from '../../actions';

describe('Header', () => {
  let wrapper;
  let mockStartTime = 30;
  let mockUpdateTimer = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<Header
      startTime={mockStartTime}
      updateTimer={mockUpdateTimer}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('countdown', () => {
    it('should subract one second from state', () => {
      wrapper.setState({
        minutesLeft: 1,
        secondsLeft: 31
      });

      wrapper.instance().countdown();

      expect(wrapper.state('secondsLeft')).toEqual(30)
    })

    it('should subract one minute and reset seconds in state', () => {
      wrapper.setState({
        minutesLeft: 1,
        secondsLeft: 0
      });

      wrapper.instance().countdown();

      expect(wrapper.state()).toEqual({
        minutesLeft: 0,
        secondsLeft: 60
      })
    })

    it('should invoke updateTimer is countdown is over', () => {
      wrapper.setState({
        minutesLeft: 0,
        secondsLeft: 0
      });

      wrapper.instance().countdown();

      expect(mockUpdateTimer).toHaveBeenCalledWith('isOver', true)
    })
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
        startTime: 30
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a updateTimer action when updateTimer is called', () => {

      const mockDispatch = jest.fn();
      const actionToDispatch = updateTimer();

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.updateTimer();

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

});
