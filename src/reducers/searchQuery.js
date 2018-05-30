import {SEARCH_QUERY} from "../actions/actionTypes";

function searchQuery (state = '', action) {
	switch (action.type) {
		case SEARCH_QUERY:
			return action.query;
		default:
			return state;
	}
}

export default searchQuery;