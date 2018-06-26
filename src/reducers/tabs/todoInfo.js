import {
	ADD_STARRED_TODO,
	ADD_TODO,
	COPY_TAB,
	STAR_TOGGLE_TODO,
	TOGGLE_TODO
} from "../../actions/actionTypes";
import {getTabs} from "./tabs";

const todo = (state = {}, action) => {
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

function todoInfo(state = {}, action) {
	switch (action.type) {
		case STAR_TOGGLE_TODO:
		case ADD_TODO:
		case ADD_STARRED_TODO:
		case TOGGLE_TODO:
			state[action.todoId] = todo(state[action.todoId], action)
			return state;
		case COPY_TAB:
			return {...state, ...(action.todos)};
		default:
			return state;
	}
}

export default todoInfo;

export function getTodoInfo(state, todos) {
	state = getTabs(state);
	if (Array.isArray(todos)) {
		return todos.map(todo => (
			state.todoInfo[todo]
		))
	}
	return state.todoInfo[todos];
}
