import { updateProblemSet, updateTimer, increaseCorrect, increaseIncorrect, resetGameStats } from './index';

describe('actions', () => {

  it('should have a type of UPDATE_PROBLEM_SET', () => {
    const expectedAction = {
      type: 'UPDATE_PROBLEM_SET',
      problemSet: 'derive'
    };

    const result = updateProblemSet('derive');

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of UPDATE_TIMER', () => {
    const expectedAction = {
      type: 'UPDATE_TIMER',
      propertyToChange: 'startTime',
      updatedValue: 30
    };

    const result = updateTimer('startTime', 30);

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of INCREASE_CORRECT', () => {
    const expectedAction = {
      type: 'INCREASE_CORRECT'
    };

    const result = increaseCorrect();

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of INCREASE_INCORRECT', () => {
    const expectedAction = {
      type: 'INCREASE_INCORRECT'
    };

    const result = increaseIncorrect();

    expect(result).toEqual(expectedAction);
  });

  it('should have a type of RESET_GAME_STATS', () => {
    const expectedAction = {
      type: 'RESET_GAME_STATS'
    };

    const result = resetGameStats();

    expect(result).toEqual(expectedAction);
  });

});
