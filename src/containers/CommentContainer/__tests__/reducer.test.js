import commentsReducer , { initialState } from '../reducer';
import { ADD_COMMENT } from '../constants';


it('handles actions of types ADD_COMMENT', () => {
    const action = {
        type: ADD_COMMENT,
        comment: 'New Comment'
    };

    const newState = commentsReducer(initialState, action);
    expect(newState).toEqual(['New Comment']);
});

it('handles actions with unkonwn type', () => {
    const newState = commentsReducer(initialState, { type: 'kfkldjfkdklfj' });
    expect(newState).toEqual([]);
});