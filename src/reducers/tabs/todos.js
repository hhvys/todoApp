import {
	ADD_TODO,
	ADD_STARRED_TODO,
	STAR_TOGGLE_TODO,
	SORT_BY, CHANGE_SORT
} from "../../actions/actionTypes";

const todos = (state = [], action, todoInfo) => {
	switch (action.type) {
		case CHANGE_SORT:
			return state.sort((a, b) => {
				a = todoInfo[a];
				b = todoInfo[b];
				switch (action.sortBy) {
					case SORT_BY.SORT_PRIORITY:
						if (a.star && !b.star)
							return -1;
						if (!a.star && b.star)
							return 1;
						return 0;

					case SORT_BY.SORT_CREATION:
						if (a.createdTime > b.createdTime)
							return -1;
						return 1;

					case SORT_BY.SORT_ALPHA:
						if (a.text.toLowerCase() < b.text.toLowerCase())
							return -1;
						return 1;
				}
			});
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
