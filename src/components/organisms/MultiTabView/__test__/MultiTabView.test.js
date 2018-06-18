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

	it('should render InputWithLabel if searchQuery is empty', () => {
		props.searchQuery = '';
		const InputWithLabel = multiTabView().find('InputWithLabel');
		expect(InputWithLabel.length).toBe(1);
	});

	it('should render NotFound if searchQuery is given and tabs length is 0', () => {
		props.searchQuery = 'searchQuery';
		const NotFound = multiTabView().find('NotFound');
		expect(NotFound.length).toBe(1);
	});

	it('should have rendered number of Buttons = tabs.length', () => {
		props.tabs = tabs;
		const Buttons = multiTabView().find('Button');
		expect(Buttons.length).toBe(tabs.length);
	});

});
