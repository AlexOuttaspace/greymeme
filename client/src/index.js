import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {BrowserRouter} from 'react-router-dom';

import './index.css';

import App from './App';
import postsReducer from './store/reducers/posts';

import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
  posts: postsReducer
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

const app = (
  <BrowserRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </BrowserRouter>
)


ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();