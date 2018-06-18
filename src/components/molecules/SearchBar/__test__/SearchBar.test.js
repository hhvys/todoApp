import React from 'react';
import SearchBar from '../SearchBar';

describe('SearchBar', () => {

	let props;
	let mountedSearchBar;

	const searchBar = () => {
		if (!mountedSearchBar) {
			mountedSearchBar = shallow(
				<SearchBar {...props}/>
			);
		}
		return mountedSearchBar;
	};

	beforeEach(() => {
		props = {
			className: "className",
			onInputChange: undefined,
			collapseSideBar: undefined,
			inputValue: undefined,
		};
		mountedSearchBar = undefined;
	});

	it('should render', () => {
		const wrapperDiv = searchBar().find('div').first();
		expect(toJSON(wrapperDiv)).toMatchSnapshot();
	});

	it('should pass collapseSideBar prop to startLogo', () => {
		props.collapseSideBar = jest.fn();
		const wrapperDiv = searchBar().find('div').first();
		const startLogo = wrapperDiv.childAt(0);
		expect(toJSON(startLogo)).toMatchSnapshot();
	});

	it('should pass onInputChange and inputValue to Input', () => {
		props.onInputChange = jest.fn();
		props.inputValue = jest.fn();
		const wrapperDiv = searchBar().find('div').first();
		const startLogo = wrapperDiv.childAt(1);
		expect(toJSON(startLogo)).toMatchSnapshot();
	});

});
