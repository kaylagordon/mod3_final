import { combineReducers } from 'redux';
import { currentProblemSetReducer } from './currentProblemSetReducer';

export const rootReducer = combineReducers({
  currentProblemSet: currentProblemSetReducer
});
