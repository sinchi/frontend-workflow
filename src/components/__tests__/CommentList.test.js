import React from 'react';
import { mount } from 'enzyme';


import Root from 'Root';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import CommentContainer from 'containers/CommentContainer';

let wrapped;

describe('CommentList test suite', () => {
    beforeEach(() => {
        const initialState ={
            comments: ['comment1', 'comment2', "comment3"]
        };
        wrapped = mount(<Root initialState={initialState}><CommentContainer /></Root>);                      
    });
    it('should contain one li per comment', () => {        
        expect(wrapped.find(CommentList).find('li').length).toEqual(3);    
    });

    it('text from each comment is visible', () => {
        expect(wrapped.find(CommentList).find('ul').render().text()).toContain('comment1');
        expect(wrapped.find(CommentList).find('ul').render().text()).toContain('comment2');
    });

    afterEach(() => {
        wrapped.unmount();
    });
});