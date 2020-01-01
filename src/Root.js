import React from 'react';
import reducers from './reducers';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import  {initialState}  from './containers/AppContainer/reducer';
import reduxPromise from 'redux-promise';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, initialState, composeEnhancers(
    applyMiddleware(reduxPromise)
));


export default ({children}) => {
    return (
        <Provider store={store}>{children}</Provider>
    )
}