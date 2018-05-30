import {TOGGLE_MODAL} from '../actions/actionTypes';

function modalActive(state = false, action) {
	switch (action.type) {
		case TOGGLE_MODAL:
			return !state;
		default:
			return state;
	}
}

export default modalActive;