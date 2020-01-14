import React from 'react';
import ReactDOM from 'react-dom';
import { MathBoard } from './MathBoard';
import { shallow } from 'enzyme';

describe('MathBoard', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MathBoard />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});
