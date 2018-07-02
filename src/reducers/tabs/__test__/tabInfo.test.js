import * as _ from 'lodash';
import {
	ADD_STARRED_TODO,
	ADD_TAB,
	ADD_TODO,
	CHANGE_SORT,
	INBOX_ID,
	SORT_BY,
	STARRED_ID,
} from "../../../actions/actionTypes";
import {
	COPIED_TAB_STATE, GET_TAB_INFO, INBOX_TAB_INFO,
	TABS_INITIAL_STATE,
	TABS_SORTBY_CREATION,
	TABS_STATE, TOGGLE_STAR_TODO_STATE
} from "./__fixtures__/tabsReducers.fixtures";
import * as actionTypes from "../../../actions/actionTypes";
import {getTabInfo} from "../tabInfo";
import tabInfo from '../tabInfo';
import {STATE_WITH_TABS} from "../../__test__/__fixtures__/reducers.fixtures";

describe('todoApp tabs', () => {
	describe('reducer', () => {

		it('should have initial state', () => {
			expect(tabInfo(undefined, {})).toEqual(TABS_INITIAL_STATE.tabInfo);
		});

		describe('action STAR_TOGGLE_TODO', () => {

			it('should remove todo from starred todos', () => {
				const action = {
					type: actionTypes.STAR_TOGGLE_TODO,
					tabId: INBOX_ID,
					todoId: 'c00a197e-1083-4064-aeb4-765654c5c9f6',
					completed: true,
					star: true
				};
				const input = _.map(TABS_STATE.tabInfo, _.cloneDeep);
				expect(tabInfo(input, action)).toEqual(TOGGLE_STAR_TODO_STATE.tabInfo);
			});

			it('should add todo to starred todos', () => {
				const action = {
					type: actionTypes.STAR_TOGGLE_TODO,
					tabId: INBOX_ID,
					todoId: 'c00a197e-1083-4064-aeb4-765654c5c9f6',
					completed: true,
					star: true
				};
				expect(tabInfo(TOGGLE_STAR_TODO_STATE.tabInfo, action, TOGGLE_STAR_TODO_STATE.todoInfo)).toEqual(TABS_STATE.tabInfo);
			});

		});

		it('should handle ADD_TAB', () => {
			const newTabId = 5;
			const newTabName = 'newTab';
			const action = {
				type: ADD_TAB,
				tabId: newTabId,
				tabName: newTabName
			};
			const input = _.map(TABS_STATE.tabInfo, _.cloneDeep);
			const nextState = {
				tabInfo: [
					...input,
					{
						tabId: newTabId,
						tabName: newTabName,
						todos: [],
						starredTodos: [],
						inCompletedTodos: 0
					}
				],
				todoInfo: {
					...TABS_STATE.todoInfo
				}
			};
			expect(tabInfo(input, action, TABS_STATE.todoInfo)).toEqual(nextState.tabInfo);
		});

		it('should handle ADD_STARRED_TODO', () => {
			const constantDate = new Date('2017-06-13T04:41:20');

			Date = class extends Date {
				constructor() {
					super();
					return constantDate
				}
			};

			const newTodoId = 5;
			const newTodoText = 'newTodo';

			const action = {
				type: ADD_STARRED_TODO,
				tabId: INBOX_ID,
				todoId: newTodoId,
				text: newTodoText
			};

			const nextState = {
				tabInfo: [
					{
						tabId: INBOX_ID,
						tabName: 'Inbox',
						todos: [newTodoId],
						starredTodos: [newTodoId],
						inCompletedTodos: 1
					},
					{
						tabId: STARRED_ID,
						tabName: 'Starred',
						todos: [],
						starredTodos: [],
						inCompletedTodos: 1
					}
				],
				todoInfo: {
					[newTodoId]: {
						tabId: INBOX_ID,
						todoId: newTodoId,
						text: newTodoText,
						createdTime: new Date(),
						star: true
					}
				}
			};

			expect(tabInfo(TABS_INITIAL_STATE.tabInfo, action, TABS_INITIAL_STATE.todoInfo)).toEqual(nextState.tabInfo);
		});

		it('should handle ADD_TODO', () => {
			const constantDate = new Date('2017-06-13T04:41:20');

			Date = class extends Date {
				constructor() {
					super();
					return constantDate
				}
			};

			const newTodoId = 5;
			const newTodoText = 'newTodo';

			const action = {
				type: ADD_TODO,
				tabId: INBOX_ID,
				todoId: newTodoId,
				text: newTodoText
			};

			const nextState = {
				tabInfo: [
					{
						tabId: INBOX_ID,
						tabName: 'Inbox',
						todos: [newTodoId],
						starredTodos: [],
						inCompletedTodos: 1
					},
					{
						tabId: STARRED_ID,
						tabName: 'Starred',
						todos: [],
						starredTodos: [],
						inCompletedTodos: 0
					}
				],
				todoInfo: {
					[newTodoId]: {
						tabId: INBOX_ID,
						todoId: newTodoId,
						text: newTodoText,
						createdTime: new Date()
					}
				}
			};

			expect(tabInfo(TABS_INITIAL_STATE.tabInfo, action, TABS_INITIAL_STATE.todoInfo)).toEqual(nextState.tabInfo);
		});

		it('should handle CHANGE_SORT', () => {
			let action = {
				type: CHANGE_SORT,
				sortBy: SORT_BY.SORT_CREATION,
				tabId: INBOX_ID
			};
			const nextState = TABS_SORTBY_CREATION;
			const input = _.map(TABS_STATE.tabInfo, _.cloneDeep);
			expect(tabInfo(input, action, TABS_STATE.todoById)).toEqual(nextState.tabInfo);

			action = {
				type: CHANGE_SORT,
				sortBy: SORT_BY.SORT_ALPHA,
				tabId: INBOX_ID
			};

			expect(tabInfo(nextState.tabInfo, action, nextState.todoById)).toEqual(TABS_STATE.tabInfo);
		});

		it('should handle CHANGE_TAB_NAME', () => {
			const action = {
				type: actionTypes.CHANGE_TAB_NAME,
				tabId: INBOX_ID,
				tabName: 'newTab'
			};

			const nextState = _.cloneDeep(TABS_INITIAL_STATE);
			nextState.tabInfo[0].tabName = action.tabName;

			expect(tabInfo(TABS_INITIAL_STATE.tabInfo, action, TABS_INITIAL_STATE.todoById)).toEqual(nextState.tabInfo);
		});

		it('should handle DELETE_TAB', () => {

			const action = {
				type: actionTypes.DELETE_TAB,
				tabId: INBOX_ID,
				todos: []
			};
			const nextState = {
				tabInfo: [
					{
						tabId: STARRED_ID,
						tabName: 'Starred',
						todos: [],
						starredTodos: [],
						inCompletedTodos: 0
					}
				],
				todoById: {}
			};
			expect(tabInfo(TABS_INITIAL_STATE.tabInfo, action, TABS_INITIAL_STATE.todoById)).toEqual(nextState.tabInfo);

		});

		it('should handle TOGGLE_VISIBILITY_FILTER', () => {
			const action = {
				type: actionTypes.TOGGLE_VISIBILITY_FILTER,
				tabId: INBOX_ID
			};
			const nextState = _.cloneDeep(TABS_INITIAL_STATE);
			nextState.tabInfo[0].showCompletedTodo = true;
			expect(tabInfo(TABS_INITIAL_STATE.tabInfo, action, TABS_INITIAL_STATE.todoById)).toEqual(nextState.tabInfo);
		});

	});

	describe('selectors', () => {

		describe('tabInfo', () => {

			it('should get all tabInfo if tabId is not defined', () => {
				expect(getTabInfo(STATE_WITH_TABS)).toEqual(GET_TAB_INFO);
			});

			it('should get tabInfo of tabId', () => {
				const inboxTabInfo = {
					tabId: INBOX_ID,
					tabName: 'Inbox',
					todos: [],
					starredTodos: []
				};
				expect(getTabInfo(STATE_WITH_TABS, INBOX_ID)).toEqual(INBOX_TAB_INFO);
			});
		});

	});

});
