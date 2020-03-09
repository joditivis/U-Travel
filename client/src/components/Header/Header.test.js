import React from 'react';
import { shallow, mount } from 'enzyme';
// import App from '../App';
import Header from './Header';

const configure = require('enzyme').configure;
const Adapter = require('enzyme-adapter-react-16');
configure({ adapter: new Adapter() });

describe('Memory Clicky Game Test Suite', () => {
  it('renders app with cards', () => {
    const wrapper = mount(<Header />);
    const w2 = 'U Travel';
    console.log(wrapper.html());
    console.log(wrapper.debug());
    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('h1').text()).toEqual(w2);
    expect(wrapper.find('.jumbotron').length).toEqual(1);
  });
});
