import {TOGGLE_SIDEBAR} from '../actions/actionTypes';

function collapsedSideBar(state = false, action) {
	switch (action.type) {
		case TOGGLE_SIDEBAR:
			return !state;
		default:
			return state;
	}
}

export default collapsedSideBar;