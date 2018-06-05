/*
 * General Actions
 */

export const CHANGE_ACTIVE_TAB = 'CHANGE_ACTIVE_TAB';
export const TOGGLE_SIDEBAR = 'TOGGLE_SIDEBAR';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const CHANGE_SORT = 'CHANGE_SORT';
export const TOGGLE_DROPDOWN = 'TOGGLE_DROPDOWN';
export const SEARCH_QUERY = 'SEARCH_QUERY';

/*
 * Tab Actions
 */
export const ADD_TAB = 'ADD_TAB';
export const CHANGE_TAB_NAME = 'CHANGE_TAB_NAME';
export const DELETE_TAB = 'DELETE_TAB';
export const COPY_TAB = 'COPY_TAB';
export const TOGGLE_VISIBILITY_FILTER = 'TOGGLE_VISIBILITY_FILTER';

/*
 * Todo Actions
 */
export const ADD_TODO = 'ADD_TODO';
export const ADD_STARRED_TODO = 'ADD_STARRED_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const STAR_TOGGLE_TODO = 'STAR_TOGGLE_TODO';
export const ACTIVE_TODO = 'ACTIVE_TODO';

/*
	* Sort Actions
	* */

export const SORT_BY = {
	SORT_ALPHA: 'SORT_ALPHA',
	SORT_CREATION: 'SORT_CREATION',
	SORT_PRIORITY: 'SORT_PRIORITY'
};

export const INBOX_ID = 0;
export const STARRED_ID = 1;