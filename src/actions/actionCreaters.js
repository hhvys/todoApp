import * as actionTypes from './actionTypes'
import {v4} from 'node-uuid';

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
	return {
		type: actionTypes.COPY_TAB,
		fromId,
		toId: v4()
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
	return {
		type: actionTypes.CHANGE_SORT,
		sortBy
	}
}

export function toggleDropDown() {
	return {
		type: actionTypes.TOGGLE_DROPDOWN
	}
}
