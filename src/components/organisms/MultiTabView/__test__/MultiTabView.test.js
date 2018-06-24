import React from 'react';
import MultiTabView from '../MultiTabView';
import tabs from './tabsInput';

describe('MultiTabView', () => {
	let props;
	let mountedMultiTab;

	const multiTabView = () => {
		if (!mountedMultiTab) {
			mountedMultiTab = shallow(
				<MultiTabView {...props}/>
			);
		}
		return mountedMultiTab;
	};

	beforeEach(() => {
		props = {
			tabs: [],
			onHeaderSymbolClick: undefined,
			onFooterSymbolClick: undefined,
			searchQuery: '',
			onButtonClick: jest.fn(),
			collapsed: undefined,
			onInputSubmit: undefined
		};
		mountedMultiTab = undefined;
	});

	it('should render MultiTabView', () => {
		expect(toJSON(multiTabView())).toMatchSnapshot();
	});

	it('should render InputWithLabel', () => {
		props.searchQuery = '';
		expect(toJSON(multiTabView())).toMatchSnapshot();
	});

	it('should render NotFound', () => {
		props.searchQuery = 'searchQuery';
		expect(toJSON(multiTabView())).toMatchSnapshot();
	});

	it('should have rendered number of Buttons = tabs.length', () => {
		props.tabs = tabs;
		expect(toJSON(multiTabView())).toMatchSnapshot();
	});

	it('should pass onButtonClick to Button as onClick', () => {
		props.tabs = tabs;
		props.onButtonClick = jest.fn();
		expect(toJSON(multiTabView())).toMatchSnapshot();
	});

	it('should pass onFooterSymbolClick to RowComponent', () => {
		props.tabs = tabs;
		props.onFooterSymbolClick = jest.fn();
		expect(toJSON(multiTabView())).toMatchSnapshot();
	});

	it('should pass onHeaderSymbolClick to RowComponent', () => {
		props.tabs = tabs;
		props.onHeaderSymbolClick = jest.fn();
		expect(toJSON(multiTabView())).toMatchSnapshot();
	});

});
