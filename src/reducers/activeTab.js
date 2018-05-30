import {CHANGE_ACTIVE_TAB} from '../actions/actionTypes';

function activeTab(state = 0, action) {
	switch (action.type) {
		case CHANGE_ACTIVE_TAB:
			return action.tabId;
		default:
			return state;
	}
}

export default activeTab;