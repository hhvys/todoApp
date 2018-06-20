import React from 'react';
import configureMockStore from 'redux-mock-store';
import {INITIAL_STATE, STATE_WITH_TABS} from "../../reducers/__test__/__fixtures__/reducers.fixtures";
import * as _ from 'lodash';
import App from "../App";
import {
	ADD_STARRED_TODO, ADD_TODO,
	CHANGE_ACTIVE_TAB, CHANGE_SORT,
	INBOX_ID,
	SEARCH_QUERY,
	STAR_TOGGLE_TODO,
	STARRED_ID,
	TOGGLE_MODAL, TOGGLE_SIDEBAR, TOGGLE_TODO, TOGGLE_VISIBILITY_FILTER
} from "../../actions/actionTypes";
import Header from "../Header";
import SideBar from "../SideBar";
import thunk from 'redux-thunk';
import ListContainer from '../ListContainer';
import MultiTab, {getFilteredTabs} from '../MultiTab';
import {SEARCHED_FILTERED_TABS, STARRED_FILTERED_TABS} from "./__fixtures__/containers.fixtures";
import {SORT_CREATION} from "../../components/atoms/Icons/constants";
import {v4} from 'node-uuid';
import {searchQuery} from "../../actions/actionCreaters";
import TodoContainer from "../TodoContainer";

jest.mock('node-uuid', () => ({v4: jest.fn(() => 1)}));

