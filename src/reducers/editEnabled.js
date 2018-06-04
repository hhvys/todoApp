import {TOGGLE_EDIT} from '../actions/actionTypes';

function editEnabled(state = false, action) {
	console.log(action);
	switch (action.type) {
		case TOGGLE_EDIT:
			return !state;
		default:
			return state;
	}
}

export default editEnabled;