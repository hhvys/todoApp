import React from 'react';
import DropDown from '../DropDown';

describe('DropDown', () => {
	it('should render', () => {
		expect(toJSON(shallow(<DropDown/>))).toMatchSnapshot();
	});
});
