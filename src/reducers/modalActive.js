import {TOGGLE_MODAL} from '../actions/actionTypes';

const initialState = {
	isOpened: false,
	tabId: undefined
};

function modalActive(state = initialState, action) {
	switch (action.type) {
		case TOGGLE_MODAL:
			return {
				isOpened: !state.isOpened,
				tabId: action.tabId
			};
		default:
			return state;
	}
}

export function getModalActive(state) {
	return state.modalActive;
}

export default modalActive;
