import {getSearchQuery} from "../searchQuery";
import {INITIAL_STATE} from "./__fixtures__/reducers.fixtures";
import todoApp from "../index";
import {SEARCH_QUERY} from "../../actions/actionTypes";
import searchQuery from '../searchQuery';

describe('todoApp searchQuery', () => {
	describe('reducer', () => {

		it('should have initial state', () => {
			expect(searchQuery(undefined, {})).toEqual('');
		});

		it('should handle SEARCH_QUERY', () => {
			const action = {
				type: SEARCH_QUERY,
				query: 'anything'
			};
			const nextState = {
				...INITIAL_STATE,
				searchQuery: 'anything'
			};
			expect(todoApp(INITIAL_STATE, action)).toEqual(nextState);
		});
	});
	describe('selector', () => {
		it('should get searchQuery', () => {
			const initialState = {
				...INITIAL_STATE,
				searchQuery: 'searchQuery'
			};
			expect(getSearchQuery(initialState)).toBe(initialState.searchQuery);
		});
	});
});
