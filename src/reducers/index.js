import { combineReducers } from 'redux';
import { problemSetReducer } from './problemSetReducer';
import { timerReducer } from './timerReducer';
import { gameStatsReducer } from './gameStatsReducer';

export const rootReducer = combineReducers({
  currentProblemSet: problemSetReducer,
  timer: timerReducer,
  gameStats: gameStatsReducer
});
