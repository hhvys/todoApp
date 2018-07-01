import React from 'react';
import BackgroundMessage from '../BackgroundMessage';

describe('component', () => {
	describe('NotFound', () => {
		it('should render', () => {
			expect(toJSON(shallow(<BackgroundMessage/>))).toMatchSnapshot();
		});
	});
});
