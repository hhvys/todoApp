import {
	ADD_TODO,
	ADD_STARRED_TODO,
	STAR_TOGGLE_TODO,
	SORT_BY, CHANGE_SORT, ADD_TAB, INBOX_ID, STARRED_ID, COPY_TAB, CHANGE_TAB_NAME, TOGGLE_VISIBILITY_FILTER, DELETE_TAB
} from "../../actions/actionTypes";

const todos = (state = [], action, todoInfo) => {
	switch (action.type) {
		case CHANGE_SORT:
			const newState = [...state];
			return newState.sort((a, b) => {
				a = todoInfo[a];
				b = todoInfo[b];
				switch (action.sortBy) {
					case SORT_BY.SORT_PRIORITY:
						if (a.star && !b.star)
							return -1;
						if (!a.star && b.star)
							return 1;
						return 0;

					case SORT_BY.SORT_CREATION:
						a = Date.parse(a.createdTime);
						b = Date.parse(b.createdTime);
						if (a > b)
							return -1;
						return 1;

					case SORT_BY.SORT_ALPHA:
						if (a.text.toLowerCase() < b.text.toLowerCase())
							return -1;
						return 1;
				}
			});
		case ADD_TODO:
			return (
				[
					...state,
					action.todoId
				]);
		case ADD_STARRED_TODO:
			return (
				[
					...state,
					action.todoId
				]);
		case STAR_TOGGLE_TODO:
			const index = state.findIndex(todoId => action.todoId === todoId);
			if (index === -1) {
				return [
					...state,
					action.todoId
				];
			}
			else {
				const updatedState = state;
				updatedState.splice(index, 1);
				return updatedState;
			}
		default:
			return state;
	}
};

export const initialState = [
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
];

function tabInfo(state = initialState, action, todoInfo) {
	switch (action.type) {
		case CHANGE_SORT:
			return state.map(tab => ({
				...tab,
				todos: todos(tab.todos, action, todoInfo),
				starredTodos: todos(tab.starredTodos, action, todoInfo)
			}));
		case ADD_TAB:
			return [
				...state,
				{
					tabId: action.tabId,
					tabName: action.tabName,
					todos: [],
					starredTodos: []
				}
			];
		case CHANGE_TAB_NAME:
			return state.map(tab => (
				tab.tabId === action.tabId ?
					{
						...tab,
						tabId: tab.tabId,
						tabName: action.tabName,
					} :
					{...tab}
			));
		case COPY_TAB:
			return (
				[
					...state,
					{
						tabId: action.toId,
						tabName: action.tabName,
						todos: Object
							.keys(action.todos)
							.map(key => action.todos[key].todoId),
						starredTodos: [...action.starredTodos]
					}
				]
			);
		case DELETE_TAB:
			return state.filter(tab =>
				tab.tabId !== action.tabId);
		case TOGGLE_VISIBILITY_FILTER:
			return state.map(tab => (
				tab.tabId === action.tabId ?
					{
						...tab,
						showCompletedTodo: !tab.showCompletedTodo
					} :
					{...tab}
			));
		case STAR_TOGGLE_TODO:
			return state.map(tab => (
				tab.tabId === action.tabId ?
					{
						...tab,
						starredTodos: todos(tab.starredTodos, action)
					} :
					{...tab}
			));
		case ADD_TODO:
			return state.map(tab => (
				tab.tabId === action.tabId ?
					{
						...tab,
						todos: todos(tab.todos, action)
					} :
					{...tab}
			));
		case ADD_STARRED_TODO:
			return state.map(tab => (
				tab.tabId === action.tabId ?
					{
						...tab,
						starredTodos: todos(tab.starredTodos, action),
						todos: todos(tab.todos, action)
					} :
					{...tab}
			));
		default:
			return state;
	}
}

export const getTabInfo = (state, tabId) => {
	if(typeof tabId === 'undefined')
		return state.tabInfo;
	return state
		.tabInfo
		.find(tab => tab.tabId === tabId);
};

export default tabInfo;
