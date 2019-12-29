import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';


let wrapped;

beforeEach(
    () => {
        wrapped = mount(<CommentBox />);
    }
)

it('should contain h4 title', () => {
    expect(wrapped.find('h4').length).toEqual(1);
});

it('should contain textarea', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
});

it('should contain button', () => {
    expect(wrapped.find('button').length).toEqual(1);
});

it('should enter input into textarea', () => {
    wrapped.find('textarea').simulate('change', { target: { value: 'hi ayoub' } });    
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('hi ayoub');
});


afterEach(
    () => {
      wrapped.unmount();
    }
);