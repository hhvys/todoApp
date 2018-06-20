import {
	CHANGE_ACTIVE_TAB,
	CHANGE_SORT, INBOX_ID,
	SEARCH_QUERY,
	SORT_BY,
	TOGGLE_MODAL,
	TOGGLE_SIDEBAR
} from "../../actions/actionTypes";
import todoApp from '../index';
import {getTabs} from "../tabs/tabs";
import {GET_TABS, INITIAL_STATE, STATE_WITH_TABS} from "./__fixtures__/reducers.fixtures";
import {getActiveTab} from "../activeTab";
import {getCollapsedSideBar} from "../collapsedSideBar";
import {getModalActive} from "../modalActive";
import {getSearchQuery} from "../searchQuery";
import {getSortBy} from "../sortBy";
import {SORT_CREATION} from "../../components/atoms/Icons/constants";

describe('todoApp', () => {
	describe('reducer', () => {

		it('should have initial state', () => {
			expect(todoApp(undefined, {})).toEqual(INITIAL_STATE);
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

	describe('selectors', () => {

		it('should get activeTab', () => {
			expect(getActiveTab(INITIAL_STATE)).toBe(INBOX_ID);
		});

		it('should get collapsedSideBar', () => {
			expect(getCollapsedSideBar(INITIAL_STATE)).toBe(false);
		});

		it('should get modalActive', () => {
			expect(getModalActive(INITIAL_STATE)).toEqual({
				isOpened: false
			});
		});

		it('should get searchQuery', () => {
			const initialState = {
				...INITIAL_STATE,
				searchQuery: 'searchQuery'
			};
			expect(getSearchQuery(initialState)).toBe(initialState.searchQuery);
		});

		it('should get sortBy', () => {
			expect(getSortBy(INITIAL_STATE)).toBe(SORT_CREATION);
		});

		it('should get tabs containing todoInfo', () => {
			expect(getTabs(STATE_WITH_TABS)).toEqual(GET_TABS);
		});

	});
});
