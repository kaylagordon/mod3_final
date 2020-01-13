export const problemSetReducer = (state = 'simplify', action) => {
  switch (action.type) {
    case 'UPDATE_PROBLEM_SET' :
      return action.problemSet;
    default:
      return state;
  }
}
