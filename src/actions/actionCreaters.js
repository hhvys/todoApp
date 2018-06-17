import * as actionTypes from './actionTypes'
import {v4} from 'node-uuid';
import {COPY_TAB} from "./actionTypes";
import {getTabs} from "../reducers/tabs/tabs";
import {getTodoInfo} from "../reducers/tabs/todoInfo";

export function searchQuery(query) {
	return {
		type: actionTypes.SEARCH_QUERY,
		query
	}
}

export function toggleVisibilityFilter(tabId) {
	return {
		type: actionTypes.TOGGLE_VISIBILITY_FILTER,
		tabId
	};
}

export function changeActiveTab(tabId) {
	return {
		type: actionTypes.CHANGE_ACTIVE_TAB,
		tabId
	};
}

export function toggleSideBar() {
	return {
		type: actionTypes.TOGGLE_SIDEBAR
	};
}

export function toggleModal(tabId) {
	return {
		type: actionTypes.TOGGLE_MODAL,
		tabId
	}
}

export function addTab(tabName) {
	return {
		type: actionTypes.ADD_TAB,
		tabId: v4(),
		tabName,
	}
}

export function deleteTab(tabId) {
	return {
		type: actionTypes.DELETE_TAB,
		tabId
	}
}

export function changeTabName(tabId, tabName) {
	return {
		type: actionTypes.CHANGE_TAB_NAME,
		tabId,
		tabName
	}
}

export function addTodo(tabId, text) {
	return {
		type: actionTypes.ADD_TODO,
		tabId,
		todoId: v4(),
		text
	}
}

export function addStarredTodo(text) {
	return {
		type: actionTypes.ADD_STARRED_TODO,
		tabId: 0,
		todoId: v4(),
		text
	}
}

export function toggleTodo(tabId, todoId) {
	return {
		type: actionTypes.TOGGLE_TODO,
		tabId,
		todoId
	}
}

export function activeTodo(tabId, todoId) {
	return {
		type: actionTypes.ACTIVE_TODO,
		tabId,
		todoId
	}
}

export function copyTab(fromId) {
	return (dispatch, getState) => {
		const state = getState();
		const tabs = getTabs(state);
		const newTabId = v4();
		const fromTab = tabs
			.find(tab => tab.tabId === fromId);

		//Map of from_todoIds to to_todoIds
		const todoMap = {};
		fromTab
			.todos
			.forEach(todo => todoMap[todo.todoId] = v4());

		//Map of new_todoIds to todoInfo
		const todos = {};
		Object
			.keys(todoMap)
			.forEach(todoId => {
				const newTodoId = todoMap[todoId];
				todos[newTodoId] = {
					...getTodoInfo(state, todoId),
					tabId: newTabId,
					todoId: newTodoId
				}
			});

		const starredTodos = fromTab
			.starredTodos
			.map(todo => todoMap[todo.todoId]);

		const ret = {
			type: COPY_TAB,
			starredTodos,
			todos,
			toId: newTabId,
			tabName: fromTab.tabName + " Copy"
		};
		dispatch(ret);
	}
}

export function toggleStarTodo(tabId, todoId) {
	return {
		type: actionTypes.STAR_TOGGLE_TODO,
		tabId,
		todoId
	}
}

export function changeSorting(sortBy) {
	if (!sortBy)
		return (dispatch, getState) =>
			dispatch(changeSorting(getState().sortBy));

	return {
		type: actionTypes.CHANGE_SORT,
		sortBy
	}
}