const mockStore = configureMockStore([thunk]);
const shallowWithStore = (component, store) => {
	const context = {
		store,
	};
	return shallow(component, { context });
};
describe('containers', () => {
	describe('App', () => {

		it('should render MultiTabView', () => {
			const initialState = _.cloneDeep(INITIAL_STATE);
			initialState.searchQuery = 'searchQuery';
			const store = mockStore(initialState);
			const component = shallowWithStore(<App />, store);
			expect(component.dive().find("Connect(MultiTabView)").length).toBe(1);
			expect(toJSON(component.dive())).toMatchSnapshot();
		});

		it('should not render TodoContainer', () => {
			const initialState = _.cloneDeep(INITIAL_STATE);
			initialState.searchQuery = 'searchQuery';
			const store = mockStore(initialState);
			const component = shallowWithStore(<App />, store);
			expect(component.dive().find("Connect(TodoContainer)").length).toBe(0);
		});

		it('should render MultiTabView', () => {
			const initialState = _.cloneDeep(INITIAL_STATE);
			initialState.activeTab = STARRED_ID;
			const store = mockStore(initialState);
			const component = shallowWithStore(<App />, store);
			expect(component.dive().find("Connect(MultiTabView)").length).toBe(1);
		});

		it('should not render TodoContainer', () => {
			const initialState = _.cloneDeep(INITIAL_STATE);
			initialState.activeTab = STARRED_ID;
			const store = mockStore(initialState);
			const component = shallowWithStore(<App />, store);
			expect(component.dive().find("Connect(TodoContainer)").length).toBe(0);
		});

		it('should not render MultiTabView', () => {
			const initialState = _.cloneDeep(INITIAL_STATE);
			const store = mockStore(initialState);
			const component = shallowWithStore(<App />, store);
			expect(component.dive().find("Connect(MultiTabView)").length).toBe(0);
		});

		it('should render TodoContainer', () => {
			const initialState = _.cloneDeep(INITIAL_STATE);
			const store = mockStore(initialState);
			const component = shallowWithStore(<App />, store);
			expect(component.dive().find("Connect(TodoContainer)").length).toBe(1);
			expect(toJSON(component.dive())).toMatchSnapshot();
		});

	});

	describe('Header', () => {
		it('should render searchQuery as header', () => {
			const initialState = _.cloneDeep(INITIAL_STATE);
			initialState.searchQuery = 'searchQuery';
			const store = mockStore(initialState);
			const component = shallowWithStore(<Header />, store);
			const headerContent = component.dive().find(".headerContent");
			expect(headerContent.text()).toBe(initialState.searchQuery);
			expect(toJSON(component.dive())).toMatchSnapshot();
		});

		it('should render tabName as header', () => {
			const initialState = _.cloneDeep(INITIAL_STATE);
			const store = mockStore(initialState);
			const component = shallowWithStore(<Header />, store);
			const headerContent = component.dive().find(".headerContent");
			expect(headerContent.text()).toBe('Inbox');
		});

		it('should have collapsed class', () => {
			const initialState = _.cloneDeep(INITIAL_STATE);
			initialState.collapsedSideBar = true;
			const store = mockStore(initialState);
			const component = shallowWithStore(<Header />, store);
			const header = component.dive().find(".collapsed");
			expect(header.length).toBe(1);
			expect(toJSON(component.dive())).toMatchSnapshot();
		});

		it('should dispatch changeSorting', () => {
			const initialState = _.cloneDeep(INITIAL_STATE);
			const store = mockStore(initialState);
			const component = shallowWithStore(<Header />, store);
			component.instance().selector.props.onDropDownTabClick();
			const expectedActions = [
				{ type: 'CHANGE_SORT', sortBy: 'SORT_CREATION' }
			];
			expect(store.getActions()).toEqual(expectedActions);
		});
	});

	describe('ListContainer', () => {

		it('should render initialState', () => {
			const store = mockStore(INITIAL_STATE);
			const component = shallowWithStore(<ListContainer />, store).dive();
			expect(toJSON(component)).toMatchSnapshot();
		});

		it('should dispatch toggleModal', () => {
			const store = mockStore(STATE_WITH_TABS);
			const component = shallowWithStore(<ListContainer />, store);
			component.instance().selector.props.onFooterSymbolClick();
			const expectedActions = [
				{type: TOGGLE_MODAL}
			];
			expect(store.getActions()).toEqual(expectedActions);
		});

		it('should dispatch changeActiveTab, searchQuery', () => {
			const store = mockStore(STATE_WITH_TABS);
			const component = shallowWithStore(<ListContainer />, store);
			component.instance().selector.props.onClick(INBOX_ID);
			const expectedActions = [
				{
					type: CHANGE_ACTIVE_TAB,
					tabId: INBOX_ID,
				},
				{
					type: SEARCH_QUERY,
					query: ''
				}
			];
			expect(store.getActions()).toEqual(expectedActions);
		});

	});

	describe('MultiTab', () => {

		it('should render initialState', () => {
			const store = mockStore(STATE_WITH_TABS);
			store.activeTab = STARRED_ID;
			const component = shallowWithStore(<MultiTab />, store).dive();
			expect(toJSON(component)).toMatchSnapshot();
		});

		it('should dispatch toggleStarTodo', () => {
			const store = mockStore(STATE_WITH_TABS);
			const tabId = '9ad18f5c-d3b8-46ff-a54e-69bba97f1aa1';
			const todoId = 'a88ff79a-b113-407e-9298-bfb4811b44c5';
			const component = shallowWithStore(<MultiTab />, store);
			component.instance().selector.props.onFooterSymbolClick(tabId, todoId);
			const expectedActions = [
				{
					tabId,
					todoId,
					type: STAR_TOGGLE_TODO
				}
			];
			expect(store.getActions()).toEqual(expectedActions);
		});

		it('should dispatch toggleTodo', () => {
			const store = mockStore(STATE_WITH_TABS);
			const tabId = '9ad18f5c-d3b8-46ff-a54e-69bba97f1aa1';
			const todoId = 'a88ff79a-b113-407e-9298-bfb4811b44c5';
			const component = shallowWithStore(<MultiTab />, store);
			component.instance().selector.props.onHeaderSymbolClick(tabId, todoId);
			const expectedActions = [
				{
					tabId,
					todoId,
					type: TOGGLE_TODO
				}
			];
			expect(store.getActions()).toEqual(expectedActions);
		});

		it('should dispatch changeActiveTab, searchQuery', () => {
			const store = mockStore(STATE_WITH_TABS);
			const tabId = '9ad18f5c-d3b8-46ff-a54e-69bba97f1aa1';
			const component = shallowWithStore(<MultiTab />, store);
			component.instance().selector.props.onButtonClick(tabId);
			const expectedActions = [
				{
					tabId,
					type: CHANGE_ACTIVE_TAB
				},
				{
					query: '',
					type: SEARCH_QUERY
				}
			];
			expect(store.getActions()).toEqual(expectedActions);
		});

		it('should dispatch addStarredTodo, changeSorting', () => {
			const store = mockStore(STATE_WITH_TABS);
			const text = 'text';
			const component = shallowWithStore(<MultiTab />, store);
			component.instance().selector.props.onInputSubmit(text);
			const expectedActions = [
				{
					type: ADD_STARRED_TODO,
					tabId: INBOX_ID,
					text,
					todoId: v4()
				},
				{
					type: CHANGE_SORT,
					sortBy: SORT_CREATION
				}
			];
			expect(store.getActions()).toEqual(expectedActions);
		});

		describe('getFilteredTabs', () => {
			it('should return filtered tabs based on searchQuery', () => {
				const initialState = _.cloneDeep(STATE_WITH_TABS);
				initialState.searchQuery = 'a';
				const store = mockStore(initialState);
				expect(getFilteredTabs(store.getState())).toEqual(SEARCHED_FILTERED_TABS);
			});

			it('should return filtered starred tabs', () => {
				const initialState = _.cloneDeep(STATE_WITH_TABS);
				initialState.activeTab = STARRED_ID;
				const store = mockStore(initialState);
				expect(getFilteredTabs(store.getState())).toEqual(STARRED_FILTERED_TABS);
			});

		})

	});

	describe('SideBar', () => {
		it('should render', () => {
			const store = mockStore(INITIAL_STATE);
			const component = shallowWithStore(<SideBar />, store).dive();
			expect(toJSON(component)).toMatchSnapshot();
		});

		it('should render collapsedSideBar', () => {
			const initialState = _.cloneDeep(INITIAL_STATE);
			initialState.collapsedSideBar = true;
			const store = mockStore(initialState);
			const component = shallowWithStore(<SideBar/>, store).dive();
			expect(toJSON(component)).toMatchSnapshot();
			expect(component.find('CollapsedSideBar').length).toBe(1);
		});

		it('should not render collapsedSideBar', () => {
			const store = mockStore(INITIAL_STATE);
			const component = shallowWithStore(<SideBar />, store).dive();
			expect(component.find('CollapsedSideBar').length).toBe(0);
		});

		it('should dispatch searchQuery', () => {
			const searchQuery = 'searchQuery';
			const store = mockStore(STATE_WITH_TABS);
			const component = shallowWithStore(<SideBar />, store);
			component.instance().selector.props.onSearchChange(searchQuery);
			const expectedActions = [
				{
					type: SEARCH_QUERY,
					query: searchQuery
				}
			];
			expect(store.getActions()).toEqual(expectedActions);
		});

		it('should dispatch toggleModal', () => {
			const store = mockStore(STATE_WITH_TABS);
			const component = shallowWithStore(<SideBar />, store);
			component.instance().selector.props.onCreateClick();
			const expectedActions = [
				{
					type: TOGGLE_MODAL,
				}
			];
			expect(store.getActions()).toEqual(expectedActions);
		});

		it('should dispatch toggleSideBar', () => {
			const store = mockStore(STATE_WITH_TABS);
			const component = shallowWithStore(<SideBar />, store);
			component.instance().selector.props.collapseSideBar();
			const expectedActions = [
				{
					type: TOGGLE_SIDEBAR,
				}
			];
			expect(store.getActions()).toEqual(expectedActions);
		});

	});

	describe('TodoContainer', () => {

		it('should render', () => {
			const store = mockStore(INITIAL_STATE);
			const component = shallowWithStore(<TodoContainer />, store).dive();
			expect(toJSON(component)).toMatchSnapshot();
		});

		it('should dispatch toggleTodo', () => {
			const tabId = INBOX_ID;
			const todoId = 'a383d653-0fc9-4873-bf88-e4ee57885632';
			const store = mockStore(STATE_WITH_TABS);
			const component = shallowWithStore(<TodoContainer />, store);
			component.instance().selector.props.onHeaderSymbolClick(tabId, todoId);
			const expectedActions = [
				{
					type: TOGGLE_TODO,
					tabId,
					todoId
				}
			];
			expect(store.getActions()).toEqual(expectedActions);
		});

		it('should dispatch toggleVisibilityFilter', () => {
			const tabId = INBOX_ID;
			const store = mockStore(STATE_WITH_TABS);
			const component = shallowWithStore(<TodoContainer />, store);
			component.instance().selector.props.onButtonClick(tabId);
			const expectedActions = [
				{
					type: TOGGLE_VISIBILITY_FILTER,
					tabId,
				}
			];
			expect(store.getActions()).toEqual(expectedActions);
		});

		it('should dispatch toggleStarTodo, changeSorting', () => {
			const tabId = INBOX_ID;
			const todoId = 'a383d653-0fc9-4873-bf88-e4ee57885632';
			const store = mockStore(STATE_WITH_TABS);
			const component = shallowWithStore(<TodoContainer />, store);
			component.instance().selector.props.onFooterSymbolClick(tabId, todoId);
			const expectedActions = [
				{
					type: STAR_TOGGLE_TODO,
					tabId,
					todoId
				},
				{
					type: CHANGE_SORT,
					sortBy: SORT_CREATION
				}
			];
			expect(store.getActions()).toEqual(expectedActions);
		});

		it('should dispatch addTodo, changeSorting', () => {
			const tabId = INBOX_ID;
			const text = 'text';
			const store = mockStore(STATE_WITH_TABS);
			const component = shallowWithStore(<TodoContainer />, store);
			component.instance().selector.props.onInputSubmit(tabId, text);
			const expectedActions = [
				{
					type: ADD_TODO,
					tabId,
					text,
					todoId: v4()
				},
				{
					type: CHANGE_SORT,
					sortBy: SORT_CREATION
				}
			];
			expect(store.getActions()).toEqual(expectedActions);
		});

	});

});
