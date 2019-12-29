
import { ADD_COMMENT } from './constants';
export const initialState = [];

export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_COMMENT : {
            return [...state, action.comment];
        }
        default:
            return state;
    }
}