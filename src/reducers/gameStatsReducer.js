export const gameStatsReducer = (state = {numberCorrect: 0, numberIncorrect: 0}, action) => {
  switch (action.type) {
    case 'INCREASE_CORRECT' :
      let newStats1 = {...state};
      newStats1.numberCorrect++;
      return newStats1;
    case 'INCREASE_INCORRECT' :
      let newStats2 = {...state};
      newStats2.numberIncorrect++;
      return newStats2;
    case 'RESET_GAME_STATS' :
      return {numberCorrect: 0, numberIncorrect: 0};
    default:
      return state;
  }
}
