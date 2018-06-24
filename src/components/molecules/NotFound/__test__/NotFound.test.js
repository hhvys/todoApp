import React from 'react';
import NotFound from '../NotFound';

describe('component', () => {
	describe('NotFound', () => {
		it('should render', () => {
			expect(toJSON(shallow(<NotFound/>))).toMatchSnapshot();
		});
	});
});
