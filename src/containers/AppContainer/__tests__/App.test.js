import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

beforeEach(()=> {
   wrapped = shallow(<App />);
})

it('App should contain CommentBox', () => {  
  expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('App should contain CommentList', () => {
  expect(wrapped.find(CommentList).length).toEqual(1);
});
