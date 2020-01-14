import { problemSetReducer } from './problemSetReducer';

describe('problemSetReducer', () => {
  it('should return the initial state', () => {
    const expected = 'simplify';

    const result = problemSetReducer(undefined, {});

    expect(result).toEqual(expected);
  });

  it('should return the correct state if the action is UPDATE_PROBLEM_SET', () => {
    const initialState = 'simplify';
    const expected = 'derive';

    const action = {
      type: 'UPDATE_PROBLEM_SET',
      problemSet: 'derive'
    }

    const result = problemSetReducer(initialState, action);

    expect(result).toEqual(expected);
  })

});
