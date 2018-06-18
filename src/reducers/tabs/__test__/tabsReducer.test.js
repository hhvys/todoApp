import tabs from "../tabs";
import {
	ADD_TAB,
	ADD_TODO,
	CHANGE_SORT,
	COPY_TAB,
	INBOX_ID,
	SORT_BY,
	STARRED_ID
} from "../../../actions/actionTypes";
import prevState from './tabsInput';
import {v4} from "node-uuid";
import tabsSortAlphaOutput from './tabsSortAlphaOutput'
import tabsCopyTabOutput from './tabsCopyTabOutput';

const initialState = {
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
	],
	todoInfo: {}
};

describe('in tabs reducer', () => {

	it('should have initial state', () => {
		expect(tabs(undefined, {})).toEqual(initialState);
	});

	it('should not affect state', () => {
		const action = {
			type: 'ANY_RANDOM_NOT_EXISTING$#%'
		};
		expect(tabs(initialState, action)).toEqual(initialState);
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
				...prevState.tabInfo,
				{
					tabId: newTabId,
					tabName: newTabName,
					todos: [],
					starredTodos: []
				}
			],
			todoInfo: {
				...prevState.todoInfo
			}
		};
		expect(tabs(prevState, action)).toEqual(nextState);
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

		expect(tabs(initialState, action)).toEqual(nextState);
	});

	it('should handle CHANGE_SORT', () => {
		let action = {
			type: CHANGE_SORT,
			sortBy: SORT_BY.SORT_ALPHA
		};
		const nextState = tabsSortAlphaOutput;
		expect(tabs(prevState, action)).toEqual(nextState);

		action = {
			type: CHANGE_SORT,
			sortBy: SORT_BY.SORT_CREATION
		};

		expect(tabs(nextState, action)).toEqual(prevState);
	});

	it('should handle COPY_TAB', () => {
		const action = {
			type: 'COPY_TAB',
			starredTodos: [
				'086ec476-cc39-4560-bdc8-4754eae8fa61',
				'619a5aa4-41e6-4370-9329-c9cd0422b3b3'
			],
			todos: {
				'8da58a96-8373-4ced-a118-e305a6634cd1': {
					tabId: '8bbc0846-4c28-42f5-b1dc-79dcbdef94fe',
					todoId: '8da58a96-8373-4ced-a118-e305a6634cd1',
					text: 'tab 2 3',
					createdTime: '2018-06-18T04:53:53.053Z'
				},
				'086ec476-cc39-4560-bdc8-4754eae8fa61': {
					tabId: '8bbc0846-4c28-42f5-b1dc-79dcbdef94fe',
					todoId: '086ec476-cc39-4560-bdc8-4754eae8fa61',
					text: 'tab 2 6',
					createdTime: '2018-06-18T04:53:50.670Z',
					completed: true,
					completedTime: '2018-06-18T04:53:55.539Z',
					star: true
				},
				'3e827e5a-e546-4ab8-951f-ef7ee285120f': {
					tabId: '8bbc0846-4c28-42f5-b1dc-79dcbdef94fe',
					todoId: '3e827e5a-e546-4ab8-951f-ef7ee285120f',
					text: 'tab 2 2',
					createdTime: '2018-06-18T04:53:47.757Z',
					completed: true,
					completedTime: '2018-06-18T04:53:57.656Z'
				},
				'619a5aa4-41e6-4370-9329-c9cd0422b3b3': {
					tabId: '8bbc0846-4c28-42f5-b1dc-79dcbdef94fe',
					todoId: '619a5aa4-41e6-4370-9329-c9cd0422b3b3',
					text: 'tab 2 1',
					createdTime: '2018-06-18T04:53:43.581Z',
					star: true
				}
			},
			toId: '8bbc0846-4c28-42f5-b1dc-79dcbdef94fe',
			tabName: '2nd tab Copy'
		};

		expect(tabs(prevState, action)).toEqual(tabsCopyTabOutput);

	})

});
