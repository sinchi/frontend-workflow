import React from 'react';
import { mount } from 'enzyme';
import CommentContainer from 'containers/CommentContainer';
import  CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import Root from 'Root';
let wrapped;

beforeEach(() => {
   
    wrapped = mount(<Root><CommentContainer /></Root>);
});

describe('CommentContainer test suite', () => {
    it('App should contain CommentBox', () => {  
        expect(wrapped.find(CommentBox).length).toEqual(1);
      });
      
      it('App should contain CommentList', () => {
        expect(wrapped.find(CommentList).length).toEqual(1);
      });
});

afterEach(() => {
    wrapped.unmount();
});