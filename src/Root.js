import React from 'react';
import reducers from './reducers';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import  {initialState}  from './containers/AppContainer/reducer';
import reduxPromise from 'redux-promise';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default ({children, initialState = {}}) => {
    return (
        <Provider store={
            createStore(reducers, initialState, composeEnhancers(
                applyMiddleware(reduxPromise)
            ))
        }>{children}</Provider>
    )
}