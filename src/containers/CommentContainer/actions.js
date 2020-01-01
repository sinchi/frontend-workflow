import { ADD_COMMENT, FETCH_COMMENTS_SUCCESS, FETCH_COMMENTS_FAILED } from './constants';
import axios from 'axios';

export const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        comment
    }
}

export const fetchComments = async () => {
    let comments;
    try {
        comments= await axios.get('https://jsonplaceholder.typicode.com/comments');
        return {
            type: FETCH_COMMENTS_SUCCESS,
            comments
        }
    } catch(err) {
        return {
            type: FETCH_COMMENTS_FAILED,
            message: err.message
        }
    }
    
}