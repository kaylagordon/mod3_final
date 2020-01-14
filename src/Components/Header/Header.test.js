import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header';
import { shallow } from 'enzyme';

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

});
