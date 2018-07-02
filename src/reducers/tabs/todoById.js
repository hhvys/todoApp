import {
	ADD_STARRED_TODO,
	ADD_TODO,
	COPY_TAB, DELETE_TAB,
	STAR_TOGGLE_TODO,
	TOGGLE_TODO
} from "../../actions/actionTypes";
import {getTabs} from "./tabs";

/**
 *
 * @param state - Object containing information for particular todo
 * @param action
 * @returns {*} - Updated object containing information for todo
 */

const updateTodoInfo = (state = {}, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				tabId: action.tabId,
				todoId: action.todoId,
				text: action.text,
				createdTime: new Date(),
			};
		case ADD_STARRED_TODO:
			return {
				tabId: action.tabId,
				todoId: action.todoId,
				text: action.text,
				star: true,
				createdTime: new Date(),
			};
		case TOGGLE_TODO:
			return {
				...state,
				completed: !state.completed,
				completedTime: new Date()
			};
		case STAR_TOGGLE_TODO:
			return {
				...state,
				star: !state.star
			};
		default:
			return state;
	}
};

function todoById(state = {}, action) {
	switch (action.type) {
		case STAR_TOGGLE_TODO:
		case ADD_TODO:
		case ADD_STARRED_TODO:
		case TOGGLE_TODO:
			state[action.todoId] = updateTodoInfo(state[action.todoId], action);
			return state;
		case COPY_TAB:
			return {...state, ...(action.todos)};
		case DELETE_TAB:
			const newState = {...state};
			action.todos.forEach(todo => delete newState[todo]);
			return newState;
		default:
			return state;
	}
}

export default todoById;



/**
 * Selector from todoById
 * @param state - full state
 * @param todos - single todoId or array of todoIds
 * @returns {*} - object or array of object with full todoInfo
 */

export function getTodoById(state, todos) {
	state = getTabs(state);
	if (Array.isArray(todos)) {
		return todos.map(todo => (
			state.todoById[todo]
		))
	}
	return state.todoById[todos];
}
