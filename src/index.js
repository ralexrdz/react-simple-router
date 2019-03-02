import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { ConnectedRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import reducers from './reducers'

import createSagaMiddleware from 'redux-saga'
import sagaRoot from './sagas'

const sagaMiddleware = createSagaMiddleware()

const history = createBrowserHistory()

const createStoreWithMiddleware = applyMiddleware(
  sagaMiddleware,
  routerMiddleware(history)
)(createStore);

const store = createStoreWithMiddleware(
  reducers(history),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

sagaMiddleware.run(sagaRoot)

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </ConnectedRouter>
  </Provider>

  , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
