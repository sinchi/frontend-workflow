import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'containers/AppContainer/App';
import moxios from 'moxios';

let wrapper;

describe('comments integration test suite', () => {
    beforeEach(() => {
        moxios.install();
        moxios.stubRequest('https://jsonplaceholder.typicode.com/comments', {
            status: 200,
            response: [{name: 'comment1', name: 'comment2'}]
        });
        wrapper = mount(<Root><App /></Root>);
    });

    it('should fetch comments list and show the list', (done) => {
        console.log(wrapper.find('.fetchComments'))
        wrapper.find('.fetchComments').simulate('click');
        moxios.wait(() => {
            wrapper.update();
            expect(wrapper.find('li').length).toEqual(2);
            done();
            wrapper.unmount();
        });
    });

    afterEach(() => {
        moxios.uninstall();        
    });
});