import { combineReducers } from 'redux';
import appReducer from 'containers/AppContainer/reducer';
import commentReducer from 'containers/CommentContainer/reducer';
export default combineReducers({
    globalReducer: appReducer,
    comments: commentReducer
});