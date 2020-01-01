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
            comments: ['comment1', 'comment2']
        };
        wrapped = mount(<Root initialState={initialState}><CommentContainer /></Root>);                      
    });
    it('should contain one li per comment', () => {        
        expect(wrapped.find(CommentList).find('li').length).toEqual(2);    
    });

    it('text from each comment is visible', () => {
        console.log(wrapped.find(CommentList).find('ul').render().text())    
    });

    afterEach(() => {
        wrapped.unmount();
    });
});