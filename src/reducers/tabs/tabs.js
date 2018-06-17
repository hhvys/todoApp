import todoInfo, {getTodoInfo} from "./todoInfo";
import tabInfo from "./tabInfo";


const tabs = (state = {}, action) => {
	return {
		todoInfo: todoInfo(state.todoInfo, action),
		tabInfo: tabInfo(state.tabInfo, action, state.todoInfo)
	}
};

export default tabs;

export function getTabs(state) {
	return state.tabs.tabInfo.map(tab => {
		const todos = getTodoInfo(state, tab.todos);
		const starredTodos = getTodoInfo(state, tab.starredTodos);
		return {
			...tab,
			todos,
			starredTodos
		}
	});
}
