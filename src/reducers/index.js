import { combineReducers } from 'redux';

import TuitsReducer from './reducer-tuits'
import SessionReducer from './reducer-session'

const rootReducer = combineReducers({
	tuits: TuitsReducer,
  session: SessionReducer
});

export default rootReducer