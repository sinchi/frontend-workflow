import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/AppContainer/App';
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import  {initialState}  from './containers/AppContainer/reducer';
const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
    <Provider store={store}><App /></Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
