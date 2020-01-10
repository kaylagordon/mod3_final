export const currentProblemSetReducer = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_PROBLEM_SET' :
      return action.problemSet;
    default:
      return state;
  }
}
