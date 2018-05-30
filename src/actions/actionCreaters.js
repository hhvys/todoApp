import * as actionTypes from './actionTypes'

let nextId = localStorage.getItem('nextId') || 2;

const storeNextId = () => localStorage.setItem('nextId', nextId.toString());

export function searchQuery(query) {
	return {
		type: actionTypes.SEARCH_QUERY,
		query
	}
}

export function toggleVisibilityFilter() {
	return {
		type: actionTypes.TOGGLE_VISIBILITY_FILTER
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

export function toggleModal() {
	return {
		type: actionTypes.TOGGLE_MODAL
	}
}

export function toggleEdit() {
	return {
		type: actionTypes.TOGGLE_EDIT
	}
}

export function addTab(tabName) {
	nextId++;
	storeNextId();
	return {
		type: actionTypes.ADD_TAB,
		tabId: nextId,
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
	console.log(tabId, tabName);
	return {
		type: actionTypes.CHANGE_TAB_NAME,
		tabId,
		tabName
	}
}

export function addTodo(tabId, text) {
	nextId++;
	storeNextId();
	return {
		type: actionTypes.ADD_TODO,
		tabId,
		todoId: nextId,
		text
	}
}

export function addStarredTodo(tabId, text) {
	nextId++;
	storeNextId();
	return {
		type: actionTypes.ADD_STARRED_TODO,
		tabId,
		todoId: nextId,
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
	nextId++;
	storeNextId();
	return {
		type: actionTypes.COPY_TAB,
		fromId,
		toId: nextId
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