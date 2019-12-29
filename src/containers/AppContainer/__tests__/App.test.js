import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentBox from '../../../components/CommentBox';

it('App should contain CommentBox and CommentList', () => {
  const wrapped = shallow(<App />);
  expect(wrapped.find(<CommentBox />).length)
})
