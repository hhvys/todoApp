import {TOGGLE_EDIT} from '../actions/actionTypes';

const editEnabled = (state = false, action) => {
	switch (action.type) {
		case TOGGLE_EDIT:
			return !state;
		default:
			return state;
	}
}

export default editEnabled;