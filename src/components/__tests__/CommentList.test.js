import React from 'react';
import { mount } from 'enzyme';


import Root from 'Root';
import App from 'containers/AppContainer/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

describe('CommentList test suite', () => {
    beforeEach(() => {
        wrapped = mount(<Root><App /></Root>);
    });
    it('should contain one li per comment', () => {
        const commentBox = wrapped.find(CommentBox);
        commentBox.simulate('change', { target: { value: 'hi' } });
        wrapped.update();
        expect(commentBox.prop('value')).toEqual('');

        const list = wrapped.find(CommentList);
        expect(list.find('li').length).toEqual(1);
    });
    afterEach(() => {
        wrapped.unmount();
    });
});