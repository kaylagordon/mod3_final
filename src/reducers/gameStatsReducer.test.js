import { gameStatsReducer } from './gameStatsReducer';

describe('gameStatsReducer', () => {
  it('should return the initial state', () => {
    const expected = {numberCorrect: 0, numberIncorrect: 0};

    const result = gameStatsReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is INCREASE_CORRECT', () => {
    const initialState = {numberCorrect: 0, numberIncorrect: 0};
    const expected = {numberCorrect: 1, numberIncorrect: 0};

    const action = {
      type: 'INCREASE_CORRECT'
    }

    const result = gameStatsReducer(initialState, action);

    expect(result).toEqual(expected);
  })

  it('should return the correct state if the action is INCREASE_INCORRECT', () => {
    const initialState = {numberCorrect: 1, numberIncorrect: 0};
    const expected = {numberCorrect: 1, numberIncorrect: 1};

    const action = {
      type: 'INCREASE_INCORRECT'
    }

    const result = gameStatsReducer(initialState, action);

    expect(result).toEqual(expected);
  })

  it('should return the correct state if the action is RESET_GAME_STATS', () => {
    const initialState = {numberCorrect: 5, numberIncorrect: 3};
    const expected = {numberCorrect: 0, numberIncorrect: 0};

    const action = {
      type: 'RESET_GAME_STATS'
    }

    const result = gameStatsReducer(initialState, action);

    expect(result).toEqual(expected);
  })

});
