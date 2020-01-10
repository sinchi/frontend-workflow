
import { ADD_COMMENT, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILED } from './constants';
export const initialState = [];

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_COMMENT : {
            return [...state, action.comment];
        }
        case FETCH_COMMENTS_SUCCESS: {            
            const comments = action.comments.data.map(comment => comment.name);            
            return [...state, ...comments];
        }
        case FETCH_COMMENTS_FAILED: {
            return Object.assign(state, {}, ...state, action.message);
        }
        default:
            return state;
    }
}