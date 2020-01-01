import Rect from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'containers/AppContainer/App';

let wrapper;

describe('comments integration test suite', () => {
    beforeEach(() => {
        wrapper = mount(<Root><App /></Root>);
    });

    it('should fetch comments list and show the list', () => {
        wrapper.find('.fetchComments').simulate('click');
        expect(wrapper.find('li').length).toEqual(500);
    });

    afterEach(() => {
        wrapper.unmount();
    });
});