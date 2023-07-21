import { combineReducers } from 'redux';
import dataSlice from './dataSlice';

const rootReducer = combineReducers({
  data: dataSlice,
});

export default rootReducer;
