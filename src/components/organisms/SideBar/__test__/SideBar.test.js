import React from 'react';
import SideBar from '../SideBarView';
jest.mock('node-uuid', () => ({v4: jest.fn(() => 1)}));

describe('SideBar', () => {
	let props;
	let mountedSideBar;

	const sideBar = () => {
		if (!mountedSideBar) {
			mountedSideBar = shallow(
				<SideBar {...props}/>
			);
		}
		return mountedSideBar;
	};

	beforeEach(() => {
		props = {
			className: "className",
			onSearchChange: jest.fn(),
			onCreateClickonCreateClick: jest.fn(),
			collapseSideBar: jest.fn(),
			collapsed: false,
			searchValue: ''
		};
		mountedSideBar = undefined;
	});

	it('should render CollapsedSideBar if collapsed is true', () => {
		props.collapsed = true;
		const collapsedSideBar = sideBar().find('CollapsedSideBar');
		expect(collapsedSideBar.length).toBe(1);
	});
	it('should render ListContainerView if collapsed is false', () => {
		props.collapsed = false;
		const listContainer = sideBar().find('Connect(ListContainerView)');
		expect(listContainer.length).toBe(1);
	});
	it('should render SearchBar if collapsed is false', () => {
		props.collapsed = false;
		const searchBar = sideBar().find('SearchBar');
		expect(searchBar.length).toBe(1);
	});
	it('should render RowComponent if collapsed is false', () => {
		props.collapsed = false;
		const rowComponent = sideBar().find('RowComponent');
		expect(rowComponent.length).toBe(1);
	});
	it('should pass searchValue to inputValue of SearchBar', () => {
		props.searchValue = 'searchValue';
		const searchBar = sideBar().find('SearchBar');
		expect(searchBar.props().inputValue).toBe(props.searchValue);
	});

});
