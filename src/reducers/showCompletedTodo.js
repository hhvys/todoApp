import {TOGGLE_VISIBILITY_FILTER} from '../actions/actionTypes';

function showCompletedTodo(state = true, action) {
	switch (action.type) {
		case TOGGLE_VISIBILITY_FILTER:
			return !state;
		default:
			return state;
	}
}

export default showCompletedTodo;