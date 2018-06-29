import * as actionTypes from './actionTypes';
import {v4} from 'node-uuid';
import {COPY_TAB} from "./actionTypes";
import {getTodoInfo} from "../reducers/tabs/todoInfo";
import {INBOX_ID} from "./actionTypes";
import {getSortBy} from "../reducers/sortBy";
import {getActiveTab} from "../reducers/activeTab";
import {getTabInfo} from "../reducers/tabs/tabInfo";
import {DELETE_TAB} from "./actionTypes";

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

const dispatchDeleteTab = (tabId) => {
	return (dispatch, getState) => {
		const tab = getTabInfo(getState(), tabId);
		const todos = [...tab.todos];
		console.log(todos);
		dispatch({
			type: DELETE_TAB,
			tabId,
			todos
		});
	};
};

export function deleteTab(tabId) {
	return dispatchDeleteTab(tabId);
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
	return (dispatch, getState) => {
		const todoInfo = getTodoInfo(getState(), todoId);
		return dispatch({
			type: actionTypes.TOGGLE_TODO,
			tabId,
			todoId,
			completed: todoInfo.completed,
			star: todoInfo.star
		});
	};
}

export function copyTab(fromId) {
	return (dispatch, getState) => {
		const state = getState();
		const tabs = getTabInfo(state);
		const newTabId = v4();
		const fromTab = tabs
			.find(tab => tab.tabId === fromId);
		const inCompletedTodos = fromTab.inCompletedTodos;
		//Map of new_todoIds to todoInfo
		const todos = {};
		const starredTodos = [];

		fromTab
			.todos
			.forEach(todo => {
				const newTodoId = v4();
				todos[newTodoId] = {
					...getTodoInfo(state, todo.todoId),
					tabId: newTabId,
					todoId: newTodoId
				};
				todos[newTodoId].star &&
				starredTodos.push(newTodoId);
			});

		return dispatch({
			type: COPY_TAB,
			starredTodos,
			todos,
			inCompletedTodos,
			toId: newTabId,
			tabName: fromTab.tabName + " Copy"
		});
	}
}

export function toggleStarTodo(tabId, todoId) {
	return (dispatch, getState) => {
		const todoInfo = getTodoInfo(getState(), todoId);
		return dispatch({
			type: actionTypes.STAR_TOGGLE_TODO,
			tabId,
			todoId,
			completed: todoInfo.completed,
			star: todoInfo.star
		});
	};
}


function dispatchWithCurrentSortBy(sortBy, tabId) {
	return (dispatch, getState) => {
		const state = getState();
		if (typeof tabId === 'undefined')
			tabId = getActiveTab(state);
		if (typeof sortBy === 'undefined')
			sortBy = getSortBy(state);
		dispatch(changeSorting(sortBy, tabId));
	};
}

export function changeSorting(sortBy, tabId) {
	if (typeof sortBy === 'undefined' || typeof tabId === 'undefined')
		return dispatchWithCurrentSortBy(sortBy, tabId);
	return {
		type: actionTypes.CHANGE_SORT,
		sortBy,
		tabId,
	}
}
