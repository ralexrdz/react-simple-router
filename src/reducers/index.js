import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import TuitsReducer from './reducer-tuits'
import SessionReducer from './reducer-session'
import DraftReducer from './reducer-draft'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
	tuits: TuitsReducer,
  session: SessionReducer,
  draft: DraftReducer
});

export default rootReducer
