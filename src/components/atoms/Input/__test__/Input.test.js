import React from 'react';
import Input from '../Input';

describe('component', () => {
	describe('Input', () => {
		it('should render', () => {
			expect(toJSON(shallow(<Input/>))).toMatchSnapshot();
		});
		it('should render className', () => {
			const props = {
				className: 'className'
			};
			expect(toJSON(shallow(<Input {...props}/>))).toMatchSnapshot();
		});
		it('should pass inputValue', () => {
			const props = {
				inputValue: 'text'
			};
			expect(toJSON(shallow(<Input {...props}/>))).toMatchSnapshot();
		});
	});
});
