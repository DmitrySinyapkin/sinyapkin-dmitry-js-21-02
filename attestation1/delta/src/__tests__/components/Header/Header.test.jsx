import React from "react";
import { shallow } from 'enzyme';
import Header from '../../../components/Header/Header'

describe('Header', () => {
    test('snapshot', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should render header children', () => {
        const wrapper = shallow(<Header />);
        expect(wrapper.find('div.header').children()).toHaveLength(3);
    });
});
