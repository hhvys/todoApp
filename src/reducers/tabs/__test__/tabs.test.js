import {getTabs} from "../tabs";
import {GET_TABS, STATE_WITH_TABS} from "../../__test__/__fixtures__/reducers.fixtures";

describe('todoApp tabs', () => {
	describe('selector', () => {
		it('should get tabs containing todoInfo', () => {
			expect(getTabs(STATE_WITH_TABS)).toEqual(GET_TABS);
		});
	});
});
