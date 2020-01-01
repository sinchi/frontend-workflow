import React from 'react';
import { mount } from 'enzyme';


import Root from 'Root';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import CommentContainer from 'containers/CommentContainer';

let wrapped;

describe('CommentList test suite', () => {
    beforeEach(() => {
        wrapped = mount(<Root><CommentContainer /></Root>);
        wrapped.find(CommentBox).find('textarea').simulate('change', { target: { value: 'hi' } });
        wrapped.update();
        expect(wrapped.find(CommentBox).find('textarea').prop('value')).toEqual('hi');
        wrapped.find(CommentBox).find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find(CommentBox).find('textarea').prop('value')).toEqual('');
    });
    it('should contain one li per comment', () => {        
        expect(wrapped.find(CommentList).find('ul li').length).toEqual(1);    
    });

    it('text from each comment is visible', () => {
        expect(wrapped.find(CommentList).find('ul li').length).toEqual(1); 
    })
    afterEach(() => {
        wrapped.unmount();
    });
});