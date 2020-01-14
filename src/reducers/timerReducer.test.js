import { timerReducer } from './timerReducer';

describe('timerReducer', () => {
  it('should return the initial state', () => {
    const expected = { startTime: 60, isOver: false };

    const result = timerReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is UPDATE_TIMER', () => {
    const initialState = { startTime: 60, isOver: false };
    const expected = { startTime: 30, isOver: false };

    const action = {
      type: 'UPDATE_TIMER',
      propertyToChange: 'startTime',
      updatedValue: 30
    }

    const result = timerReducer(initialState, action);

    expect(result).toEqual(expected);
  })

  it('should return the correct state if the action is UPDATE_TIMER', () => {
    const initialState = { startTime: 60, isOver: false };
    const expected = { startTime: 60, isOver: true };

    const action = {
      type: 'UPDATE_TIMER',
      propertyToChange: 'isOver',
      updatedValue: true
    }

    const result = timerReducer(initialState, action);

    expect(result).toEqual(expected);
  })

});
