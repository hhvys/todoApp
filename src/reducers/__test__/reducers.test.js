import {
	CHANGE_ACTIVE_TAB,
	CHANGE_SORT, INBOX_ID,
	SEARCH_QUERY,
	SORT_BY, STARRED_ID,
	TOGGLE_MODAL,
	TOGGLE_SIDEBAR
} from "../../actions/actionTypes";
import todoApp from '../index';

const initialState = {
	activeTab: INBOX_ID,
	collapsedSideBar: false,
	modalActive: {
		isOpened: false
	},
	tabs: {
		todoInfo: {},
		tabInfo: [
		{
			tabId: INBOX_ID,
			tabName: 'Inbox',
			todos: [],
			starredTodos: []
		},
		{
			tabId: STARRED_ID,
			tabName: 'Starred',
			todos: [],
			starredTodos: []
		}
	]},
	sortBy: SORT_BY.SORT_CREATION,
	searchQuery: ''
};

describe('in reducers', () => {
	it('should have initial state', () => {
		expect(todoApp(undefined, {})).toEqual(initialState);
	});

	it('should not affect state', () => {
		const action = {
			type: 'ANY_RANDOM_NOT_EXISTING$#%'
		};
		expect(todoApp(initialState, action)).toEqual(initialState);
	});

	it('should handle CHANGE_SORT', () => {
		const action = {
			type: CHANGE_SORT,
			sortBy: SORT_BY.SORT_ALPHA
		};
		const nextState = {
			...initialState,
			sortBy: SORT_BY.SORT_ALPHA
		};
		expect(todoApp(initialState, action)).toEqual(nextState);
	});

	it('should handle SEARCH_QUERY', () => {
		const action = {
			type: SEARCH_QUERY,
			query: 'anything'
		};
		const nextState = {
			...initialState,
			searchQuery: 'anything'
		};
		expect(todoApp(initialState, action)).toEqual(nextState);
	});

	it('should handle TOGGLE_MODAL', () => {
		let action = {
			type: TOGGLE_MODAL,
			tabId: undefined,
		};
		const nextState = {
			...initialState,
			modalActive: {
				isOpened: true,
				tabId: undefined
			}
		};
		expect(todoApp(initialState, action)).toEqual(nextState);

		action = {
			type: TOGGLE_MODAL,
			tabId: 5,
		};
		const nextNextState = {
			...initialState,
			modalActive: {
				isOpened: false,
				tabId: 5
			}
		};
		expect(todoApp(nextState, action)).toEqual(nextNextState);

	});

	it('should handle TOGGLE_SIDEBAR', () => {
		const action = {
			type: TOGGLE_SIDEBAR
		};
		const nextState = {
			...initialState,
			collapsedSideBar: true
		};
		expect(todoApp(initialState, action)).toEqual(nextState);
	});

	it('should handle CHANGE_ACTIVE_TAB', () => {
		const action = {
			type: CHANGE_ACTIVE_TAB,
			tabId: 5
		};
		const nextState = {
			...initialState,
			activeTab: 5
		};
		expect(todoApp(initialState, action)).toEqual(nextState);
	});
});
