import { combineReducers } from 'redux';
import { currentProblemSetReducer } from './currentProblemSetReducer';
import { timerReducer } from './timerReducer';

export const rootReducer = combineReducers({
  currentProblemSet: currentProblemSetReducer,
  timer: timerReducer
});
