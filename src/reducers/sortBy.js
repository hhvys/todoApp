import {SORT_BY, CHANGE_SORT} from "../actions/actionTypes";

function sortBy(state = SORT_BY.SORT_CREATION, action) {
	switch (action.type) {
		case CHANGE_SORT:
			return action.sortBy;
		default:
			return state;
	}
}

export function getSortBy(state) {
	return state.sortBy;
}

export default sortBy;
