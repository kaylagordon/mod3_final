export const updateProblemSet = problemSet => ({
  type: 'UPDATE_PROBLEM_SET',
  problemSet
});

export const updateTimer = (propertyToChange, updatedValue) => ({
  type: 'UPDATE_TIMER',
  propertyToChange,
  updatedValue
});

export const increaseCorrect = () => ({
  type: 'INCREASE_CORRECT'
});

export const increaseIncorrect = () => ({
  type: 'INCREASE_INCORRECT'
});

export const resetGameStats = () => ({
  type: 'RESET_GAME_STATS'
});
