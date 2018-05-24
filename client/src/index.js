import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {BrowserRouter} from 'react-router-dom';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './store/sagas/';

import './index.css';

import App from './App';
import postsReducer from './store/reducers/posts';
import generalReducer from './store/reducers/general';

import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = process.env.NODE_ENV === 'development' 
? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ 
: compose;

const rootReducer = combineReducers({
  posts: postsReducer,
  general: generalReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(sagaMiddleware)
  )
);

sagaMiddleware.run(rootSaga);

const app = (
  <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>
);


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();