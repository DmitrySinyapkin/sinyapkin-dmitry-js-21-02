import React from "react";
import { shallow } from 'enzyme';
import PostPreview from '../../../components/PostPreview/PostPreview';

describe('PostPreview component', () => {
    test('should render component', () => {
        const wrapper = shallow(<PostPreview />);
        expect(wrapper.find('div.post__container')).toHaveLength(1);
    });

    test('snapshot test', () => {
        const wrapper = shallow(<PostPreview />);
        expect(wrapper).toMatchSnapshot();
      });

    test('should render data', () => {
        const title = 'mr';
        const firstName = 'James';
        const lastName = 'Bond';
        const date = '12.06.2020';
        const text = 'Blah-blah-blah';
        const picture = 'pictureUrl';
        const wrapper = shallow(<PostPreview
           title={title}
           firstName={firstName} 
           lastName={lastName}
           date={date}
           text={text}
           picture={picture}
        />);
        expect(wrapper.find('div.post__name').first().text()).toBe(`${title} ${firstName} ${lastName}`);
        expect(wrapper.find('div.post__date').text()).toBe(date);
        expect(wrapper.find('div.post__text-preview').text()).toBe(text);
        expect(wrapper.find('figure.post__picture').find('img').prop('src')).toBe(picture);
    });
});
