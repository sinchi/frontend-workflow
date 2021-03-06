import { ADD_COMMENT } from '../constants';
import { addComment } from '../actions';

describe('addComment test suite', () => {
    it('has the correct type', () => {
        const action = addComment();
        expect(action.type).toEqual(ADD_COMMENT);
    });

    it('has the correct payload', () => {
        const action = addComment('hi ayoub');
        expect(action.comment).toEqual('hi ayoub');
    });
});