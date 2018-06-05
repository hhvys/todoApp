import {combineReducers} from 'redux';
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
	STARRED_ID
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

function tabInfo(state = initialState, action) {
	switch (action.type) {
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
			let fromTab =
				state.find(tab => tab.tabId === action.fromId);
			return (
				[
					...state,
					{
						tabId: action.toId,
						tabName: fromTab.tabName + " Copy",
						todos: [...fromTab.todos],
						starredTodos: [...fromTab.starredTodos]
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
		default:
			return state;
	}
}

const tabs = combineReducers({
	todoInfo,
	tabInfo
});

export default tabs;

export function getTabs(state) {
	const tabs = state.tabs.tabInfo.map(tab => {
		const todos = tab.todos.map(todo => (
			state.tabs.todoInfo[todo]
		));
		const starredTodos = tab.starredTodos.map(todo => (
			state.tabs.todoInfo[todo]
		));
		return {
			...tab,
			todos,
			starredTodos
		}
	});
	return tabs;
}
