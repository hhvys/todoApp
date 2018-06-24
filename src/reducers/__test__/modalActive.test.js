import {getModalActive} from "../modalActive";
import {INITIAL_STATE} from "./__fixtures__/reducers.fixtures";
import {TOGGLE_MODAL} from "../../actions/actionTypes";
import todoApp from "../index";
import modalActive from "../modalActive";

describe('todoApp modalActive', () => {
	describe('reducer', () => {

		it('should have initial state', () => {
			expect(modalActive(undefined, {})).toEqual({isOpened: false});
		});

		it('should handle TOGGLE_MODAL if tabId is undefined', () => {
			let action = {
				type: TOGGLE_MODAL,
				tabId: undefined,
			};
			const nextState = {
				...INITIAL_STATE,
				modalActive: {
					isOpened: true,
					tabId: undefined
				}
			};
			expect(todoApp(INITIAL_STATE, action)).toEqual(nextState);
		});

		it('should handle TOGGLE_MODAL if tabId is defined', () => {
			const action = {
				type: TOGGLE_MODAL,
				tabId: 5,
			};
			const nextState = {
				...INITIAL_STATE,
				modalActive: {
					isOpened: true,
					tabId: 5
				}
			};
			expect(todoApp(INITIAL_STATE, action)).toEqual(nextState);
		});
	});
	describe('selector', () => {
		it('should get modalActive', () => {
			expect(getModalActive(INITIAL_STATE)).toEqual({
				isOpened: false
			});
		});
	});
});
