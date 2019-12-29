import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import CommentContainer from 'containers/CommentContainer';

let wrapped;

beforeEach(()=> {
   wrapped = shallow(<App />);
});

it('should contain CommentContainer', () => {
  expect(wrapped.find(CommentContainer).length).toEqual(1);
});

afterEach(() => {
  wrapped.unmount();
});
