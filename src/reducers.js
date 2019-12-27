import { combineReducers } from 'redux';
import appReducer from './containers/AppContainer/reducer';
export default combineReducers({
    globalReducer: appReducer
});