import React from 'react';
import Button from '../Button';

describe('component', () => {
	describe('Button', () => {
		it('should render', () => {
			expect(toJSON(shallow(<Button/>))).toMatchSnapshot();
		});
		it('should render className', () => {
			const props = {
				className: 'className'
			};
			expect(toJSON(shallow(<Button {...props}/>))).toMatchSnapshot();
		});
		it('should render textContent', () => {
			const props = {
				text: 'text'
			};
			expect(toJSON(shallow(<Button {...props}/>))).toMatchSnapshot();
		});
	});
});
