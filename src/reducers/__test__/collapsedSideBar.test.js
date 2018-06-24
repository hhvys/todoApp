import todoApp from "../index";
import {TOGGLE_SIDEBAR} from "../../actions/actionTypes";
import {INITIAL_STATE} from "./__fixtures__/reducers.fixtures";
import {getCollapsedSideBar} from "../collapsedSideBar";
import collapsedSideBar from '../collapsedSideBar';

describe('todoApp collapsedSidebar', () => {
	describe('reducer', () => {

		it('should have initial state', () => {
			expect(collapsedSideBar(undefined, {})).toEqual(false);
		});

		it('should handle TOGGLE_SIDEBAR', () => {
			const action = {
				type: TOGGLE_SIDEBAR
			};
			const nextState = {
				...INITIAL_STATE,
				collapsedSideBar: true
			};
			expect(todoApp(INITIAL_STATE, action)).toEqual(nextState);
		});
	});

	describe('selector', () => {
		it('should get collapsedSideBar', () => {
			expect(getCollapsedSideBar(INITIAL_STATE)).toBe(false);
		});
	});

});
