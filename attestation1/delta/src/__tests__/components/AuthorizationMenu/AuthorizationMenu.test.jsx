import React from "react";
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import AuthorizationMenu from "../../../components/AuthorizationMenu/AuthorizationMenu";
import { MemoryRouter } from "react-router";
import { render } from 'enzyme';

const mockStore = configureStore([thunk]);

describe('authorization menu', () => {
    test('snapshot', () => {
        const store = mockStore({
            auth: {
                authUser: {
                    picture: 'url',
                    firstName: 'Vasya'
                },
                authorized: false,
            }
        })
        const wrapper = render(<MemoryRouter><AuthorizationMenu store={store} /></MemoryRouter>);
        expect(wrapper).toMatchSnapshot();
    });

    test('should render authorized user menu', () => {
        const store = mockStore({
            auth: {
                authUser: {
                    picture: 'url',
                    firstName: 'Vasya'
                },
                authorized: true,
            }
        })
        const wrapper = render(<MemoryRouter><AuthorizationMenu store={store} /></MemoryRouter>);
        expect(wrapper.find('div.name').text()).toBe('Vasya');
    });
});
