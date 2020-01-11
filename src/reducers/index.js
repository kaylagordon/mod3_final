import { combineReducers } from 'redux';
import { currentProblemSetReducer } from './currentProblemSetReducer';
import { currentTimeReducer } from './currentTimeReducer';

export const rootReducer = combineReducers({
  currentProblemSet: currentProblemSetReducer,
  currentTime: currentTimeReducer
});
