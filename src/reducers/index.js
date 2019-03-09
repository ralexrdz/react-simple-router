import { combineReducers } from 'redux';

import TuitsReducer from './reducer-tuits'
import SessionReducer from './reducer-session'
import DraftReducer from './reducer-draft'

const rootReducer = combineReducers({
	tuits: TuitsReducer,
  session: SessionReducer,
  draft: DraftReducer
});

export default rootReducer