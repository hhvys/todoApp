import {
	ADD_TAB,
	CHANGE_TAB_NAME,
	ADD_TODO,
	TOGGLE_TODO,
	DELETE_TAB,
	COPY_TAB,
	STAR_TOGGLE_TODO, ADD_STARRED_TODO, ACTIVE_TODO
} from '../actions/actionTypes';

const todos = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			return (
				[
					...state,
					{
						todoId: action.todoId,
						text: action.text,
						completed: false,
						star: false,
						completedTime: undefined,
						createdTime: new Date(),
						active: false
					}
				]);
		case ADD_STARRED_TODO:
			return (
				[
					...state,
					{
						todoId: action.todoId,
						text: action.text,
						completed: false,
						star: true,
						completedTime: undefined,
						createdTime: new Date(),
						active: false
					}
				]);
		case TOGGLE_TODO:
			return state.map(todo => (
				todo.todoId === action.todoId ?
					{
						...todo,
						completed: !todo.completed,
						completedTime: new Date()
					} :
					todo
			));
		case STAR_TOGGLE_TODO:
			return state.map(todo => (
				todo.todoId === action.todoId ?
					{
						...todo,
						star: !todo.star
					} :
					todo
			));
		case ACTIVE_TODO:
			return state.map(todo => (
				todo.todoId === action.todoId ?
					{
						...todo,
						active: true
					} :
					{
						...todo,
						active: false
					}
			));
		default:
			return state;
	}
};

const initialState = [
	{
		tabId: 0,
		tabName: 'Inbox',
		todos: []
	},
	{
		tabId: 1,
		tabName: 'Starred',
		todos: []
	}
];

function tabs(state = initialState, action) {
	switch (action.type) {
		case ADD_TAB:
			return [
				...state,
				{
					tabId: action.tabId,
					tabName: action.tabName,
					todos: []
				}
			];
		case CHANGE_TAB_NAME:
			return state.map(tab => (
				tab.tabId === action.tabId ?
					{
						tabId: tab.tabId,
						tabName:
						action.tabName,
						todos: tab.todos
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
						todos: [...fromTab.todos]
					}
				]
			);
		case DELETE_TAB:
			return state.filter(tab =>
				tab.tabId !== action.tabId);
		case ADD_TODO:
		case ADD_STARRED_TODO:
		case TOGGLE_TODO:
		case STAR_TOGGLE_TODO:
		case ACTIVE_TODO:
			return state.map(tab => (
				tab.tabId === action.tabId ?
					{
						...tab,
						todos: todos(tab.todos, action)
					} : tab
			));
		default:
			return state;
	}
}

export default tabs;