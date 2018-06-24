import React from 'react';
import DropDownIcon from '../DropDownIcon';

describe('component', () => {
	describe('DropDownIcon', () => {
		it('should render', () => {
			expect(toJSON(shallow(<DropDownIcon/>))).toMatchSnapshot();
		});

		it('should pass iconSymbol', () => {
			const props = {
				iconSymbol: 'iconLogo'
			};
			expect(toJSON(shallow(<DropDownIcon {...props}/>))).toMatchSnapshot();
		});

		it('should pass iconText', () => {
			const props = {
				iconText: 'iconText'
			};
			expect(toJSON(shallow(<DropDownIcon {...props}/>))).toMatchSnapshot();
		});
	});
});
