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
            response: [
                {
                  "postId": 1,
                  "id": 1,
                  "name": "id labore ex et quam laborum",
                  "email": "Eliseo@gardner.biz",
                  "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
                },
                {
                  "postId": 1,
                  "id": 2,
                  "name": "quo vero reiciendis velit similique earum",
                  "email": "Jayne_Kuhic@sydney.com",
                  "body": "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
                },
                {
                  "postId": 1,
                  "id": 3,
                  "name": "odio adipisci rerum aut animi",
                  "email": "Nikita@garfield.biz",
                  "body": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
                }]
        });
        wrapper = mount(<Root><App /></Root>);
    });

    it('should fetch comments list and show the list', (done) => {        
        wrapper.find('.fetchComments').simulate('click');
        moxios.wait(() => {
            wrapper.update();
            expect(wrapper.find('li').length).toEqual(3);
            done();
            wrapper.unmount();
        });
    });

    afterEach(() => {
        moxios.uninstall();        
    });
});