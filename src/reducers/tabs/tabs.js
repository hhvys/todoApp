import todo from './todo';
import todos from './todos';
import {
	ADD_TAB,
	CHANGE_TAB_NAME,
	ADD_TODO,
	TOGGLE_TODO,
	DELETE_TAB,
	COPY_TAB,
	STAR_TOGGLE_TODO,
	ADD_STARRED_TODO,
	ACTIVE_TODO,
	TOGGLE_VISIBILITY_FILTER,
	INBOX_ID,
	STARRED_ID,
	CHANGE_SORT
} from '../../actions/actionTypes';


const initialState = [
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
					showCompletedTodo: true,
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
					tab
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
					tab
			));
		case STAR_TOGGLE_TODO:
			return state.map(tab => (
				tab.tabId === action.tabId ?
					{
						...tab,
						starredTodos: todos(tab.starredTodos, action)
					} : tab
			));
		case ADD_TODO:
			return state.map(tab => (
				tab.tabId === action.tabId ?
					{
						...tab,
						todos: todos(tab.todos, action)
					} : tab
			));
		case ADD_STARRED_TODO:
			return state.map(tab => (
				tab.tabId === action.tabId ?
					{
						...tab,
						starredTodos: todos(tab.starredTodos, action),
						todos: todos(tab.todos, action)
					} : tab
			));
		default:
			return state;
	}
}

function todoInfo(state = {}, action) {
	switch (action.type) {
		case STAR_TOGGLE_TODO:
		case ADD_TODO:
		case ADD_STARRED_TODO:
		case TOGGLE_TODO:
		case ACTIVE_TODO:
			return {
				...state,
				[action.todoId]: todo(state[action.todoId], action)
			};
		case COPY_TAB:
			return {...state, ...(action.todos)};
		default:
			return state;
	}
}

export function getTodoInfo(state, todos) {
	if (Array.isArray(todos)) {
		return todos.map(todo => (
			state.tabs.todoInfo[todo]
		))
	}
	return state.tabs.todoInfo[todos];
}

//reducer
const tabs = (state = {}, action) => {
	return {
		todoInfo: todoInfo(state.todoInfo, action),
		tabInfo: tabInfo(state.tabInfo, action, state.todoInfo)
	}
};

export default tabs;

export function getTabs(state) {
	return state.tabs.tabInfo.map(tab => {
		const todos = getTodoInfo(state, tab.todos);
		const starredTodos = getTodoInfo(state, tab.starredTodos);
		return {
			...tab,
			todos,
			starredTodos
		}
	});
}
