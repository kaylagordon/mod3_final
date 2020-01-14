import React from 'react';
import ReactDOM from 'react-dom';
import { EndPage, mapStateToProps } from './EndPage';
import { shallow } from 'enzyme';

describe('EndPage', () => {
  let wrapper;
  let mockGameStats = {
    numberCorrect: 2,
    numberIncorrect: 0
  };
  let mockTime = 30;

  beforeEach(() => {
    wrapper = shallow(<EndPage
      gameStats={mockGameStats}
      time={mockTime}
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
        gameStats: {
          numberCorrect: 3,
          numberIncorrect: 2
        },
        time: 30
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

});
