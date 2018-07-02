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
	TABS_INITIAL_STATE,
	TABS_SORTBY_CREATION,
	TABS_STATE, TOGGLE_STAR_TODO_STATE
} from "./__fixtures__/tabsReducers.fixtures";
import * as actionTypes from "../../../actions/actionTypes";
import {getTodoById} from "../todoById";
import todoById from '../todoById';
import {STATE_WITH_TABS} from "../../__test__/__fixtures__/reducers.fixtures";

describe('todoApp tabs todoInfo', () => {
	describe('reducer', () => {

		it('should have initial state', () => {
			expect(todoById(undefined, {})).toEqual(TABS_INITIAL_STATE.todoById);
		});

		describe('action STAR_TOGGLE_TODO', () => {

			it('should add todo to starred todos', () => {
				const action = {
					type: actionTypes.STAR_TOGGLE_TODO,
					tabId: INBOX_ID,
					todoId: 'c00a197e-1083-4064-aeb4-765654c5c9f6'
				};
				const input = _.cloneDeep(TABS_STATE.todoById);
				expect(todoById(input, action)).toEqual(TOGGLE_STAR_TODO_STATE.todoById);
			});

			it('should remove todo from starred todos', () => {
				const action = {
					type: actionTypes.STAR_TOGGLE_TODO,
					tabId: INBOX_ID,
					todoId: 'c00a197e-1083-4064-aeb4-765654c5c9f6'
				};
				const input = _.cloneDeep(TOGGLE_STAR_TODO_STATE.todoById);
				expect(todoById(input, action)).toEqual(TABS_STATE.todoById);
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
				todoById: {
					...TABS_STATE.todoById
				}
			};
			const input = _.cloneDeep(TABS_STATE.todoById);
			expect(todoById(input, action)).toEqual(nextState.todoById);
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
				todoById: {
					[newTodoId]: {
						tabId: INBOX_ID,
						todoId: newTodoId,
						text: newTodoText,
						createdTime: new Date(),
						star: true
					}
				}
			};
			const input = _.cloneDeep(TABS_INITIAL_STATE.todoById);
			expect(todoById(input, action)).toEqual(nextState.todoById);
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
				todoById: {
					[newTodoId]: {
						tabId: INBOX_ID,
						todoId: newTodoId,
						text: newTodoText,
						createdTime: new Date()
					}
				}
			};
			const input = _.cloneDeep(TABS_INITIAL_STATE.todoById);
			expect(todoById(input, action)).toEqual(nextState.todoById);
		});

		it('should handle CHANGE_SORT', () => {
			let action = {
				type: CHANGE_SORT,
				sortBy: SORT_BY.SORT_ALPHA
			};
			const nextState = _.cloneDeep(TABS_SORTBY_CREATION);
			const input = _.cloneDeep(TABS_STATE.todoById);
			expect(todoById(input, action)).toEqual(nextState.todoById);

			action = {
				type: CHANGE_SORT,
				sortBy: SORT_BY.SORT_CREATION
			};

			expect(todoById(nextState.todoById, action)).toEqual(TABS_STATE.todoById);
		});

		it('should handle CHANGE_TAB_NAME', () => {
			const action = {
				type: actionTypes.CHANGE_TAB_NAME,
				tabId: INBOX_ID,
				tabName: 'newTab'
			};

			const nextState = _.cloneDeep(TABS_INITIAL_STATE);
			nextState.tabInfo[0].tabName = action.tabName;
			const input = _.cloneDeep(TABS_INITIAL_STATE.todoById);
			expect(todoById(input, action)).toEqual(nextState.todoById);
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
						starredTodos: []
					}
				],
				todoById: {}
			};
			const input = _.cloneDeep(TABS_INITIAL_STATE.todoById);
			expect(todoById(input, action)).toEqual(nextState.todoById);

		});

		it('should handle TOGGLE_VISIBILITY_FILTER', () => {
			const action = {
				type: actionTypes.TOGGLE_VISIBILITY_FILTER,
				tabId: INBOX_ID
			};
			const nextState = _.cloneDeep(TABS_INITIAL_STATE);
			const input = _.cloneDeep(TABS_INITIAL_STATE.todoById);
			nextState.tabInfo[0].showCompletedTodo = true;
			expect(todoById(input, action)).toEqual(nextState.todoById);
		});

	});

	describe('selectors', () => {

		describe('todoById', () => {

			it('should get todoInfo of all todoIds', () => {
				const todoIds = [
					"f9f47212-02ee-4a95-91a5-cabe979a83e0",
					"e0d7d769-07fd-4aee-9e23-284ab3d44712"
				];
				const todoById = [{
					"completed": false,
					"completedTime": "2018-07-02T09:23:38.901Z",
					"createdTime": "2018-07-02T09:19:29.288Z",
					"tabId": 0,
					"text": "4",
					"todoId": "f9f47212-02ee-4a95-91a5-cabe979a83e0"
				}, {
					"completed": true,
					"completedTime": "2018-07-02T09:39:39.317Z",
					"createdTime": "2018-07-02T09:20:17.928Z",
					"tabId": "18f4a48f-10c5-4208-9553-4874b52d8cfa",
					"text": "4",
					"todoId": "e0d7d769-07fd-4aee-9e23-284ab3d44712"
				}];
				expect(getTodoById(STATE_WITH_TABS, todoIds)).toEqual(todoById);
			});

			it('should get todoInfo of todoId', () => {
				const todoId = "f9f47212-02ee-4a95-91a5-cabe979a83e0";
				const todoById = {
					"completed": false,
					"completedTime": "2018-07-02T09:23:38.901Z",
					"createdTime": "2018-07-02T09:19:29.288Z",
					"tabId": 0,
					"text": "4",
					"todoId": "f9f47212-02ee-4a95-91a5-cabe979a83e0"
				};
				expect(getTodoById(STATE_WITH_TABS, todoId)).toEqual(todoById);
			})

		});

	});

});
