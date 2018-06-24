import todoApp from "../index";
import {INITIAL_STATE} from "./__fixtures__/reducers.fixtures";

describe('todoApp', () => {
	describe('reducer', () => {
		it('should have initial state', () => {
			expect(todoApp(undefined, {})).toEqual(INITIAL_STATE);
		});
	});
});
