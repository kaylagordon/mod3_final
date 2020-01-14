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
