import * as _ from 'lodash';
import tabs from "../tabs";
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
import {getTodoById} from "../todoById";
import todoById from '../todoById';

describe('todoApp tabs todoInfo', () => {
	describe('reducer', () => {

		it('should have initial state', () => {
			expect(todoById(undefined, {})).toEqual(TABS_INITIAL_STATE.todoInfo);
		});

		describe('action STAR_TOGGLE_TODO', () => {

			it('should add todo to starred todos', () => {
				const action = {
					type: actionTypes.STAR_TOGGLE_TODO,
					tabId: INBOX_ID,
					todoId: 'a383d653-0fc9-4873-bf88-e4ee57885632'
				};
				expect(todoById(TABS_STATE.todoInfo, action)).toEqual(TOGGLE_STAR_TODO_STATE.todoInfo);
			});

			it('should remove todo from starred todos', () => {
				const action = {
					type: actionTypes.STAR_TOGGLE_TODO,
					tabId: INBOX_ID,
					todoId: 'a383d653-0fc9-4873-bf88-e4ee57885632'
				};
				expect(todoById(TOGGLE_STAR_TODO_STATE.todoInfo, action)).toEqual(TABS_STATE.todoInfo);
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
			expect(todoById(TABS_STATE.todoInfo, action)).toEqual(nextState.todoInfo);
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

			expect(todoById(TABS_INITIAL_STATE.todoInfo, action)).toEqual(nextState.todoInfo);
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

			expect(todoById(TABS_INITIAL_STATE.todoInfo, action)).toEqual(nextState.todoInfo);
		});

		it('should handle CHANGE_SORT', () => {
			let action = {
				type: CHANGE_SORT,
				sortBy: SORT_BY.SORT_ALPHA
			};
			const nextState = TABS_SORTBY_ALPHA;
			expect(todoById(TABS_STATE.todoInfo, action)).toEqual(nextState.todoInfo);

			action = {
				type: CHANGE_SORT,
				sortBy: SORT_BY.SORT_CREATION
			};

			expect(todoById(nextState.todoInfo, action)).toEqual(TABS_STATE.todoInfo);
		});

		it('should handle COPY_TAB', () => {
			expect(todoById(TABS_STATE.todoInfo, COPY_TAB_ACTION)).toEqual(COPIED_TAB_STATE.todoInfo);
		});

		it('should handle CHANGE_TAB_NAME', () => {
			const action = {
				type: actionTypes.CHANGE_TAB_NAME,
				tabId: INBOX_ID,
				tabName: 'newTab'
			};

			const nextState = _.cloneDeep(TABS_INITIAL_STATE);
			nextState.tabInfo[0].tabName = action.tabName;

			expect(todoById(TABS_INITIAL_STATE.todoInfo, action)).toEqual(nextState.todoInfo);
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
			expect(todoById(TABS_INITIAL_STATE.todoInfo, action)).toEqual(nextState.todoInfo);

		});

		it('should handle TOGGLE_VISIBILITY_FILTER', () => {
			const action = {
				type: actionTypes.TOGGLE_VISIBILITY_FILTER,
				tabId: INBOX_ID
			};
			const nextState = _.cloneDeep(TABS_INITIAL_STATE);
			nextState.tabInfo[0].showCompletedTodo = true;
			expect(todoById(TABS_INITIAL_STATE.todoInfo, action)).toEqual(nextState.todoInfo);
		});

	});

	describe('selectors', () => {

		describe('todoInfo', () => {

			it('should get todoInfo of all todoIds', () => {
				const todoIds = [
					'6d0db783-1bcb-40ab-ab48-12a0ae8aa773',
					'a383d653-0fc9-4873-bf88-e4ee57885632'
				];
				const todoInfo = [
					{
						tabId: 0,
						todoId: '6d0db783-1bcb-40ab-ab48-12a0ae8aa773',
						text: '2',
						createdTime: '2018-06-18T04:52:28.679Z',
						star: true
					},
					{
						tabId: 0,
						todoId: 'a383d653-0fc9-4873-bf88-e4ee57885632',
						text: '1',
						createdTime: '2018-06-18T04:52:28.353Z',
						star:false
					}
				];
				expect(getTodoById(TABS_STATE, todoIds)).toEqual(todoInfo);
			});

			it('should get todoInfo of todoId', () => {
				const todoId = '6d0db783-1bcb-40ab-ab48-12a0ae8aa773';
				const todoInfo = {
					tabId: 0,
					todoId: '6d0db783-1bcb-40ab-ab48-12a0ae8aa773',
					text: '2',
					createdTime: '2018-06-18T04:52:28.679Z',
					star: true
				};
				expect(getTodoById(TABS_STATE, todoId)).toEqual(todoInfo);
			})

		});

	});

});
