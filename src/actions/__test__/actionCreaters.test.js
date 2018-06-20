import {
	addStarredTodo,
	addTab, addTodo,
	changeActiveTab, changeSorting, changeTabName, copyTab, deleteTab,
	searchQuery,
	toggleModal,
	toggleSideBar, toggleStarTodo, toggleTodo,
	toggleVisibilityFilter
} from "../actionCreaters";
import {
	ADD_STARRED_TODO,
	ADD_TAB, ADD_TODO,
	CHANGE_ACTIVE_TAB, CHANGE_SORT, CHANGE_TAB_NAME, DELETE_TAB, INBOX_ID,
	SEARCH_QUERY, SORT_BY, STAR_TOGGLE_TODO,
	TOGGLE_MODAL,
	TOGGLE_SIDEBAR, TOGGLE_TODO,
	TOGGLE_VISIBILITY_FILTER
} from "../actionTypes";
import {v4} from 'node-uuid';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import todoApp from "../../reducers/todoApp";
import {COPY_ACTION, STATE} from "./__fixtures__/copyTab.fixtures";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
jest.mock('node-uuid', () => ({v4: jest.fn(() => 1)}));

describe('actionCreaters', () => {

	describe('searchQuery', () => {
		it('should handle empty string as argument', () => {
			const query = '';
			const action = {
				type: SEARCH_QUERY,
				query
			};
			expect(searchQuery(query)).toEqual(action);
		});

		it('should handle non empty string as argument', () => {
			const query = 'query';
			const action = {
				type: SEARCH_QUERY,
				query
			};
			expect(searchQuery(query)).toEqual(action);
		});

		it('should handle undefined arguments', () => {
			const action = {
				type: SEARCH_QUERY
			};
			expect(searchQuery()).toEqual(action);
		});

	});

	describe('toggleVisibilityFilter', () => {
		it('should return TOGGLE_VISIBILITY_FILTER action', () => {
			const tabId = 'a383d653-0fc9-4873-bf88-e4ee57885632';
			const action = {
				type: TOGGLE_VISIBILITY_FILTER,
				tabId
			};
			expect(toggleVisibilityFilter(tabId)).toEqual(action);
		});

		it('should handle undefined arguments', () => {
			const action = {
				type: TOGGLE_VISIBILITY_FILTER
			};
			expect(toggleVisibilityFilter()).toEqual(action);
		});

	});

	describe('changeActiveTab', () => {
		it('should return CHANGE_ACTIVE_TAB action', () => {
			const tabId = 'a383d653-0fc9-4873-bf88-e4ee57885632';
			const action = {
				type: CHANGE_ACTIVE_TAB,
				tabId
			};
			expect(changeActiveTab(tabId)).toEqual(action);
		});

		it('should handle undefined arguments', () => {
			const action = {
				type: CHANGE_ACTIVE_TAB
			};
			expect(changeActiveTab()).toEqual(action);
		});

	});

	describe('toggleSideBar', () => {
		it('should return TOGGLE_SIDEBAR action', () => {
			const action = {
				type: TOGGLE_SIDEBAR,
			};
			expect(toggleSideBar()).toEqual(action);
		});
	});

	describe('toggleModal', () => {
		it('should return TOGGLE_MODAL action if tabId is undefined', () => {
			const action = {
				type: TOGGLE_MODAL,
			};
			expect(toggleModal()).toEqual(action);
		});

		it('should return TOGGLE_MODAL action if tabId is defined', () => {
			const tabId = 'a383d653-0fc9-4873-bf88-e4ee57885632';
			const action = {
				type: TOGGLE_MODAL,
				tabId
			};
			expect(toggleModal(tabId)).toEqual(action);
		});
	});

	describe('addTab', () => {
		it('should return ADD_TAB action', () => {
			const tabName = 'tabName';
			const action = {
				type: ADD_TAB,
				tabId: v4(),
				tabName
			};
			expect(addTab(tabName)).toEqual(action);
		});

		it('should handle if tabName is undefined', () => {
			const action = {
				type: ADD_TAB,
				tabId: v4(),
			};
			expect(addTab()).toEqual(action);
		});
	});

	describe('deleteTab', () => {

		it('should return DELETE_TAB action', () => {
			const tabId = 'a383d653-0fc9-4873-bf88-e4ee57885632';
			const action = {
				type: DELETE_TAB,
				tabId
			};
			expect(deleteTab(tabId)).toEqual(action);
		});

		it('should handle undefined arguments', () => {
			const action = {
				type: DELETE_TAB
			};
			expect(deleteTab()).toEqual(action);
		});
	});

	describe('changeTabName', () => {

		it('should return CHANGE_TAB_NAME action', () => {
			const tabId = 'a383d653-0fc9-4873-bf88-e4ee57885632';
			const tabName = 'tabName';
			const action = {
				type: CHANGE_TAB_NAME,
				tabId,
				tabName
			};
			expect(changeTabName(tabId, tabName)).toEqual(action);
		});

		it('should handle undefined arguments', () => {
			const action = {
				type: CHANGE_TAB_NAME
			};
			expect(changeTabName()).toEqual(action);
		});

	});

	describe('addTodo', () => {

		it('should return ADD_TODO action', () => {
			const tabId = 'a383d653-0fc9-4873-bf88-e4ee57885632';
			const text = 'text';
			const action = {
				type: ADD_TODO,
				tabId,
				text,
				todoId: v4()
			};
			expect(addTodo(tabId, text)).toEqual(action);
		});

		it('should handle undefined arguments', () => {
			const action = {
				type: ADD_TODO,
				todoId: v4()
			};
			expect(addTodo()).toEqual(action);
		});

	});

	describe('addStarredTodo', () => {
		it('should return ADD_STARRED_TODO action', () => {
			const text = 'text';
			const action = {
				type: ADD_STARRED_TODO,
				tabId: INBOX_ID,
				text,
				todoId: v4()
			};
			expect(addStarredTodo(text)).toEqual(action);
		});

		it('should handle undefined arguments', () => {
			const action = {
				type: ADD_STARRED_TODO,
				todoId: v4(),
				tabId: INBOX_ID
			};
			expect(addStarredTodo()).toEqual(action);
		});
	});

	describe('toggleTodo', () => {
		it('should return TOGGLE_TODO action', () => {
			const tabId = 'a383d653-0fc9-4873-bf88-e4ee57885632';
			const todoId = 'a383d653-0fc9-4873-bf88-e4ee57885633';
			const action = {
				type: TOGGLE_TODO,
				tabId,
				todoId
			};
			expect(toggleTodo(tabId, todoId)).toEqual(action);
		});

		it('should handle undefined arguments', () => {
			const action = {
				type: TOGGLE_TODO,
			};
			expect(toggleTodo()).toEqual(action);
		});
	});

	describe('toggleStarTodo', () => {
		it('should return STAR_TOGGLE_TODO action', () => {
			const tabId = 'a383d653-0fc9-4873-bf88-e4ee57885632';
			const todoId = 'a383d653-0fc9-4873-bf88-e4ee57885633';
			const action = {
				type: STAR_TOGGLE_TODO,
				tabId,
				todoId
			};
			expect(toggleStarTodo(tabId, todoId)).toEqual(action);
		});

		it('should handle undefined arguments', () => {
			const action = {
				type: STAR_TOGGLE_TODO,
			};
			expect(toggleStarTodo()).toEqual(action);
		});
	});

	describe('changeSorting', () => {

		it('should dispatch action with current state of sortBy', () => {
			const initialState = todoApp({}, {});
			const expectedActions = [{
				type: CHANGE_SORT,
				sortBy: initialState.sortBy
			}];
			const store = mockStore(initialState);
			store.dispatch(changeSorting());
			expect(store.getActions()).toEqual(expectedActions);
		});

		it('should dispatch action with given argument if sortBy is defined', () => {
			const initialState = todoApp({}, {});
			const expectedActions = [{
				type: CHANGE_SORT,
				sortBy: SORT_BY.SORT_ALPHA
			}];
			const store = mockStore(initialState);
			store.dispatch(changeSorting(SORT_BY.SORT_ALPHA));
			expect(store.getActions()).toEqual(expectedActions);
		})

	});

	// todo
	// describe('copyTab', () => {
	// 	it('should dispatch COPY_TAB action if fromId is defined', () => {
	// 		const state = STATE;
	// 		const expectedActions = [COPY_ACTION];
	// 		const store = mockStore(state);
	// 		const fromId = 'e26ee1de-944d-4b3a-88cc-1464fe53f32b';
	// 		store.dispatch(copyTab(fromId));
	// 		expect(store.getActions()).toEqual(expectedActions);
	// 	});
	// });

});
