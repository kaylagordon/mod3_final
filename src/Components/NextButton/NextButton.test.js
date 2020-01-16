import React from 'react';
import { NextButton, mapDispatchToProps, resetInfo } from './NextButton';
import { shallow } from 'enzyme';
import { resetGameStats, updateTimer } from '../../actions';

describe('NextButton', () => {
  let wrapper;
  let mockNextLink = '/';
  let mockUpdateTimer = jest.fn();
  let mockResetGameStats = jest.fn();

  beforeEach(() => {
    wrapper = shallow(<NextButton
      nextLink={mockNextLink}
      updateTimer={mockUpdateTimer}
      resetGameStats={mockResetGameStats}
    />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should invoke methods if resetInfo is called', () => {
    wrapper.instance().resetInfo();

    expect(mockUpdateTimer).toHaveBeenCalledWith('isOver', false);
    expect(mockResetGameStats).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a updateTimer action when updateTimer is called', () => {

      const mockDispatch = jest.fn();
      const actionToDispatch = updateTimer();

      const mappedProps = mapDispatchToProps(mockDispatch);
      mappedProps.updateTimer();

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

   it('calls dispatch with a resetGameStats action when resetGameStats is called', () => {

     const mockDispatch = jest.fn();
     const actionToDispatch = resetGameStats();

     const mappedProps = mapDispatchToProps(mockDispatch);
     mappedProps.resetGameStats();

     expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
   });
 });

});
