import React from 'react';
import CollapsedSideBar from "../CollapsedSideBar";

describe('component', () => {
	describe('CollapsedSideBar', () => {
		it('should render', () => {
			expect(toJSON(shallow(<CollapsedSideBar/>))).toMatchSnapshot();
		});

		it('should pass collapseSideBar as onClick prop to Icons', () => {
			const prop = {
				collapseSideBar: jest.fn()
			};
			expect(toJSON(shallow(<CollapsedSideBar {...prop}/>))).toMatchSnapshot();
		});

	});
});
