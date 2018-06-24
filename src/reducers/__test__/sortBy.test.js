import {SORT_CREATION} from "../../components/atoms/Icons/constants";
import {getSortBy} from "../sortBy";
import {INITIAL_STATE} from "./__fixtures__/reducers.fixtures";
import {CHANGE_SORT, SORT_BY} from "../../actions/actionTypes";
import todoApp from "../index";
import sortBy from "../sortBy";

describe('todoApp sortBy', () => {
	describe('reducer', () => {

		it('should have initial state', () => {
			expect(sortBy(undefined, {})).toEqual(SORT_BY.SORT_CREATION);
		});

		it('should handle CHANGE_SORT', () => {
			const action = {
				type: CHANGE_SORT,
				sortBy: SORT_BY.SORT_ALPHA
			};
			const nextState = {
				...INITIAL_STATE,
				sortBy: SORT_BY.SORT_ALPHA
			};
			expect(todoApp(INITIAL_STATE, action)).toEqual(nextState);
		});

	});
	describe('selector', () => {
		it('should get sortBy', () => {
			expect(getSortBy(INITIAL_STATE)).toBe(SORT_CREATION);
		});
	});
});
