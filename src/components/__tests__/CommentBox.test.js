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

afterEach(
    () => {
      wrapped.unmount();
    }
);