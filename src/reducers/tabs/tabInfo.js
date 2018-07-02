import {
	ADD_TODO,
	ADD_STARRED_TODO,
	STAR_TOGGLE_TODO,
	SORT_BY,
	CHANGE_SORT,
	ADD_TAB,
	INBOX_ID,
	STARRED_ID,
	COPY_TAB,
	CHANGE_TAB_NAME,
	TOGGLE_VISIBILITY_FILTER,
	DELETE_TAB,
	TOGGLE_TODO
} from "../../actions/actionTypes";
import {getTabs} from "./tabs";

/**
 *
 * @param todos - array of to-do ids.
 * @param sortBy
 * @param todoById
 * @returns {*} - sorted array of to-do ids.
 */

const stableSortTodos = (todos, sortBy, todoById) => {
	//For stable sort
	const indexOf = {};
	todos.forEach((todo, index) => {
		indexOf[todo] = index;
	});

	const compareByIndex = (a, b) => {
		if (indexOf[a.todoId] < indexOf[b.todoId])
			return -1;
		return 1;
	};
	return todos.sort((todo1, todo2) => {
		const a = todoById[todo1];
		const b = todoById[todo2];
		switch (sortBy) {
			case SORT_BY.SORT_PRIORITY:
				if (a.star && !b.star)
					return -1;
				if (!a.star && b.star)
					return 1;
				return compareByIndex(a, b);

			case SORT_BY.SORT_CREATION:

				if (a.createdTime > b.createdTime)
					return -1;
				if (a.createdTime < b.createdTime)
					return 1;
				return compareByIndex(a, b);

			case SORT_BY.SORT_ALPHA:
				if (a.text.toLowerCase() < b.text.toLowerCase())
					return -1;
				if (a.text.toLowerCase() > b.text.toLowerCase())
					return 1;
				return compareByIndex(a, b);
		}
	});
};

const todos = (state = [], action, todoById) => {
	switch (action.type) {

		case CHANGE_SORT:
			const newState = [...state];
			return stableSortTodos(newState, action.sortBy, todoById);

		case ADD_TODO:
		case ADD_STARRED_TODO:
			return (
				[
					...state,
					action.todoId
				]);

		case STAR_TOGGLE_TODO:

			/*
				Add to-do id to state array if to-do id is not present and remove if present.
			 */

			const index = state.findIndex(todoId => action.todoId === todoId);
			if (index === -1) {
				return [
					...state,
					action.todoId
				];
			}
			const updatedState = state;
			updatedState.splice(index, 1);
			return updatedState;

		default:
			return state;
	}
};

export const initialState = [
	{
		tabId: INBOX_ID,
		tabName: 'Inbox',
		todos: [],
		starredTodos: [],
		inCompletedTodos: 0
	},
	{
		tabId: STARRED_ID,
		tabName: 'Starred',
		todos: [],
		starredTodos: [],
		inCompletedTodos: 0
	}
];

function tabInfo(state = initialState, action, todoById) {
	let newState;
	switch (action.type) {
		case CHANGE_SORT:
			return state.map(tab => {
				if (tab.tabId !== action.tabId)
					return tab;
				return ({
					...tab,
					todos: todos(tab.todos, action, todoById),
					starredTodos: todos(tab.starredTodos, action, todoById)
				})
			});

		case ADD_TAB:
			return [
				...state,
				{
					tabId: action.tabId,
					tabName: action.tabName,
					todos: [],
					starredTodos: [],
					inCompletedTodos: 0
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

			newState = state.map(tab => {
				if (tab.tabId === STARRED_ID) {
					let change = 0;
					Object
						.keys(action.todos)
						.forEach(todo => {
							if (!action.todos[todo].completed && action.todos[todo].star)
								change += 1;
						});
					return {
						...tab,
						inCompletedTodos: tab.inCompletedTodos + change
					}
				}
				return tab;
			});

			return (
				[
					...newState,
					{
						tabId: action.toId,
						tabName: action.tabName,
						todos: Object
							.keys(action.todos)
							.map(key => action.todos[key].todoId),
						starredTodos: [...action.starredTodos],
						inCompletedTodos: action.inCompletedTodos
					}
				]
			);
		case DELETE_TAB:
			newState = state.map(tab => {
				if (tab.tabId === STARRED_ID) {
					let change = 0;
					action
						.todos
						.forEach(todo => {
							if (!todoById[todo].completed && todoById[todo].star)
								change += 1;
						});
					return {
						...tab,
						inCompletedTodos: tab.inCompletedTodos - change
					}
				}
				return tab;
			});
			return newState.filter(tab =>
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
			return state.map(tab => {
				if (tab.tabId === STARRED_ID) {
					let change = action.star ? -1 : +1;
					if (action.completed)
						change = 0;
					return {
						...tab,
						inCompletedTodos: tab.inCompletedTodos + change
					};
				}
				if (tab.tabId === action.tabId) {
					return {
						...tab,
						starredTodos: todos(tab.starredTodos, action),
					};
				}
				return tab;
			});
		case ADD_TODO:
			return state.map(tab => (
				tab.tabId === action.tabId ?
					{
						...tab,
						todos: todos(tab.todos, action),
						inCompletedTodos: tab.inCompletedTodos + 1
					} :
					tab
			));
		case ADD_STARRED_TODO:
			return state.map(tab => {
				if (tab.tabId === action.tabId)
					return {
						...tab,
						starredTodos: todos(tab.starredTodos, action),
						todos: todos(tab.todos, action),
						inCompletedTodos: tab.inCompletedTodos + 1
					};
				if (tab.tabId === STARRED_ID)
					return {
						...tab,
						inCompletedTodos: tab.inCompletedTodos + 1
					};
				return tab
			});
		case TOGGLE_TODO:
			const changeStarredTab = action.star;

			return state.map(tab => {
				if (tab.tabId === action.tabId || (changeStarredTab && tab.tabId === STARRED_ID)) {
					const change = !action.completed ? -1 : +1;
					return {
						...tab,
						inCompletedTodos: tab.inCompletedTodos + change
					};
				}
				return tab;
			});
		default:
			return state;
	}
}

export const getTabInfo = (state, tabId) => {
	state = getTabs(state);
	if (typeof tabId === 'undefined')
		return state.tabInfo;
	return state
		.tabInfo
		.find(tab => tab.tabId === tabId);
};

export default tabInfo;
