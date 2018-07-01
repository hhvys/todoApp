import React from 'react';
import DropDown from '../DropDown';

describe('DropDown', () => {
	it('should render', () => {
		const props = {
			className: "className"
		};
		expect(toJSON(shallow(<DropDown {...props}/>))).toMatchSnapshot();
	});

	it('should pass onClick', () => {
		const props = {
			onClick: jest.fn()
		};
		expect(toJSON(shallow(<DropDown {...props}/>))).toMatchSnapshot();
	});

});
