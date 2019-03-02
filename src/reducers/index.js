import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import TuitsReducer from './reducer-tuits'
import SessionReducer from './reducer-session'

const rootReducer = history => combineReducers({
  router: connectRouter(history),
	tuits: TuitsReducer,
  session: SessionReducer
});

export default rootReducer
