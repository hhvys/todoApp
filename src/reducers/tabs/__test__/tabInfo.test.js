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
	COPIED_TAB_STATE, COPY_TAB_ACTION,
	TABS_INITIAL_STATE,
	TABS_SORTBY_ALPHA,
	TABS_STATE, TOGGLE_STAR_TODO_STATE
} from "./__fixtures__/tabsReducers.fixtures";
import * as actionTypes from "../../../actions/actionTypes";
import {getTabInfo} from "../tabInfo";
import tabInfo from '../tabInfo';

describe('todoApp tabs', () => {
	describe('reducer', () => {

		it('should have initial state', () => {
			expect(tabInfo(undefined, {})).toEqual(TABS_INITIAL_STATE.tabInfo);
		});

		describe('action STAR_TOGGLE_TODO', () => {

			it('should add todo to starred todos', () => {
				const action = {
					type: actionTypes.STAR_TOGGLE_TODO,
					tabId: INBOX_ID,
					todoId: 'a383d653-0fc9-4873-bf88-e4ee57885632'
				};
				expect(tabInfo(TABS_STATE.tabInfo, action)).toEqual(TOGGLE_STAR_TODO_STATE.tabInfo);
			});

			it('should remove todo from starred todos', () => {
				const action = {
					type: actionTypes.STAR_TOGGLE_TODO,
					tabId: INBOX_ID,
					todoId: 'a383d653-0fc9-4873-bf88-e4ee57885632'
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
			const nextState = {
				tabInfo: [
					...TABS_STATE.tabInfo,
					{
						tabId: newTabId,
						tabName: newTabName,
						todos: [],
						starredTodos: []
					}
				],
				todoInfo: {
					...TABS_STATE.todoInfo
				}
			};
			expect(tabInfo(TABS_STATE.tabInfo, action, TABS_STATE.todoInfo)).toEqual(nextState.tabInfo);
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
						starredTodos: [newTodoId]
					},
					{
						tabId: STARRED_ID,
						tabName: 'Starred',
						todos: [],
						starredTodos: []
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
						starredTodos: []
					},
					{
						tabId: STARRED_ID,
						tabName: 'Starred',
						todos: [],
						starredTodos: []
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
				sortBy: SORT_BY.SORT_ALPHA
			};
			const nextState = TABS_SORTBY_ALPHA;
			expect(tabInfo(TABS_STATE.tabInfo, action, TABS_STATE.todoInfo)).toEqual(nextState.tabInfo);

			action = {
				type: CHANGE_SORT,
				sortBy: SORT_BY.SORT_CREATION
			};

			expect(tabInfo(nextState.tabInfo, action, nextState.todoInfo)).toEqual(TABS_STATE.tabInfo);
		});

		it('should handle COPY_TAB', () => {
			expect(tabInfo(TABS_STATE.tabInfo, COPY_TAB_ACTION, TABS_STATE.todoInfo)).toEqual(COPIED_TAB_STATE.tabInfo);
		});

		it('should handle CHANGE_TAB_NAME', () => {
			const action = {
				type: actionTypes.CHANGE_TAB_NAME,
				tabId: INBOX_ID,
				tabName: 'newTab'
			};

			const nextState = _.cloneDeep(TABS_INITIAL_STATE);
			nextState.tabInfo[0].tabName = action.tabName;

			expect(tabInfo(TABS_INITIAL_STATE.tabInfo, action, TABS_INITIAL_STATE.todoInfo)).toEqual(nextState.tabInfo);
		});

		it('should handle DELETE_TAB', () => {

			const action = {
				type: actionTypes.DELETE_TAB,
				tabId: INBOX_ID
			};
			const nextState = {
				tabInfo: [
					{
						tabId: STARRED_ID,
						tabName: 'Starred',
						todos: [],
						starredTodos: []
					}
				],
				todoInfo: {}
			};
			expect(tabInfo(TABS_INITIAL_STATE.tabInfo, action, TABS_INITIAL_STATE.todoInfo)).toEqual(nextState.tabInfo);

		});

		it('should handle TOGGLE_VISIBILITY_FILTER', () => {
			const action = {
				type: actionTypes.TOGGLE_VISIBILITY_FILTER,
				tabId: INBOX_ID
			};
			const nextState = _.cloneDeep(TABS_INITIAL_STATE);
			nextState.tabInfo[0].showCompletedTodo = true;
			expect(tabInfo(TABS_INITIAL_STATE.tabInfo, action, TABS_INITIAL_STATE.todoInfo)).toEqual(nextState.tabInfo);
		});

	});

	describe('selectors', () => {

		describe('tabInfo', () => {
			it('should get all tabInfo if tabId is not defined', () => {
				expect(getTabInfo(TABS_INITIAL_STATE)).toEqual(TABS_INITIAL_STATE.tabInfo);
			});
			it('should get tabInfo of tabId', () => {
				const inboxTabInfo = {
					tabId: INBOX_ID,
					tabName: 'Inbox',
					todos: [],
					starredTodos: []
				};
				expect(getTabInfo(TABS_INITIAL_STATE, INBOX_ID)).toEqual(inboxTabInfo);
			});
		});

	});

});
