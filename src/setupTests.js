import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16';
import renderer from "react-test-renderer";
import sinon from 'sinon';

Enzyme.configure({ adapter: new Adapter() });

// Make Enzyme functions available in all test files without importing
global.React = React;
global.shallow = shallow;
global.render = render;
global.mount = mount;
global.renderer = renderer;
global.sinon=sinon;


