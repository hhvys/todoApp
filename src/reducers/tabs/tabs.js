import todoInfo, {getTodoInfo} from "./todoInfo";
import tabInfo, {getTabInfo} from "./tabInfo";


const tabs = (state = {}, action) => {
	return {
		todoInfo: todoInfo(state.todoInfo, action),
		tabInfo: tabInfo(state.tabInfo, action, state.todoInfo)
	}
};

export default tabs;

export function getTabs(state) {
	return getTabInfo(state.tabs).map(tab => {
		const todos = getTodoInfo(state.tabs, tab.todos);
		const starredTodos = getTodoInfo(state.tabs, tab.starredTodos);
		return {
			...tab,
			todos,
			starredTodos
		}
	});
}
