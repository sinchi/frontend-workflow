import React from 'react';
import reducers from './reducers';
import { Provider } from 'react-redux';
import {createStore} from 'redux';
import  {initialState}  from './containers/AppContainer/reducer';
const store = createStore(reducers, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


export default ({children}) => {
    return (
        <Provider store={store}>{children}</Provider>
    )
}