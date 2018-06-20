import * as actionTypes from './actionTypes';
import {v4} from 'node-uuid';
import {COPY_TAB} from "./actionTypes";
import {getTabs} from "../reducers/tabs/tabs";
import {getTodoInfo} from "../reducers/tabs/todoInfo";
import {INBOX_ID} from "./actionTypes";
import {getSortBy} from "../reducers/sortBy";

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
		tabId: INBOX_ID,
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

export function copyTab(fromId) {
	return (dispatch, getState) => {
		const state = getState();
		const tabs = getTabs(state);
		const newTabId = v4();
		const fromTab = tabs
			.find(tab => tab.tabId === fromId);

		//Map of new_todoIds to todoInfo
		const todos = {};
		const starredTodos = [];

		fromTab
			.todos
			.forEach(todo => {
				const newTodoId = v4();
				todos[newTodoId] = {
					...getTodoInfo(state.tabs, todo.todoId),
					tabId: newTabId,
					todoId: newTodoId
				};
				todos[newTodoId].star &&
					starredTodos.push(newTodoId);
			});

		const ret = {
			type: COPY_TAB,
			starredTodos,
			todos,
			toId: newTabId,
			tabName: fromTab.tabName + " Copy"
		};
		return dispatch(ret);
	}
}

export function toggleStarTodo(tabId, todoId) {
	return {
		type: actionTypes.STAR_TOGGLE_TODO,
		tabId,
		todoId
	}
}

function dispatchWithCurrentSortBy() {
	return (dispatch, getState) => (
		dispatch(changeSorting(getSortBy(getState()))));
}

export function changeSorting(sortBy) {
	if (!sortBy)
		return dispatchWithCurrentSortBy();

	return {
		type: actionTypes.CHANGE_SORT,
		sortBy
	}
}
