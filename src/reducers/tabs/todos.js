import {
	ADD_TODO,
	ADD_STARRED_TODO, STAR_TOGGLE_TODO,
} from "../../actions/actionTypes";

const todos = (state = [], action) => {
	switch (action.type) {
		case ADD_TODO:
			return (
				[
					...state,
					action.todoId
				]);
		case ADD_STARRED_TODO:
			return (
				[
					...state,
					action.todoId
				]);
		case STAR_TOGGLE_TODO:
			const index = state.findIndex(todoId => action.todoId === todoId);
			console.log(state);
			if (index === -1) {
				return [
					...state,
					action.todoId
				];
			}
			else {
				const updatedState = state;
				updatedState.splice(index, 1);
				return updatedState;
			}
		default:
			return state;
	}
};

export default todos;
