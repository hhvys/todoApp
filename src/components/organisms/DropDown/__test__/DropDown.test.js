import React from 'react';
import DropDown from '../DropDown';

describe('DropDown', () => {
	it('should render', () => {
		const props = {
			className: "className"
		};
		expect(toJSON(shallow(<DropDown {...props}/>))).toMatchSnapshot();
	});

	it('should pass onTabClick as onClick prop to RowComponents', () => {
		const props = {
			onTabClick: jest.fn()
		};
		expect(props.onTabClick.mock.calls.length).toBe(1);
	});

	it('should pass onClick', () => {
		const props = {
			onClick: jest.fn()
		};
		expect(toJSON(shallow(<DropDown {...props}/>))).toMatchSnapshot();
	});

});
