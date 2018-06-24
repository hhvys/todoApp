import todoApp from "../index";
import {CHANGE_ACTIVE_TAB, INBOX_ID} from "../../actions/actionTypes";
import {INITIAL_STATE} from "./__fixtures__/reducers.fixtures";
import {getActiveTab} from "../activeTab";
import activeTab from '../activeTab';

describe('todoApp activeTab', () => {
	describe('reducer', () => {

		it('should have initial state', () => {
			expect(activeTab(undefined, {})).toEqual(INBOX_ID);
		});

		it('should handle CHANGE_ACTIVE_TAB', () => {
			const action = {
				type: CHANGE_ACTIVE_TAB,
				tabId: 5
			};
			const nextState = {
				...INITIAL_STATE,
				activeTab: 5
			};
			expect(todoApp(INITIAL_STATE, action)).toEqual(nextState);
		});
	});

	describe('selector', () => {
		it('should get activeTab', () => {
			expect(getActiveTab(INITIAL_STATE)).toBe(INBOX_ID);
		});
	});

});
