import React from 'react';
import ReactDOM from 'react-dom';
import { EndPage } from './EndPage';
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

});
