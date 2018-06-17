import {CHANGE_ACTIVE_TAB, INBOX_ID} from '../actions/actionTypes';

function activeTab(state = INBOX_ID, action) {
	switch (action.type) {
		case CHANGE_ACTIVE_TAB:
			return action.tabId;
		default:
			return state;
	}
}

export function getActiveTab(state) {
	return state.activeTab;
}

export default activeTab;
