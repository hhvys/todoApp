import todoById, {getTodoById} from "./todoById";
import tabInfo, {getTabInfo} from "./tabInfo";


const tabs = (state = {}, action) => {
	return {
		todoById: todoById(state.todoById, action),
		tabInfo: tabInfo(state.tabInfo, action, state.todoById)
	}
};

export default tabs;

export function getTabs(state) {
	return state.tabs;
}

/**
 *
 * @param state
 * @returns {*} array of tabs. to-do info will also be available along with to-do id.
 */

export function getTabsWithInfo(state) {
	return getTabInfo(state).map(tab => {
		const todos = getTodoById(state, tab.todos);
		const starredTodos = getTodoById(state, tab.starredTodos);
		return {
			...tab,
			todos,
			starredTodos
		}
	});
}
