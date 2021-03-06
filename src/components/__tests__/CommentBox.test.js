import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox'; 
import Root from 'Root';

import { addComment } from 'containers/CommentContainer/actions';

let wrapped;

beforeEach(
    () => {
        wrapped = mount(<Root><CommentBox addComment={addComment} /></Root>);
    }
)

describe('comment box elements', () => {
    it('should contain h4 title', () => {
        expect(wrapped.find('h4').length).toEqual(1);
    });
    
    it('should contain textarea', () => {
        expect(wrapped.find('textarea').length).toEqual(1);
    });
    
    it('should contain button', () => {
        expect(wrapped.find('button').length).toEqual(2);
    });
});

describe('the text area', () => {

    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: { value: 'hi ayoub' }
        });
        wrapped.update(); 
    }) 

    it('should enter input into textarea', () => {          
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('hi ayoub');
    });

    it('should submit input and empty the textarea', () => {              
        wrapped.find('form').simulate('submit');
        wrapped.update();
        const value = wrapped.find('textarea').prop('value');
        expect(value).toEqual('');
    });

})


afterEach(
    () => {
      wrapped.unmount();
    }
);