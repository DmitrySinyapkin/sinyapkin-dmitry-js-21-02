import React from "react";
import { shallow } from 'enzyme';
import Footer from '../../../components/Footer/Footer';

describe('Header', () => {
    test('snapshot', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper).toMatchSnapshot();
    });

    test('should render footer children', () => {
        const wrapper = shallow(<Footer />);
        expect(wrapper.find('div.footer').children()).toHaveLength(2);
        expect(wrapper.find('div.footer').find('div.footer__changers').children()).toHaveLength(2);
    });
});
