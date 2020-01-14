import React from 'react';
import ReactDOM from 'react-dom';
import { App, mapStateToProps } from './App';
import { shallow } from 'enzyme';

describe('App', () => {

  it('should match the snapshot', () => {
    let wrapper = shallow(<App timerIsOver={true}/>)

    expect(wrapper).toMatchSnapshot();
  });

  it('should match the snapshot', () => {
    let wrapper = shallow(<App timerIsOver={false}/>)

    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return an object with boolean', () => {

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
        timerIsOver: true
      };

      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

});
