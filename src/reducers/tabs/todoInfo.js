import {
	ACTIVE_TODO,
	ADD_STARRED_TODO,
	ADD_TODO,
	COPY_TAB,
	STAR_TOGGLE_TODO,
	TOGGLE_TODO
} from "../../actions/actionTypes";

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

function todoInfo(state = {}, action) {
	switch (action.type) {
		case STAR_TOGGLE_TODO:
		case ADD_TODO:
		case ADD_STARRED_TODO:
		case TOGGLE_TODO:
		case ACTIVE_TODO:
			return {
				...state,
				[action.todoId]: todo(state[action.todoId], action)
			};
		case COPY_TAB:
			return {...state, ...(action.todos)};
		default:
			return state;
	}
}

export default todoInfo;

export function getTodoInfo(state, todos) {
	if (Array.isArray(todos)) {
		return todos.map(todo => (
			state.tabs.todoInfo[todo]
		))
	}
	return state.tabs.todoInfo[todos];
}
