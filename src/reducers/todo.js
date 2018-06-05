import {
	ADD_TODO,
	ADD_STARRED_TODO,
	TOGGLE_TODO,
	STAR_TOGGLE_TODO
} from "../actions/actionTypes";

const todo = (state = {}, action) => {
	switch (action.type) {
		case ADD_TODO:
			return {
				tabId: action.tabId,
				todoId: action.todoId,
				text: action.text,
				completed: false,
				star: false,
				completedTime: undefined,
				createdTime: new Date(),
				active: false
			};
		case ADD_STARRED_TODO:
			return {
				tabId: action.tabId,
				todoId: action.todoId,
				text: action.text,
				completed: false,
				star: true,
				completedTime: undefined,
				createdTime: new Date(),
				active: false
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

export function getTodo(state) {

}

export default todo;
