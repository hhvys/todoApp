import {shallow, configure} from 'enzyme';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import RowComponent from '../RowComponent';

configure({adapter: new Adapter()});

// describe('RowComponent', () => {
//
// 	it('should pass className prop to wrapper div', () => {
// 		props.className = "randomClass";
// 		const divs = inputWithLabel().find('div');
// 		const wrapperDiv = divs.first();
// 		expect(wrapperDiv.props().className).toMatch(props.className);
// 	});
//
//
//
// });
