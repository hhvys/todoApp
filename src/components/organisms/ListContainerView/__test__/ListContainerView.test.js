import React from 'react';
import ListContainerView from '../ListContainerView';
import {initialState} from "../../../../reducers/tabs/tabInfo";
import starredState from './starredTabInput';
import starredState2 from './starredInput2';

describe('ListContainerView', () => {

	let props;
	let mountedListContainer;

	const listContainerView = () => {
		if (!mountedListContainer) {
			mountedListContainer = shallow(
				<ListContainerView {...props}/>
			);
		}
		return mountedListContainer;
	};

	beforeEach(() => {
		props = {
			className: "className",
			activeTab: undefined,
			tabs: initialState,
			onClick: undefined,
			onHeaderSymbolClick: undefined,
			onFooterSymbolClick: undefined,
			headerSymbol: undefined,
			footerSymbol: undefined,
		};
		mountedListContainer = undefined;
	});

	it('should render on initalState', () => {
		const wrapperDiv = listContainerView().find('div').first();
		expect(toJSON(wrapperDiv)).toMatchSnapshot();
	});

	it('should have number of RowComponent = tabs.length - 1 if no uncompleted starredTodos are available', () => {
		props.tabs = starredState2;
		const RowComponents = listContainerView().find('RowComponent');
		expect(RowComponents.length).toBe(props.tabs.length - 1);
	});

	it('should have number of RowComponent = tabs.length if uncompleted starredTodos are available', () => {
		props.tabs = starredState;
		const RowComponents = listContainerView().find('RowComponent');
		expect(RowComponents.length).toBe(props.tabs.length);
	});

});
